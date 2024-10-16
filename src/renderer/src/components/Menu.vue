<script setup lang="ts">

</script>

<template>
    <el-col>
        <el-menu router="true" unique-opened>
            <el-sub-menu>
                <template #title>
                    <span>程序静态信息</span>
                </template>
                <el-menu-item index="/StaticInfo/Header">头信息</el-menu-item>
                <el-menu-item index="/StaticInfo/Section">区块/节</el-menu-item>
                <el-menu-item index="/StaticInfo/Import">导入表</el-menu-item>
                <el-menu-item index="/StaticInfo/Export">导出表</el-menu-item>
                <el-menu-item index="/StaticInfo/Resource">资源表</el-menu-item>
                <el-menu-item index="/StaticInfo/Reloc">重定位表</el-menu-item>
                <el-menu-item index="/StaticInfo/Exception">异常表</el-menu-item>
          </el-sub-menu>
        </el-menu>
    </el-col>
</template>
