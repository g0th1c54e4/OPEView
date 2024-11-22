<script setup lang="ts">

import { reactive} from 'vue';
import { useGlobalStore } from '../../store'
import {
  Lock,
} from '@element-plus/icons-vue'
const global = useGlobalStore()

let page_options = reactive({
  card_dos: false,
  card_dos_lock: false,
  card_fileHdrAttrib: false,
  card_fileHdrAttrib_lock: false,
});

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

  <div>
    <el-divider content-position="left"><span style="color: #8B8989;font-style:italic;">DOS 头</span></el-divider>
    <div @mouseenter="()=>{ page_options.card_dos = true;}" @mouseleave="()=>{ page_options.card_dos = false; }" class="box">
      <el-input :value="global.attrib.Headers.DosHdr.HeaderSize" readonly>
      <template #prepend>头尺寸</template>
      </el-input>

      <el-input :value="global.attrib.Headers.DosHdr.StubSize" readonly>
      <template #prepend>Stub</template>
      </el-input>
    </div>
    <el-card v-show = "page_options.card_dos || page_options.card_dos_lock" @mouseenter="()=>{ page_options.card_dos = true; }" @mouseleave="()=>{ page_options.card_dos = false; }">
      <template #header><el-switch v-model="page_options.card_dos_lock" :active-icon="Lock"></el-switch></template>
      <el-input :value="global.attrib.Headers.DosHdr.e_magic" readonly>
      <template #prepend>e_magic</template>
      <template #suffix>
        <el-tooltip placement="top">
          <template #content>参考值: 5A4D</template>
          <el-tag effect="dark" type='success' v-if='(global.attrib.Headers.DosHdr.e_magic == "5A4D")'>Valid</el-tag>
          <el-tag effect="dark" type='warning' v-else>Invalid</el-tag>
        </el-tooltip>
      </template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_cblp" readonly>
      <template #prepend>e_cblp</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_cp" readonly>
      <template #prepend>e_cp</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_crlc" readonly>
      <template #prepend>e_crlc</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_cparhdr" readonly>
      <template #prepend>e_cparhdr</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_minalloc" readonly>
      <template #prepend>e_minalloc</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_maxalloc" readonly>
      <template #prepend>e_maxalloc</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_ss" readonly>
      <template #prepend>e_ss</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_sp" readonly>
      <template #prepend>e_sp</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_csum" readonly>
      <template #prepend>e_csum</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_ip" readonly>
      <template #prepend>e_ip</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_cs" readonly>
      <template #prepend>e_cs</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_lfarlc" readonly>
      <template #prepend>e_lfarlc</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_ovno" readonly>
      <template #prepend>e_ovno</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_res" readonly>
      <template #prepend>e_res</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_oemid" readonly>
      <template #prepend>e_oemid</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_oeminfo" readonly>
      <template #prepend>e_oeminfo</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_res2" readonly>
      <template #prepend>e_res2</template>
      </el-input>
      <el-input :value="global.attrib.Headers.DosHdr.e_lfanew" readonly>
      <template #prepend>e_lfanew</template>
      </el-input>
    </el-card>

    <el-divider content-position="left"><span style="color: #8B8989;font-style:italic;">Image File Header</span></el-divider>
    <div class="box">
      <el-input :value="global.attrib.Headers.FileHdr.NumberOfSections" readonly>
      <template #prepend>区块数</template>
      </el-input>

      <el-input :value="global.attrib.Headers.FileHdr.TimeDateStamp" readonly>
      <template #prepend>时间戳</template>
      </el-input>
      
      <el-input :value="global.attrib.Headers.FileHdr.SizeOfOptionalHeader" readonly>
      <template #prepend>可选头大小</template>
      </el-input>

      <el-input :value="global.attrib.Headers.FileHdr.Characteristics" @mouseenter="()=>{ page_options.card_fileHdrAttrib = true;}" @mouseleave="()=>{ page_options.card_fileHdrAttrib = false; }" readonly>
      <template #prepend>文件属性</template>
      </el-input>
    </div>

    <el-card v-show = "page_options.card_fileHdrAttrib || page_options.card_fileHdrAttrib_lock" @mouseenter="()=>{ page_options.card_fileHdrAttrib = true; }" @mouseleave="()=>{ page_options.card_fileHdrAttrib = false; }">
      <template #header><el-switch v-model="page_options.card_fileHdrAttrib_lock" :active-icon="Lock"></el-switch></template>

      <el-checkbox label="Relocation info stripped from file"></el-checkbox><br>
      <el-checkbox label="File is executable"></el-checkbox><br>
      <el-checkbox label="Line nunbers stripped from file"></el-checkbox><br>
      <el-checkbox label="Local symbols stripped from file"></el-checkbox><br>
      <el-checkbox label="Aggressively trim working set"></el-checkbox><br>
      <el-checkbox label="App can handle >2gb addresses"></el-checkbox><br>
      <el-checkbox label="Bytes of machine word are reversed"></el-checkbox><br>
      <el-checkbox label="32 bit word machine"></el-checkbox><br>
      <el-checkbox label="Debugging info stripped from file in .DBG file"></el-checkbox><br>
      <el-checkbox label="If Image is on removable media, copy and run from the swap file"></el-checkbox><br>
      <el-checkbox label="If Image is on Net, copy and run from the swap file"></el-checkbox><br>
      <el-checkbox label="System File"></el-checkbox><br>
      <el-checkbox label="File is a DLL"></el-checkbox><br>
      <el-checkbox label="File should only be run on a UP machine"></el-checkbox><br>
      <el-checkbox label="Bytes of machine word are reversed"></el-checkbox>

    </el-card>

  </div>
</template>
