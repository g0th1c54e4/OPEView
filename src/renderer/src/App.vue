<script setup lang="ts">
import FileDragArea from './components/FileDrag.vue'
import MenuArea from './components/Menu.vue';

</script>

<style scoped>
*{
  user-select: none;
}
.el-header{
  height: 120px;
}
</style>

<template>
<el-scrollbar height="97vh">
  <el-container>
    <el-header class="Header"><FileDragArea></FileDragArea></el-header>
    
    <el-container>
      <el-aside width="200px"><MenuArea></MenuArea></el-aside>
      <el-main><RouterView></RouterView></el-main>
    </el-container>
  </el-container>
</el-scrollbar>
</template>
