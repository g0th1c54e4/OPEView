<script setup lang="ts">

import { useGlobalStore } from '../../store'
import EditBox from '../Show/EditBox.vue';
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
    <EditBox :value="(global.attrib.OverView.Is64bit) + '位 PE 文件'">[PE]类型</EditBox>
    <EditBox :value="global.attrib.OverView.Size + ' 字节'">文件大小</EditBox>
    <EditBox :value="global.attrib.OverView.CreateData">创建日期</EditBox>
    <EditBox :value="global.attrib.OverView.FileVersion">文件版本</EditBox>
    <EditBox :value="global.attrib.OverView.EntrySectionName">程序入口所在区段</EditBox>
    <EditBox :value="global.attrib.OverView.EntryAddrRVA">程序入口RVA</EditBox>
    <EditBox :value="global.attrib.OverView.EntryAddrFOA">程序入口FOA</EditBox>
    <EditBox :value="global.attrib.OverView.SectionNum">区块数量</EditBox>
    <EditBox :value="global.attrib.OverView.ImageBase">映像基址</EditBox>
    <EditBox :value="global.attrib.OverView.FileType">文件类型</EditBox>
    <EditBox :value="global.attrib.OverView.SubSystem">子系统</EditBox>
    <EditBox :value="global.attrib.OverView.MD5">MD5</EditBox>
    <EditBox :value="global.attrib.OverView.SHA1">SHA1</EditBox>
    <EditBox :value="global.attrib.OverView.SAH256">SAH256</EditBox>
    <EditBox :value="global.attrib.OverView.SAH384">SAH384</EditBox>
    <EditBox :value="global.attrib.OverView.SAH512">SAH512</EditBox>
    <EditBox :value="global.attrib.OverView.Checksum">Checksum</EditBox>
    <EditBox :value="global.attrib.OverView.AuthentiHash">AuthentiHash
      <template #Info>
        <EditBox :value="global.attrib.OverView.AuthentiHash">MD5</EditBox>
        <EditBox :value="global.attrib.OverView.AuthentiHash_sha1">SHA1</EditBox>
        <EditBox :value="global.attrib.OverView.AuthentiHash_sha256">SHA256</EditBox>
        <EditBox :value="global.attrib.OverView.AuthentiHash_sha384">SHA384</EditBox>
        <EditBox :value="global.attrib.OverView.AuthentiHash_sha512">SHA512</EditBox>
      </template>
    </EditBox>


        
  </div>

</template>
