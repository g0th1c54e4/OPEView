<script setup lang="ts">

import { useGlobalStore } from '../../store'
import LineBox from '../Show/LineBox.vue';
import LineBoxStuMbr from '../Show/LineBoxStuMbr.vue';
import Divider from '../Show/Divider.vue';
import { reactive, watch } from 'vue';
import { rva2foa, rva_sectionName } from '@renderer/Utils/peutil';
import { DataDir_Captions } from '@renderer/captions';
import { fillZeroPrefix } from '@renderer/Utils/util';

const global = useGlobalStore()

interface PageInfoType{
    Name: string,
    VirtualAddr: string,
    VirtualAddrFOA: string,
    Size: string,
    SectionName: string
}
let Page_DataDirectorys : PageInfoType[] = reactive([]);

watch(
    () => global.attrib.Headers.OptFileHdr.DataDirectory,
    (DataDirectory) => {
        Page_DataDirectorys.splice(0, Page_DataDirectorys.length);
        for (let i = 0; i < DataDirectory.length; i++) {
            let labelName = DataDir_Captions[i]
            let _VirtualAddrFOA = rva2foa(DataDirectory[i].VirtualAddress.value)
            _VirtualAddrFOA = fillZeroPrefix(_VirtualAddrFOA, 8 - _VirtualAddrFOA.length);
            let _SectionName = rva_sectionName(DataDirectory[i].VirtualAddress.value)

            Page_DataDirectorys.push({
                Name: labelName,
                VirtualAddr: DataDirectory[i].VirtualAddress.value,
                VirtualAddrFOA: _VirtualAddrFOA,
                Size: DataDirectory[i].Size.value,
                SectionName: _SectionName
            })
        }
  }, {immediate: true}
)



</script>

<template>
    <el-table :data="Page_DataDirectorys" height="100vh">
        <el-table-column prop="Name" label="名称" width="300"></el-table-column>
        <el-table-column prop="VirtualAddr" label="RVA"></el-table-column>
        <el-table-column prop="VirtualAddrFOA" label="FOA"></el-table-column>
        <el-table-column prop="Size" label="Size"></el-table-column>
        <el-table-column prop="SectionName" label="所在区块"></el-table-column>
    </el-table>
</template>
