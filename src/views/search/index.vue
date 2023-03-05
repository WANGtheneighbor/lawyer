<script setup>
import { ref } from 'vue';

const input = ref('')
</script>

<template>
  <el-container>
    <el-header>
      <el-input size="large" clearable placeholder="Type something" v-model.lazy="input">
        <template #append>
          <el-button size="large">
            搜索
          </el-button>
        </template>
      </el-input>
    </el-header>
    <el-main>
      <el-empty />
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  align-items: center;
}

.el-input {
  width: 60%;
  height: 50px;
  margin: 0 auto;
}
</style>