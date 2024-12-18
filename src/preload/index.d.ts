import { OpenDialogOptions, SaveDialogOptions, OpenDialogReturnValue, SaveDialogReturnValue } from 'electron'

interface IElectron {
  enable: boolean
}

declare global {
  interface Window {
    electron: IElectron

    file_read: (filepath : string) => Buffer
    file_write: (filepath : string, data) => void

    file_opendialog: (options : OpenDialogOptions) => Promise<OpenDialogReturnValue>
    file_savedialog: (options : SaveDialogOptions) => Promise<SaveDialogReturnValue>
  }
}
