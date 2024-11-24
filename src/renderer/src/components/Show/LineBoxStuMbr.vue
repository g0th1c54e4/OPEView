<script setup lang="ts">

import InfoPopover from './InfoPopover.vue';
import { StructMember } from '@renderer/pefile';

const {
    infoWidth = 600, // 提示框宽度
    infoPlacement = "right", // 提示框出现方向
} = defineProps<{
    infoWidth?: number,
    infoPlacement?: string,
    StuMbr: StructMember
}>()

</script>

<template>
    <el-input :value="StuMbr.value" readonly>
        <template #suffix>
            <el-tag type='success' effect="dark" size="small" color="#4EC9B0" v-if="StuMbr.typeName != ''">{{ StuMbr.typeName }}</el-tag>
            <el-tag type="primary" effect="dark" size="small" v-if="String(StuMbr.offset) != ''" round>
                {{ String(StuMbr.offset) + ((String(StuMbr.offsetFile) != '') ? (' / ' + String(StuMbr.offsetFile)) : '') }}
            </el-tag>
        </template>
        <template #prepend>
            <slot></slot>
            <InfoPopover :width="infoWidth" :placement="infoPlacement" v-if="$slots.Info">
                <slot name="Info"></slot>
            </InfoPopover>
        </template>
    </el-input>
</template>
