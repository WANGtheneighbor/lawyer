<script setup>
import { ref } from 'vue'

const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <el-aside>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        default-active="1"
        :collapse="isCollapse"
        router
      >
        <el-menu-item index="/search">
          <template #title>搜索文书</template>
        </el-menu-item>
        <el-menu-item index="/graph">
          <template #title>知识图谱</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-menu {
  height: 100%;
}
</style>