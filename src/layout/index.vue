<template>
  <div class="layout">
    <div class="header">
      <MainHeader></MainHeader>
    </div>
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

import MainHeader from "@/layout/Header";
export default {
  name: 'Layout',
  components: {MainHeader},
  data() {
    return {}
  },


}
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
/* 头部样式 */
.header {

}


/* 主区域 */
.main {
  flex: 1;


}
</style>


