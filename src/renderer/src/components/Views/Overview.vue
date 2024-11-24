<script setup lang="ts">

import { useGlobalStore } from '../../store'
import LineBox from '../Show/LineBox.vue';
const global = useGlobalStore()

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
    <LineBox :value="(global.attrib.OverView.Is64bit) + '位 PE 文件'">[PE]类型</LineBox>
    <LineBox :value="global.attrib.OverView.Size + ' 字节'">文件大小</LineBox>
    <LineBox :value="global.attrib.OverView.CreateData">创建日期</LineBox>
    <LineBox :value="global.attrib.OverView.FileVersion">文件版本</LineBox>
    <LineBox :value="global.attrib.OverView.EntrySectionName">程序入口所在区段</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint.value">程序入口RVA</LineBox>
    <LineBox :value="global.attrib.OverView.EntryAddrFOA">程序入口FOA</LineBox>
    <LineBox :value="global.attrib.Headers.FileHdr.NumberOfSections.value">区块数量</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.ImageBase.value">映像基址</LineBox>
    <LineBox :value="global.attrib.OverView.FileType">文件类型</LineBox>
    <LineBox :value="global.attrib.OverView.SubSystem">子系统</LineBox>

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
