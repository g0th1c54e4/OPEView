<script setup lang="ts">
import { ref } from 'vue'
import icon from '../assets/output.ico';
import { MoreFilled } from '@element-plus/icons-vue'

import Calc from './Views/Calc.vue';
const calc_drawer = ref<boolean>(false);
import Settings from './Views/Settings.vue';
const settings_drawer = ref<boolean>(false);
import About from './Views/About.vue';
const about_drawer = ref<boolean>(false);

import { upload , recv_data_type } from '../ajax'

import { OpenDialogReturnValue } from 'electron';

import { useGlobalStore } from '../store'
const global = useGlobalStore()

async function fileopen(){
  const returnValue : OpenDialogReturnValue = await window.file_opendialog({
    title: "打开"
  })

  if (returnValue.canceled !== true){
    const data : recv_data_type = await upload(returnValue.filePaths[0])
    if (data.Status === "Successful"){
      global.attrib.Buffer = data.Data
      global.attrib.FileName = data.FileName
      global.attrib.FilePath = data.FilePath
      global.attrib.Size = data.Size
    } else {
      console.error("data.Status != 'Successful'")
    }
  }
}

const tour = ref(false);

async function test(){
  console.log(await window.file_savedialog({title:"你好"}));
}

</script>

<template>

  <div class="navbar">
    <div class="upload_image_box">
      <el-image :src="icon"></el-image>
    </div>

    <div class="btnbar">
      <div style="display: flex; justify-content: center; width: 100%;">
        <el-input style="width: 90%; height: 40px;" :value="global.attrib.FilePath" readonly>
          <template #prepend>文件位置</template>
          <template #suffix>
            <el-button type="primary" @click="fileopen">打开文件</el-button>
          </template>
        </el-input>
      </div>

      <div class="btns">
        <el-button-group>
        <el-button type="primary" style="width: 90px;" @click="test" plain>刷新</el-button>
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

  <!-- <el-tour v-model="tour" type="primary" :show-close="false">
    <el-tour-step :target="upload_ref?.$el" placement="right">
      点击或者拖拽PE文件到此处。
    </el-tour-step>
  </el-tour> -->

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

.upload_image_box{
  width: 115px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed var(--el-border-color);
}
</style>
