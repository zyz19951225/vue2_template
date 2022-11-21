<template>
  <div class="topo-container">
    <div class="title">编译系统测试拓扑网络</div>
    <div id="topological" class="topological"></div>
  </div>

</template>

<script>
import {initDefaultGraph} from "../config/g6_graph_config";
import data from '../datas/data.json'

export default {
  name: "Topological",
  data() {
    return {
      graph: null
    }
  },
  mounted() {
    this.initGraph()
  },
  methods: {
    initGraph() {
      let topo = document.getElementById('topological');
      let width = topo.clientWidth;
      let height = topo.clientHeight;
      this.graph = initDefaultGraph(width, height, 'topological')
      data.data.nodes.forEach(item => {
        if (item.sort.indexOf('programmable-network-element-type')!=-1) {
          item.icon = {
            img: require('@/assets/img_3.png'),
          }
          item.labelCfg = {
              position: 'left',
          }
        }
        else if (item.sort === 'PC') {
          item.icon = {
            img: require('@/assets/pc.png'),
          }
          item.labelCfg = {
            position: 'bottom',
          }
        }else if(item.sort === 'FPGA-server'){
          item.icon = {
            img: require('@/assets/fpga.png'),
            // text: '...', 使用 iconfont
          }
          item.labelCfg = {
            position: 'right',
          }
        }
      })
      this.graph.read(data.data)

      this.graph.render()
    }
  }
}
</script>

<style scoped>


.topo-container{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.topological{
  flex: 1;
}

.title{
  font-size: 36px;
  font-weight: bold;
  padding-top: 20px;
}
</style>
