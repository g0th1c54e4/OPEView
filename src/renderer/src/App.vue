<script setup lang="ts">
//NewJeans - Cool With You

import Navbar from './components/Navbar.vue'
import MenuArea from './components/Menu.vue';
import { ref } from 'vue';

import { useGlobalStore } from './store'
const global = useGlobalStore()

import { upload , recv_data_type } from './ajax'

const electron_warning = ref<boolean>( ((window.electron) === undefined) || ((window.electron.enable) === false))

async function FileDrop(e){
  e.preventDefault();
  const files = e.dataTransfer.files;
 
  if(files && files.length === 1) {
    const path = files[0].path;

    const data : recv_data_type = await upload(path)
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
</script>

<style scoped>
.el-header{
  height: 140px;
}
</style>

<template>

  <div @drop="FileDrop" @dragover="(e) => {e.preventDefault();}">
    <el-dialog v-model="electron_warning" title="Shipping address" :close-on-click-modal="false">
      <template #header>温馨提醒</template>
      本程序需要在 Node.js 环境下运行, 请重新打开 Electron 客户端。
      <template #footer>
        <el-button type="primary" @click="electron_warning = false">关闭</el-button>
      </template>
    </el-dialog>
    
    <el-scrollbar height="97vh">
      <el-container>
        <el-header class="Header"><Navbar></Navbar></el-header>
        <div style="display: flex ;justify-content: center;"><el-divider style="width: 75%; min-width: 500px;"></el-divider></div>
        <el-container>
          <el-aside width="200px"><MenuArea></MenuArea></el-aside>
          <el-main><RouterView></RouterView></el-main>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>

</template>