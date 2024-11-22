<script setup lang="ts">

import { ref } from 'vue';
import { useGlobalStore } from '../../store'
const global = useGlobalStore()

let card_AuthentiHash = ref<boolean>(false);
</script>

<style scoped>

  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box>.el-input{
    width: 92%;
  }
</style>

<template>
  
  <div class="box">

    <el-input :value="(global.attrib.OverView.Is64bit) + '位 PE 文件'" readonly>
    <template #prepend>[PE]类型</template>
    </el-input>

    <el-input :value="global.attrib.OverView.Size + ' 字节'" readonly>
    <template #prepend>文件大小</template>
    </el-input>

    <el-input :value="global.attrib.OverView.CreateData" readonly>
    <template #prepend>创建日期</template>
    </el-input>

    <el-input :value="global.attrib.OverView.FileVersion" readonly>
    <template #prepend>文件版本</template>
    </el-input>

    <el-input :value="global.attrib.OverView.EntrySectionName" readonly>
    <template #prepend>程序入口所在区段</template>
    </el-input>

    <el-input :value="global.attrib.OverView.EntryAddrRVA" readonly>
    <template #prepend>程序入口RVA</template>
    </el-input>

    <el-input :value="global.attrib.OverView.EntryAddrFOA" readonly>
    <template #prepend>程序入口FOA</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SectionNum" readonly>
    <template #prepend>区块数量</template>
    </el-input>

    <el-input :value="global.attrib.OverView.ImageBase" readonly>
    <template #prepend>映像基址</template>
    </el-input>

    <el-input :value="global.attrib.OverView.FileType" readonly>
    <template #prepend>文件类型</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SubSystem" readonly>
    <template #prepend>子系统</template>
    </el-input>

    <el-input :value="global.attrib.OverView.MD5" readonly>
    <template #prepend>MD5</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SHA1" readonly>
    <template #prepend>SHA1</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SAH256" readonly>
    <template #prepend>SAH256</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SAH384" readonly>
    <template #prepend>SAH384</template>
    </el-input>

    <el-input :value="global.attrib.OverView.SAH512" readonly>
    <template #prepend>SAH512</template>
    </el-input>

    <el-input :value="global.attrib.OverView.Checksum" readonly>
    <template #prepend>CheckSum</template>
    </el-input>

    <el-input :value="global.attrib.OverView.AuthentiHash" readonly @mouseenter="()=>{ card_AuthentiHash = true; }" @mouseleave="()=>{ card_AuthentiHash = false; }">
    <template #prepend>AuthentiHash</template>
    </el-input>

    <el-card v-show = "card_AuthentiHash" @mouseenter="()=>{ card_AuthentiHash = true; }" @mouseleave="()=>{ card_AuthentiHash = false; }">
      <template #header><span style="font-style:italic;">AuthentiHash</span></template>
      <el-input :value="global.attrib.OverView.AuthentiHash" readonly>
        <template #prepend>MD5</template>
      </el-input>
      <el-input :value="global.attrib.OverView.AuthentiHash_sha1" readonly>
        <template #prepend>SHA1</template>
      </el-input>
      <el-input :value="global.attrib.OverView.AuthentiHash_sha256" readonly>
        <template #prepend>SHA256</template>
      </el-input>
      <el-input :value="global.attrib.OverView.AuthentiHash_sha384" readonly>
        <template #prepend>SHA384</template>
      </el-input>
      <el-input :value="global.attrib.OverView.AuthentiHash_sha512" readonly>
        <template #prepend>SHA512</template>
      </el-input>
    </el-card>
        
  </div>

</template>
