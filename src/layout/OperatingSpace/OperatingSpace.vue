<template>
  <div class="operate_container">
  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
    <el-tab-pane label="选择P4编译器" name="1"></el-tab-pane>
    <el-tab-pane label="创建拓扑" name="2"></el-tab-pane>
    <el-tab-pane label="P4代码编译" name="3"></el-tab-pane>
    <el-tab-pane label="启动P4数据面" name="4"></el-tab-pane>
    <el-tab-pane label="onos代码编译" name="5"></el-tab-pane>
    <el-tab-pane label="onos加载app" name="6"></el-tab-pane>
    <el-tab-pane label="启动应用" name="7"></el-tab-pane>
  </el-tabs>
    <div class="mains">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/layout/Header";
export default {
  name: "OperatingSpace",
  components: {MainHeader},
  data() {
    return {
      activeName: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);

    }
  }
};
</script>

<style scoped>
.operate_container{
  height: 80vh;
  border: #FFFFFF 1px solid;
  margin: 50px;
  background-color: #FFFFFF;
}

.mains{
  height: 70vh;
  margin: 10px;
 border: black 1px solid;

}



</style>
