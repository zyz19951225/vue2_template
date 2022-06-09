<template>
  <div class="file_upload_container">
    <div class="upload_module">
      <FileUpload></FileUpload>
      <div class="create_topo_bottom">
        <el-button style="width: 200px" type="primary">创建拓扑</el-button>
      </div>
    </div>
    <div class="topo_graph"></div>
  </div>
</template>

<script>
import FileUpload from "@/components/FileUpload/FileUpload";
export default {
  name: "CreateTopo",
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

.topo_graph {
  flex: 1;
  height: 100%;
  border: black 1px solid;
  margin: 2vh;
}

</style>
