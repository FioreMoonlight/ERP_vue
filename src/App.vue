<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
}
.search-result-text{
  font-size: 14px;
  color: #606266;    
  padding:5px 0px;
  float:left;
  margin-right: 20px;
  /*margin-top: 5px;*/
}
.search-result-text span{
    color:#F56C6C;
}
.line{
  margin: 10px 0;
  border-top: 1px solid #dcdfe6;
}
.title{
  overflow: hidden;
}
.left{
  float: left;
}
.right{
  float: right;
}
.oh{
  overflow: hidden;
}
.mt20{
  margin-bottom: 20px;
}
.mt10{
  margin-bottom: 10px;
}
.mr10{
  margin-right: 10px;
}
.ml10{
  margin-left: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
