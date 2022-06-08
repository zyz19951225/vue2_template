<template>
  <div class="header_container">
    <div class="header_title_container">
      <img src="../../assets/logo.png" class="logo">
      <span class="header_title">多模态网络部署平台</span>
    </div>
    <div class="header_menu">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               background-color="transparent"
               text-color="white"
               active-text-color="rgba(44, 197, 255, 1)"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="1"><span class="menu_title">首页</span></el-menu-item>
        <el-menu-item index="2"><span class="menu_title">模态部署</span></el-menu-item>
        <el-menu-item index="3"><span class="menu_title">部署机制</span></el-menu-item>
      </el-menu>
    </div>

    <div class="help_bottom">
      部署手册
      <i class="el-icon-question"></i>
    </div>
  </div>
</template>


<script>

export default {
  name:'MainHeader',
  data() {
    return {
      activeIndex: '2',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>



<style scoped="scoped">
.header_container{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;

}
.header_title_container{
  display: flex;
  align-items: center;
}

.logo {
  width: 34px;
  margin-right: 10px;
}

.header_title{
  font-size: 30px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #FFFFFF;
}

.header_menu{

  margin-left: auto
}

.menu_title{
  font-size: 20px;
  font-weight: bold;
}

.help_bottom{
  margin-right: 50px;
  margin-left: 50px;
  color:rgba(44, 197, 255, 1);
}

li{
  padding: 0px 50px;
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 0px;
}
</style>
