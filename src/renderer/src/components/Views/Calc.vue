<script setup lang="ts">

import { toRefs } from 'vue';
import { useGlobalStore } from '../../store'

let props = defineProps<{
    drawer: boolean
}>()
const { drawer } = toRefs(props)

const global = useGlobalStore()

</script>

<template>
    <el-drawer :model-value="drawer" title = "计算器" direction="rtl" :close-on-click-modal="false" size="70%">
        <span>计算{{ global.attrib.FileName }}</span>
    </el-drawer>
</template>
