<script setup lang="ts">

import { ref } from 'vue';
import { useGlobalStore } from '../../store'
const global = useGlobalStore()

const drawer = ref(true)

</script>

<style scoped>

</style>

<template>
    <el-drawer v-model="drawer" title = "计算器" direction="rtl" :close-on-click-modal="false" size="70%">
        <span>计算</span>
    </el-drawer>
</template>
