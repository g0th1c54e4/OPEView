<script setup lang="ts">

import { reactive, ref, toRefs, watch } from 'vue';
import { useGlobalStore } from '../../store'
import { hexToNumber, numberToHex } from '@renderer/Utils/util';
import LineBox from '../Show/LineBox.vue';
import LineBoxStuMbr from '../Show/LineBoxStuMbr.vue';
import Divider from '../Show/Divider.vue';
import { foa2rva, rva2foa, rva_sectionName } from '@renderer/Utils/peutil';

let props = defineProps<{
    drawer: boolean
}>()
const { drawer } = toRefs(props)

const global = useGlobalStore()

let user_rva= ref<string>("")
let user_foa = ref<string>("")
let user_va = ref<string>("")
let user_section = ref<string>("")

function update(ref : number){
    switch (ref) {
        case 0: // RVA
            user_foa.value = rva2foa(user_rva.value)
            user_va.value = numberToHex(hexToNumber(user_rva.value) + hexToNumber(global.attrib.Headers.OptFileHdr.ImageBase.value)).toUpperCase()
            break;
        case 1: // FOA
            user_rva.value = foa2rva(user_foa.value)
            user_va.value = numberToHex(hexToNumber(user_rva.value) + hexToNumber(global.attrib.Headers.OptFileHdr.ImageBase.value)).toUpperCase()
            break;
        case 2: // VA

            break;
    }
    user_section.value = rva_sectionName(user_rva.value);

}

</script>

<style scoped>
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box>.el-input{
    width: 92%;
    margin-bottom: 3px
  }
</style>

<template>
    <el-drawer :model-value="drawer" title = "计算器" direction="rtl" :close-on-click-modal="false" size="70%">
        <div class="box">
            <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SectionAlignment">区块对齐值</LineBoxStuMbr>
            <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.FileAlignment">文件对齐值</LineBoxStuMbr>
            <Divider title="计算"></Divider>
            <el-input v-model="user_rva" @input="()=>{update(0)}"> <!-- :formatter="(value:string)=>{ return value.match() }" -->
                <template #prepend>
                    RVA
                </template>
            </el-input>
            <el-input v-model="user_foa" @input="()=>{update(1)}">
                <template #prepend>
                    FOA
                </template>
            </el-input>
            <el-input v-model="user_va" @input="()=>{update(2)}">
                <template #prepend>
                    VA
                </template>
            </el-input>
            <el-input :value="user_section" readonly>
                <template #prepend>
                    所在区块
                </template>
            </el-input>

        </div>


    </el-drawer>
</template>
