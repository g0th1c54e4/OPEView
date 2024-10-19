import { app, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { net } from 'electron'

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

  ipcMain.handle("net:post", (_event, param_url : string, param_data) =>{

    const request = net.request({
      method : "post",
      url: param_url
    })

    request.on('response', (response) => {
      response.on("data", (chunk)=>{
        mainWindow.webContents.send("net:post:back", chunk.toString())
      })
    })
    request.end();
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
