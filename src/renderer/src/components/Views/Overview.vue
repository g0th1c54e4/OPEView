<script setup lang="ts">

import { useGlobalStore } from '../../store'
const global = useGlobalStore()
</script>

<style scoped>
  ::v-deep(.el-input){
    width: 75vw;
  }
</style>

<template>
    <el-space direction = "vertical" :wrap = "true" :fill = "true" :size="10">
        <el-input :value="((global.attrib.Is64bit) ? '64' : '32') + '位 PE 文件'" readonly>
        <template #prepend>[PE]类型</template>
        </el-input>

        <el-input :value="global.attrib.Size + ' 字节'" readonly>
        <template #prepend>文件大小</template>
        </el-input>

        <el-input :value="global.attrib.CreateData" readonly>
        <template #prepend>创建日期</template>
        </el-input>

        <el-input :value="global.attrib.FileVersion" readonly>
        <template #prepend>文件版本</template>
        </el-input>

        <el-input :value="global.attrib.EntrySectionName" readonly>
        <template #prepend>程序入口所在区段</template>
        </el-input>

        <el-input :value="global.attrib.EntryAddrRVA" readonly>
        <template #prepend>程序入口RVA</template>
        </el-input>

        <el-input :value="global.attrib.EntryAddrFOA" readonly>
        <template #prepend>程序入口FOA</template>
        </el-input>

        <el-input :value="global.attrib.SectionNum" readonly>
        <template #prepend>区块数量</template>
        </el-input>

        <el-input :value="global.attrib.ImageBase" readonly>
        <template #prepend>映像基址</template>
        </el-input>

        <el-input :value="global.attrib.FileType" readonly>
        <template #prepend>文件类型</template>
        </el-input>

        <el-input :value="global.attrib.SubSystem" readonly>
        <template #prepend>子系统</template>
        </el-input>

        <el-input :value="global.attrib.MD5" readonly>
        <template #prepend>MD5</template>
        </el-input>

        <el-input :value="global.attrib.SHA1" readonly>
        <template #prepend>SHA1</template>
        </el-input>

        <el-input :value="global.attrib.SAH256" readonly>
        <template #prepend>SAH256</template>
        </el-input>

        <el-input :value="global.attrib.SAH512" readonly>
        <template #prepend>SAH512</template>
        </el-input>

        <el-input :value="global.attrib.CRC32" readonly>
        <template #prepend>CRC32</template>
        </el-input>

        <el-input :value="global.attrib.AuthentiHash" readonly>
        <template #prepend>AuthentiHash</template>
        </el-input>
        
    </el-space>





</template>
