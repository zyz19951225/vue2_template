<template>
  <div class="home_page_container">
    <div class="home_page_title">
        多模态网络自动化部署工具
    </div>
    <div class="menu_list">
      <div class="menu_item xx">
        <img src="../assets/deploymentMechanism.png" height="70%" />
        <div class="menu_item_title">模态部署</div>
      </div>
      <div class="menu_item yy">
        <img src="../assets/modalDeployment.png" height="70%" />
        <div class="menu_item_title">模态机制</div>
      </div>
      <div class="menu_item zz">
        <img src="../assets/handbook.png" height="70%" />
        <div class="menu_item_title">部署手册</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.home_page_container{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.home_page_title{
  color: #FFFFFF;
  font-size: 4vh;
  margin-top: 5vh;
  margin-left: 3vw;
}

.menu_list{
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  background: url("../assets/homepagebg.png") no-repeat  center fixed;
}

.menu_item{
  width: 70%;
  height: 70%;
  margin: auto;
  box-sizing: border-box;
  border: black 1px solid;
  background-color: #bacaba;
  text-align: center;
  position: relative;
}

.xx{
  padding: 5vh;
  background-color: rgba(32, 102, 242, 1);
}
.yy{
  padding: 5vh;
  background-color: rgba(253, 192, 49, 1);
}
.zz{
  padding: 5vh;
  background-color: rgba(37, 196, 192, 1);
}

.menu_item_title{
  position: absolute;
  left: 20px;
  bottom: 30px;
  color: #FFFFFF;
  font-size: x-large;
  font-weight: bold;

}

</style>
