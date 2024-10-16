<script setup lang="ts">
import { ref } from 'vue'
import type { UploadUserFile,UploadRequestOptions } from 'element-plus'

const fileList = ref<UploadUserFile[]>([])
let upload_disabled = ref(false);


const upload = (param: UploadRequestOptions) => {
  let file: File = param.file
  let data: Record<string, string | Blob | [string | Blob, string]> = param.data
  console.log(file);
  console.log(data);

  upload_disabled.value = true;
}

</script>

<template>

  <el-upload :drag="true" :show-file-list="false" v-model:file-list="fileList" :auto-upload="true" :limit="1" :http-request="upload" :disabled="upload_disabled"><span class="el-upload__text">点击或拖拽PE文件到此</span></el-upload>
  
</template>

<style scoped>

  ::v-deep(.el-upload){
    height: 120px;
    min-width: 200px;
  }

</style>