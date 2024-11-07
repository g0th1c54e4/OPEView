<script setup lang="ts">
import { useGlobalStore } from '../../store'

const global = useGlobalStore()

</script>

<template>
    <el-table :data="global.attrib.Functions">
        <el-table-column prop="Addr" label="地址" width="300"></el-table-column>
        <el-table-column prop="Name" label="名称(包含符号修饰)"></el-table-column>
    </el-table>
</template>


