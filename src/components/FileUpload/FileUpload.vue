<template>
  <div class="file_upload">
    <el-upload
        ref="upload"
        :auto-upload="false"
        :file-list="fileList"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        action="https://jsonplaceholder.typicode.com/posts/"
        class="upload-demo">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button size="small" style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
.upload-demo {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
