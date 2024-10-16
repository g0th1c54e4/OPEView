<script setup lang="ts">
import FileDragArea from './components/FileDrag.vue'
import LogArea from './components/Log.vue'
import MenuArea from './components/Menu.vue';

</script>

<style scoped>
</style>

<template>

  <el-container>
    <el-header><FileDragArea></FileDragArea></el-header>

    <el-container>
      <el-aside width="200px"><MenuArea></MenuArea></el-aside>
      <el-container>
        <el-main><RouterView></RouterView></el-main>
        <el-footer><LogArea></LogArea></el-footer>
      </el-container>
    </el-container>

  </el-container>

</template>