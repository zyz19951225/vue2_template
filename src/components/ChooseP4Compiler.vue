<template>
<div class="compiler_container">
  <div class="choose_compiler">
    <span class="compiler_container_title">选择P4编译器</span>
    <el-radio v-model="radio" label="1">PPK</el-radio>
    <el-radio v-model="radio" label="2">BMV2</el-radio>
  </div>
  <div class="choose_compiler_bottom">
    <el-button type="primary" style="width: 200px">提交，创建拓扑</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "chooseP4Compiler",
  data () {
    return {
      radio: '1'
    };
  }
}
</script>

<style scoped>

.compiler_container{
  position: relative;
}

.choose_compiler{
  position: absolute;
  top: 20vh;
  left:50%;
  transform: translateX(-50%)
}
.compiler_container_title{
  margin-right: 5vw;
}

.choose_compiler_bottom{
  position: absolute;
  top: 30vh;
  left:50%;
  transform: translateX(-50%)

}
</style>
