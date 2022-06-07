<template>
  <div class="steps_container">
    <div class="steps_menu">
      <div class="step_title">
        <i class="el-icon-s-operation"></i>数据面
      </div>
      <ul class="steps_item">
        <li>选择P4编译器</li>
        <li>创建拓扑</li>
        <li>P4代码编译</li>
        <li>启动P4数据面</li>
      </ul>
      <div class="step_title">
        <i class="el-icon-setting"></i>控制面
      </div>
      <ul class="steps_item">
        <li>onos代码编译</li>
        <li>onos加载app</li>
      </ul>
      <div class="step_title">
        <i class="el-icon-loading"></i>启动
      </div>
      <ul class="steps_item">
        <li>启动应用</li>
      </ul>
      <div class="step_title">
        <i class="el-icon-switch-button"></i>部署结束
      </div>
    </div>
    <div class="steps_line">
      <el-steps direction="vertical" :active="1" finish-status="success" :space="180">
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
        <el-step ></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessSteps",
  data() {
    return {
    };
  },
  methods: {

  }
};
</script>

<style scoped>
.steps_container{
  display: flex;

}

.steps_menu{
  margin-top: 8vh;
  color: white;
  padding-left: 5vh;
}

.step_title{
  font-weight: bold;
  font-size: 25px;
  text-align: left;
}

.steps_item{
  margin-left: 5vw;

}
.steps_line{
  margin-left: auto;
  /*height: 60vh;*/
  margin-top: 8vh;
  color: white;
  padding-left: 5vh;
}
ul {
  list-style:none;  margin:0px;
}

li {
  text-align: left;
  padding: 2vh 0;
}

</style>
