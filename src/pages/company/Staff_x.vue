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
        <tree :companyname="companyname" :setTree="setTree" :cid="cid" :ifnsary="ifnsary"></tree>
        
        
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
                setTree:[],
                cid:'',
                ifnsary:["1"]
            }
        },
        methods:{
            change(val){
                
                this.companyname = val;
                var tk = localStorage.getItem("token");
                var uid = localStorage.getItem("uid");
                var uname = localStorage.getItem("userinfor_name");
                //加载用户公司信息
                this.$http.post(this.api.user_company_list,{
                  user_token:tk,
                  user_query:"user_id=='"+uid+"'"
                }).then((res)=>{
                  // console.log(res);
                  for(var i = 0;i < res.values.length; i++){
                    if(res.values[i].name == this.companyname){
                      //如果用户公司列表名字跟这个值对应
                      this.cid = res.values[i].company_id;//修改对应公司id
                      //获取已经绑定的员工数组
                      this.$http.post(this.api.link_list_user_to_company_staff,{
                        user_token:tk,
                        user_query:"company_id=='"+this.cid+"'"
                      }).then((res)=>{
                        console.log(res);
                         if(res.values.length > 0){
                            this.ifnsary = ["1"];
                            for(var i = 0 ;i < res.values.length;i++){
                              this.ifnsary.push(res.values[i].staff_id);
                            }
                         }else{
                            this.ifnsary = ["1"];
                         }
                          
                      })
                      //调取对应公司信息
                      this.$http.post(this.api.company_infor+'('+this.cid+')',{
                      }).then((res)=>{
                        // console.log(res);
                        if(res.value.ctree != null){
                          //如果有公司树信息 把树存起来
                            this.setTree = JSON.parse(res.value.ctree);
                          }else{
                            this.$http.post('http://39.106.9.139/apis/restful/add/company_'+this.cid+'/staff',{
                              staff_name:"uname",
                              staff_info:"boss"
                            }).then((res)=>{

                              this.setTree = [{
                                id: res.value.id,
                                name: uname,
                                pid: '',
                                isEdit: false,
                                children: []
                              }];
                            
                            })
                            
                          }
                      })
                    }
                  }
                })    
            },
            getcompanylist(){
                var tk = localStorage.getItem("token");
                var uid = localStorage.getItem("uid");
                var uname = localStorage.getItem("userinfor_name");
 
                //加载用户公司信息
                this.$http.post(this.api.user_company_list,{
                  user_token:tk,
                  user_query:"user_id=='"+uid+"'"
                }).then((res)=>{
                  console.log(res);
                  //判断用户是否有公司
                  if(res.values.length > 0){
                    for(var i = 0;i < res.values.length;i++){
                      this.form.company.push({
                        "value":res.values[i].name,
                        "label":res.values[i].name
                      });
                    }
                    this.value = res.values[0].name;//下拉框显示公司名字
                    this.companyname = res.values[0].name;//把当前公司名
                    this.cid = res.values[0].company_id;//把当前公司id

                    //获取已经绑定的员工数组
                    this.$http.post(this.api.link_list_user_to_company_staff,{
                      user_token:tk,
                      user_query:"company_id=='"+this.cid+"'"
                    }).then((res)=>{
                        for(var i = 0 ;i < res.values.length;i++){
                          this.ifnsary.push(res.values[i].staff_id);
                        }
                        // console.log(this.ifnsary);
                    })

                    //获取第一个公司的信息
                    this.$http.post(this.api.company_infor+'('+this.cid+')',{
                    }).then((res)=>{
                      // console.log(res);
                      if(res.value.ctree != null){
                        //如果有公司树信息 把树存起来
                          this.setTree = JSON.parse(res.value.ctree);
                        }else{
                          this.$http.post('http://39.106.9.139/apis/restful/add/company_'+this.cid+'/staff',{
                            staff_name:uname,
                            staff_info:"boss"
                          }).then((res)=>{
                            // console.log(res);
                            this.setTree = [{
                              id: res.value.id,
                              name: uname,
                              pid: '',
                              isEdit: false,
                              children: []
                            }];
                          })      
                        }
                      
                    })
                    
                  }
                })
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