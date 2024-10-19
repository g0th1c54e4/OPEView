import { AxiosResponse } from 'axios'
import { IElectron } from './interface'

declare global {
  interface Window {
    electron: IElectron

    file_read: (filepath : string) => Buffer
    file_write: (filepath : string, data) => void
  }
}
