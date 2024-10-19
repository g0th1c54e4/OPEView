<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile,UploadRequestOptions, UploadProgressEvent } from 'element-plus'
import axios from "axios";
import { Plus } from '@element-plus/icons-vue'

import Calc from './Views/Calc.vue';
const calc_drawer = ref<boolean>(false);
import Settings from './Views/Settings.vue';
const settings_drawer = ref<boolean>(false);
import About from './Views/About.vue';
const about_drawer = ref<boolean>(false);

import { useGlobalStore } from '../store'
const global = useGlobalStore()

const fileList = ref<UploadUserFile[]>([])

const upload = (param: UploadRequestOptions) => {
  let fr = new FileReader()
  fr.onload = (e) => {
    //@ts-ignore
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
        //@ts-ignore
        if (param.file.path !== undefined) { //@ts-ignore
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

const progressFile = (evt:UploadProgressEvent) => {
  console.log(evt.percent);
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

  <div class="navbar">
    <div style="">
      <el-upload :action="'#'" :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload" @on-progress="progressFile">
        <el-icon><Plus /></el-icon>
        <template #file>你好</template>
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
        </el-button-group>
      </div>

    </div>
  </div>

  <Calc :drawer="calc_drawer" @close="() => {calc_drawer=false}"></Calc>
  <Settings :drawer="settings_drawer" @close="() => {settings_drawer=false}"></Settings>
  <About :drawer="about_drawer" @close="() => {about_drawer=false}"></About>

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
}

::v-deep(.el-upload){
  width: 103px;
  height: 150px;
}
</style>
