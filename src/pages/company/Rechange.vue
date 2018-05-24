<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
      <h1>充值</h1>
      <div class="line"></div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>请存入公司银行卡</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <el-row :gutter="20">
            <el-col :span="3"><div class="left">卡号：</div></el-col>
            <el-col :span="21"><div class="">2133 5646 4656</div></el-col>
            <el-col :span="3"><div class="left">名称：</div></el-col>
            <el-col :span="21"><div class="">xx</div></el-col>
            <el-col :span="3"><div class="left">开户行：</div></el-col>
            <el-col :span="21"><div class="">xxxxxxxxxx</div></el-col>
          </el-row>
        </el-card>
        <div class="bottom">
            
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="公司">
                <el-select v-model="value" placeholder="请选择公司">
                  <el-option
                      v-for ="item in form.company"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="充值金额">
                <el-input v-model="form.money"></el-input>
              </el-form-item>
              <el-form-item label="证明图片">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  
                  >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">充值</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import router from "../../router";
    import Qs from 'qs';

    export default {
        data() {
            return {
                form: {
                  money:'',
                  company: []
                },
                value:'',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods:{
          onSubmit(){
            console.log("充值")
          } ,
            change(){
                console.log("公司选择")
            },
            getcompanylist(){
                var tk = localStorage.getItem("token");
                this.$http({
                    url:'http://39.106.9.139/apis/v1805/user/list_asset_company',
                    method:'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:Qs.stringify({token:tk})
                  }).then(
                    res =>{
                      // console.log(res.data.asset);
                      // this.form.company = res.data.asset;
                      // console.log(this.form.company)
                      // console.log(this.form.company.length)
                      // console.log(this.form.company.split(","))
                      for(var i = 0;i < res.data.asset.split(",").length;i++){
                        this.form.company.push({"value": i,"label":res.data.asset.split(",")[i]});
                      }
                      this.form.company.shift();
                      this.value = 1;
                      console.log(this.form.company)

                    }
                  );
            }
        },
        mounted(){
          this.getcompanylist();
        }
    }
</script>
<style scoped>
  .line{
     margin: 20px 0;
     border-top: 1px solid #dcdfe6;
   }
   .el-col {
     /*border-radius: 4px;*/
     margin-bottom: 20px;
     line-height: 36px;
   }
    .left{
        text-align: right;
    }
    .bottom{
        padding-top: 40px;
    }
</style>