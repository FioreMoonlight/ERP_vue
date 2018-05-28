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
    <h1 class="left">公司信息</h1>
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
              cid:''
            }
          }
        },
        methods: {
          getInfor(){
            var uid = localStorage.getItem("uid");
            var tk = localStorage.getItem("tk");
            this.$http.post(this.api.user_company_list,{
              user_token:tk,
              user_query:"user_id=='"+uid+"'"
            }).then((res)=>{
              this.form.cid = res.values[0].id;
              if(res.values.length > 0){
                this.form.cname = res.values[0].name;
                this.form.cregmoney = res.values[0].regmoney;
                this.form.creg_address = res.values[0].reg_address;
                this.form.clegalp = res.values[0].legalp;
                this.form.crange = res.values[0].range;
                this.form.cwork_address = res.values[0].work_address;
                this.form.ctel = res.values[0].tel;
              }else{
                console.log("该用户没有注册公司");
                return
              } 
            })
          },
          onSubmit() {
            var uid = localStorage.getItem("uid");
            var tk = localStorage.getItem("tk");
            this.$http.post(this.api.user_company_inforSet+"("+this.form.cid+")",{
              user_token:tk,
              name:this.form.cname,
              regmoney:this.form.cregmoney,
              reg_address:this.form.creg_address,
              legalp:this.form.clegalp,
              range:this.form.crange,
              work_address:this.form.cwork_address, 
              tel:this.form.ctel 
            }).then((res)=>{
            });
            this.$http.post(this.api.company_set_infor+"("+this.form.cid+")",{
              user_token:tk,
              name:this.form.cname,
              regmoney:this.form.cregmoney,
              reg_address:this.form.creg_address,
              legalp:this.form.clegalp,
              range:this.form.crange,
              work_address:this.form.cwork_address, 
              tel:this.form.ctel 
            }).then((res)=>{
            })
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.form.dialogVisible = true;
          }
        },
        mounted(){
          this.getInfor();
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