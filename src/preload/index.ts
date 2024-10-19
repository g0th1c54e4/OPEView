import { contextBridge, ipcRenderer } from 'electron'

import { IElectron } from './interface'

const electron : IElectron = {
  enable: true
}

if (process.contextIsolated) {
  try {
    
    contextBridge.exposeInMainWorld('electron', electron)
    contextBridge.exposeInMainWorld('net_post', (param : string) => {
      ipcRenderer.invoke("net:post", param)
    })

  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electron
  // @ts-ignore (define in dts)
  window.net_post = (param : string) => {
    ipcRenderer.invoke("net:post", param)
  }

}
