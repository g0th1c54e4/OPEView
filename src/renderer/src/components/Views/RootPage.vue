<script setup lang="ts">
import gifimage from '../../assets/root.gif';
</script>

<style scoped>
.root-div{
    width: 100%;
    height: 55vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.font-color{
    color: #7f7f7f
}
</style>

<template>
    <div class="root-div">
        <el-image :src="gifimage">
            <template #error>加载失败</template>
        </el-image>
    </div>
    <span style="display: flex; justify-content: center; font-size: 20px;" class="font-color">打开或者拖拽PE文件到此</span>
</template>
