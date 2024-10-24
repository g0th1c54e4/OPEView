import axios from 'axios'
import { AxiosResponse } from 'axios'
import { uint8ArrayToBase64 } from './Utils/util'

import { AnalysisPEData } from "./store"
import { ElNotification } from 'element-plus'

export interface send_data_type {
    Size: number,
    Data: string,
}

export interface recv_data_type {
    Status: string,
    Analysis: AnalysisPEData,
}

export async function upload(filePath : string){
    const buf : Buffer = window.file_read(filePath)
    const data : string = uint8ArrayToBase64(buf)

    const size : number = buf.length

    const post_data: send_data_type = {
        Size: size,
        Data: data
    }

    try{
        const resp : AxiosResponse = await axios.post("http://localhost:5555/upload", post_data)
        if (resp.status == 200){
            const resp_data = resp.data
            return resp_data
        } else {
            throw {};
        }
    } catch(err){
        ElNotification({
            title: "[DEBUG]:",
            message: "无法响应 C++ 服务器。",
            duration: 3000,
            type: 'error'
        })
    }

    return {}
}

//------------------------------------------

// import pe from './pe.node'

// export async function upload_dll(filePath : string){
//     const buf : Buffer = window.file_read(filePath)
//     const size : number = buf.length

//     return {}
// }