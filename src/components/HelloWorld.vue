<script setup>
import { ref } from 'vue'
import sayHello from '../../src/api/hello'
const count = ref(0)
const message = ref("依利音乐盒后台") 

function hi(){
  sayHello().then(res=>{
    console.log(res.data)
    message.value = res.data
  })

}

</script>

<template>
  <h1>{{ message }}</h1>
  <div class="button-container">
    <q-btn color='primary' @click="count++">点击数量{{count}}</q-btn>
    <q-btn color="primary" @click="hi">请求接口</q-btn>
  </div>
  

 
</template>

<style scoped>
a {
  color: #42b983;
}
.button-container{

  width: 50%;
  display: flex;
  flex-direction: row;
}
</style>
