import { contextBridge, ipcRenderer } from 'electron'

import { IElectron } from './interface'

const electron : IElectron = {
  enable: true
}

if (process.contextIsolated) {
  try {
    
    contextBridge.exposeInMainWorld('electron', electron)
    contextBridge.exposeInMainWorld('net_post', (url : string, data) => {
      ipcRenderer.invoke("net:post", url, data)
    })
    contextBridge.exposeInMainWorld('on_net_post', (callback : (data : string) => {}) => {
      ipcRenderer.on("net:post:back", (_event, data) => {callback(data)})
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
  // @ts-ignore (define in dts)
  window.on_net_post = (callback : (data : string) => {}) => {
    ipcRenderer.on("net:post:back", (_event, data) => {callback(data)})
  }
}