import { contextBridge } from 'electron'
import fs from 'fs'
import axios from 'axios'

import { IElectron } from './interface'

const electron : IElectron = {
  enable: true
}

if (process.contextIsolated) {
  try {
    
    contextBridge.exposeInMainWorld('electron', electron)

    contextBridge.exposeInMainWorld('net_request', async (url : string, data) => {
      return await axios.post(url, data)
    })

    contextBridge.exposeInMainWorld('file_read', (filepath : string) => {
      let buf : Buffer = fs.readFileSync(filepath)
      return buf;
    })

    contextBridge.exposeInMainWorld('file_write', (filepath : string, data) => {
      fs.writeFileSync(filepath, data)
    })

  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electron

  // @ts-ignore (define in dts)
  window.net_request = async (url : string, data) => {
    return await axios.post(url, data)
  }

  // @ts-ignore (define in dts)
  window.file_read = (filepath : string) => {
    let buf : Buffer = fs.readFileSync(filepath)
    return buf;
  }

  // @ts-ignore (define in dts)
  window.file_write = (filepath : string, data) => {
    fs.writeFileSync(filepath, data)
  }

}