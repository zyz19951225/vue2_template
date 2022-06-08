<template>
<div class="modal_dep_container">
  <div class="left_steps">
    <ProcessSteps></ProcessSteps>
  </div>
  <div class="process_area">
    <OperatingSpace></OperatingSpace>
  </div>
</div>
</template>

<script>
import ProcessSteps from "@/components/ProcessSteps";
import OperatingSpace from "@/components/OperatingSpace";
export default {
  name: 'Layout',
  components: {OperatingSpace, ProcessSteps},
  data() {
    return {}
  },


}
</script>

<style scoped>
.modal_dep_container{
  display: flex;
}
</style>
