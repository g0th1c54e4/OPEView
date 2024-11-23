<script setup lang="ts">

import InfoPopover from './InfoPopover.vue';

const { 
    title = "", // 标题
    infoWidth = 600, // 提示框宽度
    infoPlacement = "right", // 提示框出现方向
    divider_position = "left" // 标题所在方向
} = defineProps<{
    title?: string,
    infoWidth?: number,
    infoPlacement?: string,
    divider_position?: string
}>()

</script>

<template>
    <el-divider :content-position="divider_position">
        <span style="color: #8B8989;font-style:italic;">{{ title }}{{ ($slots.Info) ? ' ' : '' }}</span>
        <InfoPopover :width="infoWidth" :placement="infoPlacement" v-if="$slots.Info">
            <slot name="Info"></slot>
        </InfoPopover>
    </el-divider>
</template>
