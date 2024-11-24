<script setup lang="ts">

import { useGlobalStore } from '../../store'
// import InfoPopover from '../Show/InfoPopover.vue';
import LineBox from '../Show/LineBox.vue';
import LineBoxStuMbr from '../Show/LineBoxStuMbr.vue';
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
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_magic">e_magic</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_cblp">e_cblp</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_cp">e_cp</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_crlc">e_crlc</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_cparhdr">e_cparhdr</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_minalloc">e_minalloc</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_maxalloc">e_maxalloc</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_ss">e_ss</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_sp">e_sp</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_csum">e_csum</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_ip">e_ip</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_cs">e_cs</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_lfarlc">e_lfarlc</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_ovno">e_ovno</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_res">e_res</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_oemid">e_oemid</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_oeminfo">e_oeminfo</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_res2">e_res2</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.DosHdr.e_lfanew">e_lfanew</LineBoxStuMbr>
    </template>
  </Divider>
  <div class="box">
    <LineBox :value="global.attrib.Headers.DosHdr.HeaderSize">头尺寸</LineBox>
    <LineBox :value="global.attrib.Headers.DosHdr.StubSize">Stub</LineBox>
  </div>

  <Divider title="Image File Header">
    <template #Info>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.Machine">Machine</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.NumberOfSections">NumberOfSections</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.TimeDateStamp">TimeDateStamp</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.NumberOfSymbols">NumberOfSymbols</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.SizeOfOptionalHeader">SizeOfOptionalHeader</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.FileHdr.Characteristics">Characteristics</LineBoxStuMbr>
    </template>
  </Divider>
  <div class="box">
    <LineBox :value="global.attrib.Headers.FileHdr.NumberOfSections.value">区块数</LineBox>
    <LineBox :value="global.attrib.Headers.FileHdr.TimeDateStamp.value">时间戳</LineBox>
    <LineBox :value="global.attrib.Headers.FileHdr.SizeOfOptionalHeader.value">可选头大小</LineBox>
    <LineBox :value="global.attrib.Headers.FileHdr.Characteristics.value">文件属性
      <template #Info>
        <el-checkbox-group v-model="global.attrib.Headers.FileHdr.extra_Characteristics_enableBits" disabled>
        <p v-for="(name, i) in FileHdrCharacteristics_Captions">
          <el-checkbox :label="name" :value="i" v-if="i != 6"></el-checkbox>
        </p>
        </el-checkbox-group>
      </template>
    </LineBox>
  </div>

  <Divider title="Image Optional File Header">
    <template #Info>
      
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.Magic">Magic</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MajorLinkerVersion">MajorLinkerVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MinorLinkerVersion">MinorLinkerVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfCode">SizeOfCode</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfInitializedData">SizeOfInitializedData</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfUninitializedData">SizeOfUninitializedData</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint">AddressOfEntryPoint</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.BaseOfCode">BaseOfCode</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.BaseOfData" v-if="(global.attrib.OverView.Is64bit == '32')">BaseOfData</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.ImageBase">ImageBase</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SectionAlignment">SectionAlignment</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.FileAlignment">FileAlignment</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MajorOperatingSystemVersion">MajorOperatingSystemVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MinorOperatingSystemVersion">MinorOperatingSystemVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MajorImageVersion">MajorImageVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MinorImageVersion">MinorImageVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MajorSubsystemVersion">MajorSubsystemVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.MinorSubsystemVersion">MinorSubsystemVersion</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.Win32VersionValue">Win32VersionValue</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfImage">SizeOfImage</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfHeaders">SizeOfHeaders</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.CheckSum">CheckSum</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.Subsystem">Subsystem</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.DllCharacteristics">DllCharacteristics</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfStackReserve">SizeOfStackReserve</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfStackCommit">SizeOfStackCommit</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfHeapReserve">SizeOfHeapReserve</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.SizeOfHeapCommit">SizeOfHeapCommit</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.LoaderFlags">LoaderFlags</LineBoxStuMbr>
      <LineBoxStuMbr :StuMbr="global.attrib.Headers.OptFileHdr.NumberOfRvaAndSizes">NumberOfRvaAndSizes</LineBoxStuMbr>

    </template>
  </Divider>
  <div class="box">
    <LineBox :value="global.attrib.Headers.OptFileHdr.MajorLinkerVersion.value+'.'+global.attrib.Headers.OptFileHdr.MinorLinkerVersion.value">
      链接器版本</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SizeOfCode.value">代码段大小</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SizeOfInitializedData.value">初始化数据大小</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SizeOfUninitializedData.value">未初始化数据大小</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.AddressOfEntryPoint.value">程序入口</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.BaseOfCode.value">代码段入口</LineBox>
    <LineBox :value="(global.attrib.OverView.Is64bit == '32') ? (global.attrib.Headers.OptFileHdr.BaseOfData.value) : ''">
      数据段入口</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.ImageBase.value">程序默认基址</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SectionAlignment.value">区块对齐值</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.FileAlignment.value">文件对齐值</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.MajorOperatingSystemVersion.value+'.'+global.attrib.Headers.OptFileHdr.MinorOperatingSystemVersion.value">
      操作系统版本号</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.MajorImageVersion.value+'.'+global.attrib.Headers.OptFileHdr.MinorImageVersion.value">
      自定义版本号</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.MajorSubsystemVersion.value+'.'+global.attrib.Headers.OptFileHdr.MinorSubsystemVersion.value">
      子系统版本号</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.Win32VersionValue.value">Win32VersionValue</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SizeOfImage.value">内存中装载总大小</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.SizeOfHeaders.value">头部总大小</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.CheckSum.value">映像校验和</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.Subsystem.value">文件子系统</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.DllCharacteristics.value">Dll属性
      <template #Info>
        <el-checkbox-group v-model="global.attrib.Headers.OptFileHdr.extra_DllCharacteristics_enableBits" disabled>
        <p v-for="(name, i) in DllCharacteristics_Captions">
          <el-checkbox :label="name" :value="i" v-if="i > 4"></el-checkbox>
        </p>
        </el-checkbox-group>
      </template>
    </LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.LoaderFlags.value">LoaderFlags</LineBox>
    <LineBox :value="global.attrib.Headers.OptFileHdr.NumberOfRvaAndSizes.value">NumberOfRvaAndSizes</LineBox>
  </div>

</template>
