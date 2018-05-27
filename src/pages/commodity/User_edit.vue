<template>
<div class="content">
  <h1 >个人信息</h1>
  <div class="line"></div>

  <el-form ref="form" :model="infor" label-width="80px" size="mini">
    <el-form-item label="称呼">
      <el-input v-model="infor.name"></el-input>
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model="infor.idcardnum"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="infor.username"></el-input>
    </el-form-item>
    <el-form-item label="QQ">
      <el-input v-model="infor.qq"></el-input>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="infor.email"></el-input>
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="infor.tel"></el-input>
    </el-form-item>
    <!-- <el-form-item label="账号">
      <el-input v-model="infor.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="infor.username"></el-input>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" class="right" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            infor: {
              name:'',
              idcardnum:'',
              username:'',
              qq:'',
              email:'',
              tel:''
            }
          }
        },
        methods: {
          getinfor(){
            var tk = localStorage.getItem("token");
            var uid = localStorage.getItem("uid");
            this.$http.post(this.api.user_infor+'('+uid+')',{
              user_token:tk
            }).then((res)=>{
              // console.log(res);
              this.infor.name = res.value.name;
              this.infor.idcardnum = res.value.idcardnum;
              this.infor.username = res.value.username;
              this.infor.qq = res.value.qq;
              this.infor.email = res.value.email;
              this.infor.tel = res.value.tel;
            }) 
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