<template>
  <div class="index">
    <button @click="initDAGItem"></button>
   vue-router-demo

  </div>
</template>

<script>
import {topoLogicalgraph} from "@/api/test"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    initDAGItem() {
      var dagId = {
        dag_id: 1
      }
      topoLogicalgraph(dagId).then(response => {
        if (response.code == 200) {
          console.log("-------")
        }
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
