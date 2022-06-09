<template>
  <div class="file_upload_container">
    <div class="upload_module">
      <FileUpload></FileUpload>
      <div class="create_topo_bottom">
        <el-button style="width: 200px" type="primary">开始编译</el-button>
      </div>
    </div>
    <div class="compile_log"></div>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload/FileUpload";
export default {
  name: "CompileONOS",
  components: {FileUpload},
  data() {
    return {
    };
  },
  methods: {

  }
}
</script>

<style scoped>
.file_upload_container {
  height: 100%;
  display: flex;
  flex-direction: column;

}

.create_topo_bottom {

}

.upload_module {
  display: flex;
  justify-content: space-around;
}

.compile_log {
  flex: 1;
  height: 100%;
  margin: 2vh;
  background-color: rgba(67,67,67,0.8);
}

</style>
