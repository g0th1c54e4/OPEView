import { IElectron } from './interface'

declare global {
  interface Window {

    electron: IElectron
    net_post: VoidFunction
    
  }
}
