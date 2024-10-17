<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile,UploadRequestOptions } from 'element-plus'
import axios from "axios";

import { useGlobalStore } from '../store'
const global = useGlobalStore()

const fileList = ref<UploadUserFile[]>([])

const upload = (param: UploadRequestOptions) => {
  let fr = new FileReader()
  fr.onload = (e) => {
    let data:string = (((e.target.result).split(","))[1])

    interface post_json_type {
      FileName: string,
      Size: number,
      Data: string,
    }

    let post_json: post_json_type = {
      FileName: param.file.name,
      Size: param.file.size,
      Data: data
    }

    axios.post('http://localhost:5555/upload', post_json)
    .then((response) => {
      if (response.status == 200){
        console.log(param);
        
        const resp_data : post_json_type = response.data
        global.attrib.Buffer = resp_data.Data
        if (param.file.path !== undefined){
          global.attrib.FileName = param.file.path
        }else{
          global.attrib.FileName = param.file.name
        }
        
      }
    })
    .catch((error) => {
      console.error(error)
    })

  }
  fr.readAsDataURL(param.file)
}

const closeFile = () => {
  global.attrib.FileName = ''
  fileList.value = []
}

</script>

<template>
  <div v-if="global.attrib.FileName === ''">
    <el-upload :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload" :disabled="global.attrib.FileName !== ''"><span class="el-upload__text">点击或拖拽PE文件到此</span></el-upload>
  </div>
  
  <div v-if="global.attrib.FileName !== ''"><el-space direction = "horizontal" :size = "15">
    <el-input :value="global.attrib.FileName" style="width: 500px;" readonly>
    <template #prepend>文件名称</template>
    </el-input>

    <el-button type="primary" @click="closeFile">关闭文件</el-button>
  </el-space></div>
</template>

<style scoped>

  ::v-deep(.el-upload){
    height: 120px;
    min-width: 200px;
  }

</style>