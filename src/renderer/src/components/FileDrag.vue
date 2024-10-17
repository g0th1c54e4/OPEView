<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile,UploadRequestOptions } from 'element-plus'
import axios from "axios";

import { useGlobalStore } from '../store'
const global = useGlobalStore()

const fileList = ref<UploadUserFile[]>([])
let upload_disabled = ref(false);

const upload = (param: UploadRequestOptions) => {
  let fr = new FileReader()
  fr.onload = (e) => {
    let data_base64 = (((e.target.result).split(","))[1])

    interface post_json_type {
      FileName: string,
      Size: number,
      Data: string
    }

    let post_json: post_json_type = {
      FileName: param.file.name,
      Size: param.file.size,
      Data: data_base64
    }

    axios.post('http://localhost:5555/upload', post_json)
    .then((response) => {
      if (response.status == 200){
        const data : post_json_type = response.data
        console.log(data)
      }
    })
    .catch((error) => {
      console.error(error)
    })

  }
  fr.readAsDataURL(param.file)

  upload_disabled.value = true;
}

</script>

<template>

  <el-upload :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload" :disabled="upload_disabled"><span class="el-upload__text">点击或拖拽PE文件到此</span></el-upload>
  
</template>

<style scoped>

  ::v-deep(.el-upload){
    height: 120px;
    min-width: 200px;
  }

</style>