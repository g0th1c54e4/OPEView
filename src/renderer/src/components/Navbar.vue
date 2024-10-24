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

import { useGlobalStore, updateStore } from '../store'
const global = useGlobalStore()

async function fileopen(){
  const returnValue : OpenDialogReturnValue = await window.file_opendialog({
    title: "打开"
  })

  if (returnValue.canceled !== true){
    const data : recv_data_type = await upload(returnValue.filePaths[0])
    if (data.Status === "Successful"){
      updateStore(data.Analysis)
    } else {
      console.error("data.Status wasn't 'Successful'")
    }
  }
}

async function test(){
  console.log(await window.file_savedialog({title:"你好"}));
}

</script>

<template>

  <div class="navbar">
    <div class="upload_image_box">
      <el-image :src="icon" style="width: 65%;"></el-image>
    </div>

    <div class="btnbar">
      <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
        <el-input style="width: 80%; height: 35px;" :value="global.attrib.FilePath" readonly>
          <template #prepend>文件位置</template>
        </el-input>
        <el-button type="primary" @click="fileopen" style="margin-left: 4px;">打开文件</el-button>
      </div>

      <div class="btns">
        <el-button-group>
        <el-button type="primary" style="width: 80px;" plain>保存</el-button>
        <el-button type="primary" style="width: 80px;" plain>关闭</el-button>
        <el-button type="primary" style="width: 80px;" @click="test" plain>刷新</el-button>

        </el-button-group>

        <el-tooltip placement="bottom">
          <template #content>RVA <-> FOA</template>
          <el-button type="primary" style="width: 130px;" @click="calc_drawer=true" plain>计算器</el-button>
        </el-tooltip>

        <el-button-group>
        <el-button type="primary" style="width: 80px;" @click="settings_drawer=true" plain>设置</el-button>
        <el-button type="primary" style="width: 80px;" @click="about_drawer=true" plain>关于</el-button>
        <el-tooltip placement="bottom">
          <template #content>...</template>
          <el-button type="primary" plain><el-icon><MoreFilled /></el-icon></el-button>
        </el-tooltip>
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
  align-items: center;
}

.upload_image_box{
  width: 125px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed var(--el-border-color);
}
</style>
