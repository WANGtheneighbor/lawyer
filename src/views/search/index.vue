<script setup>
import { ref, watchEffect } from 'vue';
import { search } from '../../axios/search';

const input = ref('')
const list = ref([])
const show = ref(false)
const cur = ref()

watchEffect(async () => {
  list.value = (await search({"query": {"match": {"content": input.value}}})).hits.hits
})

const showDialog = (target) => {
  show.value = true
  cur.value = target
}
</script>

<template>
  <el-container>
    <el-header>
      <el-input size="large" clearable placeholder="Type something" v-model.lazy="input">
        <template #prepend>
          <span style="width: 20px; text-align: center;">
            {{ list.length }}
          </span>
        </template>
        <template #append>
          <el-button size="large">
            搜索
          </el-button>
        </template>
      </el-input>
    </el-header>
    <el-main>
      <el-empty v-if="list.length === 0" />
      <div v-else>
        <el-card
          v-for="item in list"
          @click="showDialog(item)"
        >
          {{ item._source.title }}
        </el-card>
      </div>
    </el-main>
    <el-dialog
      v-model="show"
      align-center
    >
      <template #header>
        <h1>{{ cur?._source.title }}</h1>
        <h5>{{ cur?._source.court }}</h5>
        <h5>{{ cur?._source.number }}</h5>
      </template>
      {{ cur?._source.content }}
    </el-dialog>
  </el-container>
</template>

<style scoped>
.el-header {
  align-items: center;
  box-shadow: 0 10px 5px -10px gray;
}

.el-input {
  width: 60%;
  height: 50px;
  margin: 0 auto;
}

.el-card {
  cursor: pointer;
}

.el-card+.el-card {
  margin-top: 10px;
}

h5 {
  color: gray;
}

:deep(.el-dialog) {
  display: flex;
  flex-direction: column;
  height: 90%;
}

:deep(.el-dialog__body) {
  white-space: pre-line;
  overflow: scroll;
}
</style>