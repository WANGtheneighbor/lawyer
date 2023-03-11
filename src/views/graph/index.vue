<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { getGraph, getDomainGraph } from '../../axios/api';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphChart,
  CanvasRenderer
]);

const container = ref()
const list = ref([])
const value = ref('')

;(async () => {
  list.value = (await getGraph()).data.nodeList
})()

onMounted(() => {
  const myChart = echarts.init(container.value)

  watchEffect(async () => {
    const data = await getDomainGraph({"domain":value.value,"nodeName":"","pageSize":500})
    const graph = JSON.parse(
        JSON.stringify(data.data)
          .replace(/node/g, 'nodes')
          .replace(/relationship/g, 'links')
          .replace(/uuid/g, 'id')
          .replace(/sourceId/g, 'source')
          .replace(/targetId/g, 'target')
      )

    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: value.value,
          type: 'graph',
          layout: 'force',
          data: graph.nodes,
          links: graph.links,
          roam: true,
          symbolSize: 30,
          edgeSymbol: [, 'arrow'],
          lineStyle: {
            width: 4
          },
          label: {
            show: 'true',
            position: 'right',
          },
          edgeLabel: {
            show: true,
            formatter: (params) => {
              return params.data.name
            }
          },
          force: {
            repulsion: 200,
            edgeLength: [100, 200]
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };

    option && myChart.setOption(option)
  })
})
</script>

<template>
  <div id="echarts" ref="container"></div>
  <el-select v-model="value">
    <el-option
      v-for="item in list"
      :label="item.name"
      :value="item.name"
    />
  </el-select>
</template>

<style scoped>
#echarts {
  width: 100%;
  height: 100%;
}

.el-select {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 15rem;
  box-shadow: var(--el-box-shadow);
}
</style>