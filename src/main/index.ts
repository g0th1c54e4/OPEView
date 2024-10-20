import { app, BrowserWindow, ipcMain, OpenDialogOptions, SaveDialogOptions, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1150,
    height: 900,
    show: false,
    autoHideMenuBar: true,
    icon: icon,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
    }
  })
  mainWindow.setMenu(null);

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.handle("dialog:openfile", async (_event, options : OpenDialogOptions) => {
    const { canceled, filePaths } = await dialog.showOpenDialog(options)
    if (!canceled) {
      return filePaths
    }
    return []
  })

  ipcMain.handle("dialog:savefile", async (_event, options : SaveDialogOptions) => {
    const { canceled, filePath } = await dialog.showSaveDialog(options)
    if (!canceled) {
      return filePath
    }
    return ""
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
