<script setup lang="ts">
</script>

<template>
    <el-menu :router="true">
        <el-sub-menu index="/StaticInfo">
            <template #title>
                <span>程序静态信息</span>
            </template>
            <el-menu-item index="/StaticInfo/Overview">概述</el-menu-item>
            <el-menu-item index="/StaticInfo/Header">PE头信息</el-menu-item>
            <el-menu-item index="/StaticInfo/DataDirectory">数据目录表</el-menu-item>
            <el-menu-item index="/StaticInfo/Section">区块/节</el-menu-item>
            <el-menu-item index="/StaticInfo/Import">导入表</el-menu-item>
            <el-menu-item index="/StaticInfo/Export">导出表</el-menu-item>
            <el-menu-item index="/StaticInfo/Resource">资源表</el-menu-item>
            <el-menu-item index="/StaticInfo/Reloc">重定位表</el-menu-item>
            <el-menu-item index="/StaticInfo/Exception">异常表</el-menu-item>
            <el-menu-item index="/StaticInfo/Security">安全表</el-menu-item>
            <el-menu-item index="/StaticInfo/NETMeta">.NET 元数据</el-menu-item>
            <el-menu-item index="/StaticInfo/Debug">调试表</el-menu-item>
            <el-menu-item index="/StaticInfo/TLS">TLS表</el-menu-item>
            <el-menu-item index="/StaticInfo/LoadConfig">加载配置表</el-menu-item>

            

      </el-sub-menu>

      <el-sub-menu index="/Analysis">
            <template #title>
                <span>解析</span>
            </template>
            <el-menu-item index="/Analysis/Functions">函数库</el-menu-item>

      </el-sub-menu>

    </el-menu>
</template>

<style scoped>
*{
  user-select: none;
}
.el-menu{
    --el-menu-bg-color: #ffffff;
    --el-menu-text-color: #303133;
    --el-menu-active-color: #409eff;
}
</style>