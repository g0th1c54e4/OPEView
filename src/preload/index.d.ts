import { IElectron } from './interface'
import { OpenDialogOptions, SaveDialogOptions } from 'electron'

declare global {
  interface Window {
    electron: IElectron

    file_read: (filepath : string) => Buffer
    file_write: (filepath : string, data) => void

    file_opendialog: (options : OpenDialogOptions) => Promise<string[]>
    file_savedialog: (options : SaveDialogOptions) => Promise<string>
  }
}
