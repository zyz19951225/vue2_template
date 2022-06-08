<template>
  <div class="layout">
    <div class="header">
      <MainHeader></MainHeader>
    </div>
    <div class="main_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import MainHeader from "@/layout/Header";
import ProcessSteps from "@/components/ProcessSteps";
import OperatingSpace from "@/components/OperatingSpace";
export default {
  name: 'Layout',
  components: {OperatingSpace, ProcessSteps, MainHeader},
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
.main_container {
  flex: 1;
}

.left_steps{
  width: 35vh;
}

.process_area{
  flex: 1;
}
</style>


