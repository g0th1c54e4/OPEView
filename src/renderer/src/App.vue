<script setup lang="ts">
//NewJeans - Cool With You

import Navbar from './components/Navbar.vue'
import MenuArea from './components/Menu.vue';
import { ref } from 'vue';

const electron_warning = ref<boolean>( ((window.electron) === undefined) || ((window.electron.enable) === false))

</script>

<style scoped>
.el-header{
  height: 140px;
}
</style>

<template>
  
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
      <div style="display: flex ;justify-content: center;"><el-divider style="width: 75%;"></el-divider></div>
      <el-container>
        <el-aside width="200px"><MenuArea></MenuArea></el-aside>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </el-scrollbar>

</template>
