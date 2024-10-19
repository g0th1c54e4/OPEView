import { IElectron } from './interface'

declare global {
  interface Window {
    electron: IElectron

    net_request: (url : string, data) => AxiosResponse<any, any>

    file_read: (filepath : string) => Buffer
    file_write: (filepath : string, data) => void
  }
}
