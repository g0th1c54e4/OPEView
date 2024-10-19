import { IElectron } from './interface'

declare global {
  interface Window {

    electron: IElectron
    net_post: (url : string, data) => {}
    on_net_post: (callback) => {}
  }
}
