<script setup lang="ts">

import { reactive, watch } from 'vue';
import { useGlobalStore } from '../../store'
import LineBox from '../Show/LineBox.vue';
import { rva2foa, rva_sectionName } from '@renderer/Utils/peutil';
import { SubSystem_Captions } from '@renderer/captions';
import { hexToNumber } from '@renderer/Utils/util';
const global = useGlobalStore()


interface PageInfoType{
  EntryAddrFOA: string,
  FileBit: string,
  EntrySecName: string,
  SubSystem: string,
  FileType: string
}
//@ts-ignore
const PageInfo : PageInfoType = reactive({})

watch(
  () => global.attrib.OverView,
  (_OverView) => {
    PageInfo.EntryAddrFOA = rva2foa(global.attrib.Headers.OptFileHdr.AddressOfEntryPoint.value)
    PageInfo.FileBit = ("[") + (global.attrib.OverView.Is64bit ? "64" : "32") + ("] 位 PE 文件")
    PageInfo.EntrySecName = rva_sectionName(global.attrib.Headers.OptFileHdr.AddressOfEntryPoint.value)
    PageInfo.SubSystem = SubSystem_Captions[hexToNumber(global.attrib.Headers.OptFileHdr.Subsystem.value)]
    
    if (hexToNumber(global.attrib.Headers.FileHdr.Characteristics.value) & 0x2000){
      PageInfo.FileType = "DLL"
    }else if (hexToNumber(global.attrib.Headers.OptFileHdr.Subsystem.value) == 1){ // IMAGE_SUBSYSTEM_NATIVE
      PageInfo.FileType = "SYS"
    }else{
      PageInfo.FileType = "EXE"
    }

  }, {immediate: true}
)

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
  
  <div class="box">
    <LineBox :value="PageInfo.FileBit">[PE]类型</LineBox>
    <LineBox :value="global.attrib.OverView.Size + ' 字节'">文件大小</LineBox>
    <LineBox :value="global.attrib.OverView.CreateData">创建日期</LineBox>
    <LineBox :value="global.attrib.OverView.FileVersion">文件版本</LineBox>
    <LineBox :value="PageInfo.EntrySecName">程序入口所在区段</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint.value">程序入口RVA</LineBox>
    <LineBox :value="PageInfo.EntryAddrFOA">程序入口FOA</LineBox>
    <LineBox :value="global.attrib.Headers.FileHdr.NumberOfSections.value">区块数量</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.ImageBase.value">映像基址</LineBox>
    <LineBox :value="PageInfo.FileType">文件类型</LineBox>
    <LineBox :value="PageInfo.SubSystem">子系统</LineBox>

    <LineBox :value="global.attrib.OverView.MD5">MD5</LineBox>
    <LineBox :value="global.attrib.OverView.SHA1">SHA1</LineBox>
    <LineBox :value="global.attrib.OverView.SAH256">SAH256</LineBox>
    <LineBox :value="global.attrib.OverView.SAH384">SAH384</LineBox>
    <LineBox :value="global.attrib.OverView.SAH512">SAH512</LineBox>
    <LineBox :value="global.attrib.OverView.Checksum">Checksum</LineBox>
    <LineBox :value="global.attrib.OverView.AuthentiHash">AuthentiHash
      <template #Info>
        <LineBox :value="global.attrib.OverView.AuthentiHash">MD5</LineBox>
        <LineBox :value="global.attrib.OverView.AuthentiHash_sha1">SHA1</LineBox>
        <LineBox :value="global.attrib.OverView.AuthentiHash_sha256">SHA256</LineBox>
        <LineBox :value="global.attrib.OverView.AuthentiHash_sha384">SHA384</LineBox>
        <LineBox :value="global.attrib.OverView.AuthentiHash_sha512">SHA512</LineBox>
      </template>
    </LineBox>


        
  </div>

</template>
