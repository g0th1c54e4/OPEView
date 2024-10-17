<script setup lang="ts">
import { useGlobalStore } from '../../store'
const global = useGlobalStore()

</script>

<style scoped>

</style>

<template>
{{ global.count }}
</template>
