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
    <h1 class="left">添加公司</h1>
    <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div>

  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="110px">
    <el-form-item label="公司名">
      <el-input v-model="form.cname"></el-input>
    </el-form-item>
    <el-form-item label="注册资金/万(¥)">
      <el-input v-model="form.cregmoney"></el-input>
    </el-form-item>
    <el-form-item label="注册地点">
      <el-input v-model="form.creg_address"></el-input>
    </el-form-item>
    <el-form-item label="法人名称">
      <el-input v-model="form.clegalp"></el-input>
    </el-form-item>
    <el-form-item label="经营范围">
      <el-input v-model="form.crange"></el-input>
    </el-form-item>
    
    <el-form-item label="办公地址">
      <el-input v-model="form.cwork_address"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="form.ctel"></el-input>
    </el-form-item>
    <el-form-item label="营业执照照片">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="form.dialogVisible">
        <img width="100%" :src="form.dialogImageUrl" alt="">
      </el-dialog>
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
              cname: '',
              cregmoney:'',
              creg_address:'',
              clegalp:'',
              crange:'',
              cwork_address:'',
              ctel:'',
              dialogImageUrl: '',
              dialogVisible: false
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.form.dialogVisible = true;
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