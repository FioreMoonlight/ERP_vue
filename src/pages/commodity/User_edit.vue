<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1 >修改信息</h1>
  <div class="line"></div>

  <el-form ref="form" :model="infor" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="infor.name"></el-input>
    </el-form-item>
    <!-- <el-form-item label="账号">
      <el-input v-model="infor.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="infor.username"></el-input>
    </el-form-item> -->
    <el-form-item label="电话">
      <el-input v-model="infor.tel"></el-input>
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model="infor.num"></el-input>
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
            infor: {}
          }
        },
        methods: {
          getinfor(){
            var ss = localStorage.getItem("token")
            this.$http.get("http://39.106.9.139/apis/v1805/user/list_info?token="+ss).
                then(
                    res =>{
                        // console.log(res.data);
                        this.infor = res.data.infos;
                    }
                )
          },
          onSubmit() {
            var ss = localStorage.getItem("token")
            this.$http.get("http://39.106.9.139/apis/v1805/user/set_info?token="+ss+"&key=name&value="+this.infor.name).then(
                res =>{
                  // console.log(res);
                  // router.push({
                  //   path:'/main/G_user_list'
                  // })
                }
              );
            this.$http.get("http://39.106.9.139/apis/v1805/user/set_info?token="+ss+"&key=tel&value="+this.infor.tel).then(
                res =>{
                  // console.log(res);
                  // router.push({
                  //   path:'/main/G_user_list'
                  // })
                }
              );
            this.$http.get("http://39.106.9.139/apis/v1805/user/set_info?token="+ss+"&key=num&value="+this.infor.num).then(
                res =>{
                  // console.log(res);
                  router.push({
                    path:'/main/G_user_list'
                  })
                }
              );
          }
        },
        mounted(){
          this.getinfor();
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