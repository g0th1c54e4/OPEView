import axios from 'axios'
import { AxiosResponse } from 'axios'
import { uint8ArrayToBase64 } from './Utils/util'

export interface send_data_type {
    FilePath: string,
    Size: number,
    Data: string,
}

export interface recv_data_type {
    Status: string,
    FileName: string,
    FilePath: string,
    Size: number,
    Data: string
}

export async function upload(filePath : string){
    const buf : Buffer = window.file_read(filePath)
    const data : string = uint8ArrayToBase64(buf)

    const size : number = buf.length
    const post_data: send_data_type = {
        FilePath: filePath,
        Size: size,
        Data: data
    }

    const resp : AxiosResponse = await axios.post("http://localhost:5555/upload", post_data)
    if (resp.status == 200){
        const resp_data = resp.data
        return resp_data
    }

    return {}
}