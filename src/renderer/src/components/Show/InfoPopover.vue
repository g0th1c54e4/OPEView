<script setup lang="ts">

import {
  InfoFilled
} from '@element-plus/icons-vue'

const {
  width = 600, // 宽度
  placement = "right", // 出现方向
  scrollMaxHeight = 550 // 滚动条最高高度
} = defineProps<{
  width?: number,
  placement?: string,
  scrollMaxHeight?: number
}>()

</script>

<template>
      <el-popover :placement="placement" :width="width" trigger="hover" hide-after="0">
      <template #reference>
        <el-icon style="cursor: pointer;"><InfoFilled /></el-icon>
      </template>
      <el-scrollbar :max-height="scrollMaxHeight">
        <slot></slot>
      </el-scrollbar>
      </el-popover>
</template>
