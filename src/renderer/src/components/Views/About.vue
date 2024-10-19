<script setup lang="ts">

import { toRefs } from 'vue';
let props = defineProps<{
    drawer: boolean
}>()
const { drawer } = toRefs(props)

</script>

<template>
    <el-drawer :model-value="drawer" title = "关于" direction="rtl" :close-on-click-modal="false" size="70%">
        <span>LingMo</span>
    </el-drawer>
</template>
