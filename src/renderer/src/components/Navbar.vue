<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile,UploadRequestOptions, UploadProgressEvent, UploadInstance } from 'element-plus'
import gifimage from '../assets/output.ico';
import { Plus, MoreFilled } from '@element-plus/icons-vue'
import { AxiosResponse } from 'axios'

import Calc from './Views/Calc.vue';
const calc_drawer = ref<boolean>(false);
import Settings from './Views/Settings.vue';
const settings_drawer = ref<boolean>(false);
import About from './Views/About.vue';
const about_drawer = ref<boolean>(false);

import { useGlobalStore } from '../store'
const global = useGlobalStore()

import { uint8ArrayToBase64 } from './Utils/util'

const fileList = ref<UploadUserFile[]>([])

interface post_json_type {
      FileName: string,
      Size: number,
      Data: string,
}


const upload = (param: UploadRequestOptions) => {
  //@ts-ignore
  if (param.file.path === undefined) {
    return;
  }
  closeFile()
  //@ts-ignore
  const buf = window.file_read(param.file.path)
  const data : string = uint8ArrayToBase64(buf)

  const post_json: post_json_type = {
    FileName: param.file.name,
    Size: param.file.size,
    Data: data
  }
  
  window.net_request("http://localhost:5555/upload", post_json).then((resp : AxiosResponse) => {
    if (resp.status == 200){
      const resp_data : post_json_type = resp.data
      global.attrib.Buffer = resp_data.Data
      //@ts-ignore
      global.attrib.FileName = param.file.path
    }
  })
}

const closeFile = () => {
  global.attrib.FileName = ''
  fileList.value = []
}

const progressFile = (evt:UploadProgressEvent) => {
  console.log(evt.percent);
}

const upload_ref = ref<UploadInstance>()
const tour = ref(false);

</script>

<template>

  <div class="navbar">
    <div style="">
      <el-upload ref="upload_ref" :action="'#'" :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload" @on-progress="progressFile">
        <div>
          <el-icon v-if="false"><Plus /></el-icon>
          <el-image v-else :src="gifimage"></el-image>
        </div>
      </el-upload>
    </div>

    <div class="btnbar">
      <div style="display: flex; justify-content: center; width: 100%;">
        <el-input style="width: 90%; height: 40px;" :value="global.attrib.FileName" readonly>
          <template #prepend>文件位置</template>
        </el-input>
      </div>

      <div class="btns">
        <el-button-group>
        <el-button type="primary" style="width: 90px;" plain>刷新</el-button>
        <el-tooltip placement="bottom">
          <template #content>RVA <-> FOA</template>
          <el-button type="primary" style="width: 130px;" @click="calc_drawer=true" plain>计算器</el-button>
        </el-tooltip>
        </el-button-group>

        <el-button-group>
        <el-button type="primary" style="width: 80px;" @click="settings_drawer=true" plain>设置</el-button>
        <el-button type="primary" style="width: 80px;" @click="about_drawer=true" plain>关于</el-button>
        <el-tooltip placement="bottom">
          <template #content>开启教程</template>
          <el-button type="primary" @click="tour=true" plain><el-icon><MoreFilled /></el-icon></el-button>
        </el-tooltip>
        </el-button-group>
        
      </div>

    </div>
  </div>

  <Calc :drawer="calc_drawer" @close="() => {calc_drawer=false}"></Calc>
  <Settings :drawer="settings_drawer" @close="() => {settings_drawer=false}"></Settings>
  <About :drawer="about_drawer" @close="() => {about_drawer=false}"></About>

  <el-tour v-model="tour" type="primary" :show-close="false">
    <el-tour-step :target="upload_ref?.$el" placement="right">
      点击或者拖拽PE文件到此处。
    </el-tour-step>
  </el-tour>

</template>

<style scoped>

.navbar{
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  width: 97%;
}
.btnbar{
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
  align-items: center;
}

::v-deep(.el-upload){
  width: 103px;
}
</style>
