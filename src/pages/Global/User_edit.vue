<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <div class="title">
    <h1 class="left">编辑用户</h1>
    <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div>
  
  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="账号">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="权限">
      <el-select v-model="form.right" placeholder="请选择权限">
        <el-option label="超级管理员" value="1"></el-option>
        <el-option label="vip1" value="2"></el-option>
        <el-option label="vip2" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="订单数">
      <el-input v-model="form.order"></el-input>
    </el-form-item>
    <el-form-item label="余额">
      <el-input v-model="form.money"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            form: {
              name: '老刘',
              username:'admin1',
              right:'超级管理员',
              order:'20',
              money:1000.00
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          }
        }
      }
</script>
<style scoped>
    .line{
      margin: 20px 0;
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
</style>