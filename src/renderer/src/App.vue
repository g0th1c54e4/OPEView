<script setup lang="ts">
//NewJeans - Cool With You

import Navbar from './components/Navbar.vue'
import MenuArea from './components/Menu.vue';
import { ref } from 'vue';

const electron_warning = ref<boolean>((window.electron) === undefined)
</script>

<style scoped>
*{
  user-select: none;
}
.el-header{
  height: 160px;
}
</style>

<template>
  
  <el-dialog v-model="electron_warning" title="Shipping address" :close-on-click-modal="false">
    <template #header>温馨提醒</template>
    本程序需要在Node.js环境下运行。
    <template #footer>
      <el-button type="primary" @click="electron_warning = false">关闭</el-button>
    </template>
  </el-dialog>

  <el-scrollbar height="97vh">
    <el-container>
      <el-header class="Header"><Navbar></Navbar></el-header>
      <el-container>
        <el-aside width="200px"><MenuArea></MenuArea></el-aside>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </el-scrollbar>
</template>
