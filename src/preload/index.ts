import { contextBridge, ipcRenderer } from 'electron'
import fs from 'fs'

interface IElectron {
  enable: boolean
}

const electron : IElectron = {
  enable: true
}

if (process.contextIsolated) {
  try {
    
    contextBridge.exposeInMainWorld('electron', electron)
    
    contextBridge.exposeInMainWorld('file_read', (filepath : string) => {
      let buf : Buffer = fs.readFileSync(filepath)
      return buf;
    })

    contextBridge.exposeInMainWorld('file_write', (filepath : string, data) => {
      fs.writeFileSync(filepath, data)
    })

    contextBridge.exposeInMainWorld('file_opendialog', (options) => {
      return ipcRenderer.invoke("dialog:openfile", options)
    })

    contextBridge.exposeInMainWorld('file_savedialog', (options) => {
      return ipcRenderer.invoke("dialog:savefile", options)
    })
  

  } catch (error) {
    console.error(error)
  }

} else {
  // @ts-ignore (define in dts)
  window.electron = electron

  // @ts-ignore (define in dts)
  window.file_read = (filepath : string) => {
    let buf : Buffer = fs.readFileSync(filepath)
    return buf;
  }

  // @ts-ignore (define in dts)
  window.file_write = (filepath : string, data) => {
    fs.writeFileSync(filepath, data)
  }

  // @ts-ignore (define in dts)
  window.file_opendialog = (options) => {
    return ipcRenderer.invoke("dialog:openfile", options)
  }

  // @ts-ignore (define in dts)
  window.file_savedialog = (options) => {
    return ipcRenderer.invoke("dialog:savefile", options)
  }

}