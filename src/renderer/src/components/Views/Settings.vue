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
    <el-drawer :model-value="drawer" title = "设置" direction="rtl" :close-on-click-modal="false" size="70%">
        <el-switch v-model="global.settings.prefix_hex_string_0x" size="large" active-text="在十六进制数据前添加0x前缀"></el-switch>
    </el-drawer>
</template>
