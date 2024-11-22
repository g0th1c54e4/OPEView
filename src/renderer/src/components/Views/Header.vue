<script setup lang="ts">

import { ref } from 'vue';
import { useGlobalStore } from '../../store'
const global = useGlobalStore()

let card_dos = ref<boolean>(false);


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




        <div @mouseenter="()=>{ card_dos = true;}" @mouseleave="()=>{ card_dos = false; }" class="box">
            <el-input :value="global.attrib.Headers.DosHdr.HeaderSize" readonly>
            <template #prepend>头尺寸</template>
            </el-input>

            <el-input :value="global.attrib.Headers.DosHdr.StubSize" readonly>
            <template #prepend>Stub尺寸</template>
            </el-input>
        </div>
        <el-card v-show = "card_dos" @mouseenter="()=>{ card_dos = true; }" @mouseleave="()=>{ card_dos = false; }">
            <template #header><span style="font-style:italic;">IMAGE_DOS_HEADER</span></template>
              <el-input :value="global.attrib.Headers.DosHdr.e_magic" readonly>
              <template #prepend>e_magic</template>
              <template #suffix>
                <el-tooltip placement="bottom">
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



    </div>
</template>
