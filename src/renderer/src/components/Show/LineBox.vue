<script setup lang="ts">

import InfoPopover from './InfoPopover.vue';

const { 
    value, // 输入框值
    infoWidth = 600, // 提示框宽度
    infoPlacement = "right", // 提示框出现方向
} = defineProps<{
    value: any,
    infoWidth?: number,
    infoPlacement?: string,
    TypeTag?: string
    OffsetTag?: string
    OffsetFileTag?: string
}>()

</script>

<template>
    <el-input :value="value" readonly>
        <!-- <template #prefix></template> -->
        <template #prepend>
            <slot></slot>
            <InfoPopover :width="infoWidth" :placement="infoPlacement" v-if="$slots.Info">
                <slot name="Info"></slot>
            </InfoPopover>
        </template>
    </el-input>
</template>
