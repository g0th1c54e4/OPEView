<script setup lang="ts">

import { useGlobalStore } from '../../store'

let props = defineProps<{
    drawer: boolean
}>()

const global = useGlobalStore()

</script>

<template>
    <el-drawer v-model="props.drawer" title = "设置" direction="rtl" :close-on-click-modal="false" size="70%">
        <span>设置{{ global.attrib.FileName }}</span>
    </el-drawer>
</template>
