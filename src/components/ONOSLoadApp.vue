<template>
<div class="container">
  <div class="create_topo_bottom">
    <el-button style="width: 200px" type="primary">启动</el-button>
  </div>
  <div class="compile_log"></div>
</div>
</template>

<script>
export default {
  name: "StartP4"
}
</script>

<style scoped>
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.compile_log {
  flex: 1;
  height: 100%;
  margin: 2vh;
  background-color: rgba(67,67,67,0.8);
}
</style>
