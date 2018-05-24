<!--
**************************************
*  名称：页面头部
*  作用：页面头部
*  作者：
**************************************
-->
<template>
    <div>
      <el-menu
        
        class="el-menu-demo"
        mode="horizontal"
        
        background-color="#222"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">海逊ERP</el-menu-item>
        <el-submenu index="2" class="user">
          <template slot="title">{{name}} - {{status}}</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>
<script>
    import Qs from 'qs';  

    export default {
        data() {
            return {
                name:'',
                status:''
            }
        },
        methods:{
            getName(){
                var tk = localStorage.getItem("token");
                var uid = localStorage.getItem("uid");
                if(localStorage.getItem("status") == "boss"){
                  this.status = "老板";
                }else if(localStorage.getItem("status") == "staff"){
                  this.status = "员工";
                }else{
                  this.status = "超级管理员";
                }

                this.$http.post(this.api.user_infor+'('+uid+')',{
                  user_token:tk
                }).then((res)=>{
                  // console.log(res);
                  this.name = res.value.name;
                  localStorage.userinfor_name = res.value.name;
                })
                
            }
        },
        mounted() {
            this.getName();
        }
    }
</script>
<style scoped>
    .user{
        float: right;
    }
</style>