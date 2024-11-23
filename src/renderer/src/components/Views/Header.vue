<script setup lang="ts">

import { useGlobalStore } from '../../store'
// import InfoPopover from '../Show/InfoPopover.vue';
import EditBox from '../Show/EditBox.vue';
import Divider from '../Show/Divider.vue';
const global = useGlobalStore()

let FileHdrCharacteristics_Captions = [
  "Relocation info stripped from file",
  "File is executable",
  "Line nunbers stripped from file",
  "Local symbols stripped from file",
  "Aggressively trim working set",
  "App can handle > 2gb addresses",
  "[Don't remove THIS!!!]",
  "Bytes of machine word are reversed",
  "32 bit word machine",
  "Debugging info stripped from file in .DBG file",
  "If Image is on removable media, copy and run from the swap file",
  "If Image is on Net, copy and run from the swap file",
  "System File",
  "File is a DLL",
  "File should only be run on a UP machine",
  "Bytes of machine word are reversed"
]

let DllCharacteristics_Captions = [
  "[Don't remove THIS!!!]",
  "[Don't remove THIS!!!]",
  "[Don't remove THIS!!!]",
  "[Don't remove THIS!!!]",
  "[Don't remove THIS!!!]",
  "Image can handle a high entropy 64-bit virtual address space",
  "DLL can move",
  "Code Integrity Image",
  "Image is NX compatible",
  "Image understands isolation and doesn't want it",
  "Image does not use SEH.  No SE handler may reside in this image",
  "Do not bind this image",
  "Image should execute in an AppContainer",
  "Driver uses WDM model",
  "Image supports Control Flow Guard",
  "Terminal Server Aware"
]

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

  <Divider title="Image DOS Header">
    <template #Info>
      <EditBox :value="global.attrib.Headers.DosHdr.e_magic">e_magic</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_cblp">e_cblp</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_cp">e_cp</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_crlc">e_crlc</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_cparhdr">e_cparhdr</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_minalloc">e_minalloc</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_maxalloc">e_maxalloc</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_ss">e_ss</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_sp">e_sp</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_csum">e_csum</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_ip">e_ip</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_cs">e_cs</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_lfarlc">e_lfarlc</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_ovno">e_ovno</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_res">e_res</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_oemid">e_oemid</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_oeminfo">e_oeminfo</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_res2">e_res2</EditBox>
      <EditBox :value="global.attrib.Headers.DosHdr.e_lfanew">e_lfanew</EditBox>
    </template>
  </Divider>
  <div class="box">
    <EditBox :value="global.attrib.Headers.DosHdr.HeaderSize">头尺寸</EditBox>
    <EditBox :value="global.attrib.Headers.DosHdr.StubSize">Stub</EditBox>
  </div>

  <Divider title="Image File Header">
    <template #Info>
      <EditBox :value="global.attrib.Headers.FileHdr.Machine">Machine</EditBox>
      <EditBox :value="global.attrib.Headers.FileHdr.NumberOfSections">NumberOfSections</EditBox>
      <EditBox :value="global.attrib.Headers.FileHdr.TimeDateStamp">TimeDateStamp</EditBox>
      <EditBox :value="global.attrib.Headers.FileHdr.NumberOfSymbols">NumberOfSymbols</EditBox>
      <EditBox :value="global.attrib.Headers.FileHdr.SizeOfOptionalHeader">SizeOfOptionalHeader</EditBox>
      <EditBox :value="global.attrib.Headers.FileHdr.Characteristics" infoPlacement="bottom">Characteristics</EditBox>
    </template>
  </Divider>
  <div class="box">
    <EditBox :value="global.attrib.Headers.FileHdr.NumberOfSections">区块数</EditBox>
    <EditBox :value="global.attrib.Headers.FileHdr.TimeDateStamp">时间戳</EditBox>
    <EditBox :value="global.attrib.Headers.FileHdr.SizeOfOptionalHeader">可选头大小</EditBox>
    <EditBox :value="global.attrib.Headers.FileHdr.Characteristics">文件属性
      <template #Info>
        <el-checkbox-group v-model="global.attrib.Headers.FileHdr.extra_Characteristics_enableBits" disabled>
        <p v-for="(name, i) in FileHdrCharacteristics_Captions">
          <el-checkbox :label="name" :value="i" v-if="i != 6"></el-checkbox>
        </p>
        </el-checkbox-group>
      </template>
    </EditBox>
  </div>

  <Divider title="Image Optional File Header">
    <template #Info>
      
      <EditBox :value="global.attrib.Headers.OptFileHdr.Magic">Magic</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MajorLinkerVersion">MajorLinkerVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MinorLinkerVersion">MinorLinkerVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfCode">SizeOfCode</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfInitializedData">SizeOfInitializedData</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfUninitializedData">SizeOfUninitializedData</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint">AddressOfEntryPoint</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.BaseOfCode">BaseOfCode</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.BaseOfData">BaseOfData</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.ImageBase">ImageBase</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SectionAlignment">SectionAlignment</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.FileAlignment">FileAlignment</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MajorOperatingSystemVersion">MajorOperatingSystemVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MinorOperatingSystemVersion">MinorOperatingSystemVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MajorImageVersion">MajorImageVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MinorImageVersion">MinorImageVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MajorSubsystemVersion">MajorSubsystemVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.MinorSubsystemVersion">MinorSubsystemVersion</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.Win32VersionValue">Win32VersionValue</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfImage">SizeOfImage</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfHeaders">SizeOfHeaders</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.CheckSum">CheckSum</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.Subsystem">Subsystem</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.DllCharacteristics">DllCharacteristics</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfStackReserve">SizeOfStackReserve</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfStackCommit">SizeOfStackCommit</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfHeapReserve">SizeOfHeapReserve</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfHeapCommit">SizeOfHeapCommit</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.LoaderFlags">LoaderFlags</EditBox>
      <EditBox :value="global.attrib.Headers.OptFileHdr.NumberOfRvaAndSizes">NumberOfRvaAndSizes</EditBox>

    </template>
  </Divider>
  <div class="box">
    <EditBox :value="global.attrib.Headers.OptFileHdr.MajorLinkerVersion+'.'+global.attrib.Headers.OptFileHdr.MinorLinkerVersion">
      链接器版本</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfCode">代码段大小</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfInitializedData">初始化数据大小</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfUninitializedData">未初始化数据大小</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint">程序入口</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.BaseOfCode">代码段入口</EditBox>
    <EditBox :value="(global.attrib.OverView.Is64bit == '32') ? (global.attrib.Headers.OptFileHdr.BaseOfData) : ''">
      数据段入口</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.ImageBase">程序默认基址</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SectionAlignment">区块对齐值</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.FileAlignment">文件对齐值</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.MajorOperatingSystemVersion+'.'+global.attrib.Headers.OptFileHdr.MinorOperatingSystemVersion">
      操作系统版本号</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.MajorImageVersion+'.'+global.attrib.Headers.OptFileHdr.MinorImageVersion">
      自定义版本号</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.MajorSubsystemVersion+'.'+global.attrib.Headers.OptFileHdr.MinorSubsystemVersion">
      子系统版本号</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.Win32VersionValue">Win32VersionValue</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfImage">内存中装载总大小</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.SizeOfHeaders">头部总大小</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.CheckSum">映像校验和</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.Subsystem">文件子系统</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.DllCharacteristics">Dll属性
      <template #Info>
        <el-checkbox-group v-model="global.attrib.Headers.OptFileHdr.extra_DllCharacteristics_enableBits" disabled>
        <p v-for="(name, i) in DllCharacteristics_Captions">
          <el-checkbox :label="name" :value="i" v-if="i > 4"></el-checkbox>
        </p>
        </el-checkbox-group>
      </template>
    </EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.LoaderFlags">LoaderFlags</EditBox>
    <EditBox :value="global.attrib.Headers.OptFileHdr.NumberOfRvaAndSizes">NumberOfRvaAndSizes</EditBox>
  </div>

</template>
