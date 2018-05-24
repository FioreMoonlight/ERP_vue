<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <h1>公司员工</h1>
        <div class="line"></div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司">
              <el-select 
                v-model="value" 
                placeholder="请选择公司" 
                v-on:change="change(value)">
                <el-option
                    v-for ="item in form.company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <tree :companyname="companyname" :setTree="setTree"></tree>
        
        
    </div>
</template>

<script>
    import tree from '../../components/tree';
    import router from "../../router";
    import Qs from 'qs';

    export default {
        components: {
            tree
        },
        data() {
            return {
                form: {
                   company: []
                },
                value: '',
                data:[],
                companyname:'',
                setTree:[]
            }
        },
        methods:{
            change(val){
                this.companyname = val;
                var tk = localStorage.getItem("token");
                this.$http({
                    url:'http://39.106.9.139/apis/v1805/company/list_info',
                    method:'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:Qs.stringify({token:tk,company_name:this.value})
                  }).then(
                    res =>{
                      console.log(res.data.infos);
                      if(res.data.is_success && res.data.infos.ctree != null){
                        this.setTree = res.data.infos.ctree;
                      }
                    }
                  );
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
                      for(var i = 0;i < res.data.asset.split(",").length;i++){
                        this.form.company.push({"value":res.data.asset.split(",")[i],"label":res.data.asset.split(",")[i]});
                      }
                      this.form.company.shift();
                      this.value = res.data.asset.split(",")[1];
                      this.companyname = res.data.asset.split(",")[1];
                      this.$http({
                          url:'http://39.106.9.139/apis/v1805/company/list_info',
                          method:'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                          },
                          data:Qs.stringify({token:tk,company_name:this.value})
                        }).then(
                          res =>{
                            console.log(res.data.infos.ctree);
                            if(res.data.is_success && res.data.infos.ctree != null){
                              this.setTree = res.data.infos.ctree;
                            }
                          }
                        );
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