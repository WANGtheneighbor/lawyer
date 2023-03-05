<script setup>
import { ref, onMounted } from 'vue';
import { load } from '../../axios/data'
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

onMounted(() => {
  const myChart = echarts.init(container.value)

  ;(async () => {
    const graph = await load('data/les-miserables.json')
    const option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right'
      },
      tooltip: {},
      legend: [
        {
          // selectedMode: 'single',
          data: graph.categories.map(function (a) {
            return a.name;
          })
        }
      ],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
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
    graph.nodes.forEach(node => {
      node.label = {
        show: node.symbolSize > 30
      };
    });
    option && myChart.setOption(option)
  })()
})
</script>

<template>
  <div id="echarts" ref="container"></div>
</template>

<style scoped>
#echarts {
  width: 100%;
  height: 100%;
}
</style>