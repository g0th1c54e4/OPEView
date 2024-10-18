<script setup lang="ts">

let props = defineProps<{
    drawer: boolean
}>()


</script>

<template>
    <el-drawer v-model="props.drawer" title = "关于" direction="rtl" :close-on-click-modal="false" size="70%">
        <span>LingMo</span>
    </el-drawer>
</template>
