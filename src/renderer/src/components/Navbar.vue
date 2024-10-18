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
  closeFile();
}

const closeFile = () => {
  global.attrib.FileName = ''
  fileList.value = []
}

</script>

<template>

  <!-- <div v-if="global.attrib.FileName === ''">
    <el-upload :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload"><span class="el-upload__text">点击或拖拽PE文件到此</span></el-upload>
  </div>

  <div v-else class="sa">
      <el-image style="width: 100px; height: 100px" :src="''" :zoom-rate="1.2" :max-scale="7" :min-scale="0.2" :initial-index="4" fit="cover"></el-image>

      <div class="aas">
        <el-input style="width: 500px;" :value="global.attrib.FileName" readonly>
          <template #prepend>文件名称</template>
        </el-input>
        
        <el-input style="width: 500px;" :value="global.attrib.FileName" readonly>
          <template #prepend>文件名称</template>
        </el-input>
        
      </div>

  </div> -->

  <div class="sa">
    <el-upload :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload"><span class="el-upload__text">点击或拖拽PE文件到此</span></el-upload>
    <div class="aas">
      <el-input style="width: 95%;height: 40px;" :value="global.attrib.FileName" readonly>
        <template #prepend>文件名称</template>
      </el-input>

      <div class="btns">
        <el-button-group>
        <el-button type="primary" style="width: 90px;" plain>计算器</el-button>
        <el-button type="primary" style="width: 130px;" plain>进程转换</el-button>
        </el-button-group>

        <el-button-group>
        <el-button type="primary" style="width: 80px;" plain>设置</el-button>
        <el-button type="primary" style="width: 80px;" plain>关于</el-button>
        </el-button-group>
      </div>

    </div>
  </div>
</template>

<style scoped>
.sa{
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  width: 100%;
}
.aas{
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.btns{
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
}

::v-deep(.el-upload){
  width: 124px;
}
</style>
