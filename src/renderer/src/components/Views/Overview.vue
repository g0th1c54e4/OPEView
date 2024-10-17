<script setup lang="ts">

import { useGlobalStore } from '../../store'
const global = useGlobalStore()
global.count = Math.random()*100;
</script>

<style scoped>

</style>

<template>
已修改count
</template>
