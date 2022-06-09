<template>
  <div class="operate_container">
  <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
    <el-tab-pane label="选择P4编译器" name="chooseP4Compiler"></el-tab-pane>
    <el-tab-pane label="创建拓扑" name="createTopo"></el-tab-pane>
    <el-tab-pane label="P4代码编译" name="compiledP4"></el-tab-pane>
    <el-tab-pane label="启动P4数据面" name="startP4"></el-tab-pane>
    <el-tab-pane label="onos代码编译" name="compiledONOS"></el-tab-pane>
    <el-tab-pane label="onos加载app" name="ONOSLoadApp"></el-tab-pane>
    <el-tab-pane label="启动应用" name="StartTheApplication"></el-tab-pane>
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
      activeName: '',
    };
  },
  mounted() {
    console.log(console.log(this.$route.path))
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({ name: tab.name })
      this.activeName = tab.name
    }
  }
};
</script>

<style scoped>
.operate_container{
  box-sizing: border-box;
  height: 80vh;
  border: rgba(245, 245, 245, 1) 20px solid;
  margin: 50px;
  background-color: #FFFFFF;
}

.mains{
  height: 70vh;
  margin: 10px;


}



</style>
