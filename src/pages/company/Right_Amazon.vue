<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
    <h1>亚马逊授权</h1>
    <div class="line"></div>
    
  
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
    </el-form>
   </div>
</template>

<script>
    import router from "../../router";
    import Qs from 'qs';
    
    export default {
        data() {
            return {
                form: {
                   company: []
                },
                value: ''
            }
        },
        methods:{
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
</style>