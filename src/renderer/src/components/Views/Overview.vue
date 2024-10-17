<script setup lang="ts">

import { useGlobalStore } from '../../store'
const global = useGlobalStore()
</script>

<style scoped>

</style>

<template>
    <el-space direction = "vertical">
        <el-input :value="((global.attrib.is64bit) ? '64' : '32') + '位 PE 文件'" readonly>
        <template #prepend>[PE]类型: </template>
        </el-input>

        <el-input :value="global.attrib.size + ' 字节'" readonly>
        <template #prepend>文件大小: </template>
        </el-input>


    </el-space>





</template>
