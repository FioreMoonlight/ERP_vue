<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <!-- <div class="title"> -->
    <h1>消息提醒</h1>
    <!-- <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div> -->

  <div class="line"></div>
  <template>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="订单提醒" name="first">
        <el-table
            :data="tableData1"
            border
            style="width: 100%"
            :default-sort = "{prop: 'infor', order: 'descending'}"
            >
            <el-table-column
              prop="infor"
              label="信息"
              sortable
              >
            </el-table-column>

            
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="success" @click="success"  size="small">确定</el-button>
                <el-button type="danger" @click="cancle" size="small">取消</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="买家消息提醒" name="second">
        <el-table
            :data="tableData2"
            border
            style="width: 100%"
            :default-sort = "{prop: 'infor', order: 'descending'}"
            >
            <el-table-column
              prop="infor"
              label="信息"
              sortable
              >
            </el-table-column>
            
            
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="success" @click="success"  size="small">确定</el-button>
                <el-button type="danger" @click="cancle"  size="small">取消</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="声音提醒" name="three">
        <el-table
            :data="tableData3"
            border
            style="width: 100%"
            :default-sort = "{prop: 'infor', order: 'descending'}"
            >
            <el-table-column
              prop="infor"
              label="信息"
              sortable
              >
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="success" @click="success"  size="small">确定</el-button>
                <el-button type="danger" @click="cancle"  size="small">取消</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="短信提醒" name="four">
        <el-table
            :data="tableData4"
            border
            style="width: 100%"
            :default-sort = "{prop: 'infor', order: 'descending'}"
            >
            <el-table-column
              prop="infor"
              label="信息"
              sortable
              >
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="success" @click="success"  size="small">确定</el-button>
                <el-button type="danger" @click="cancle"  size="small">取消</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="用户提醒" name="five" >
        <el-table
            :data="tableData5"
            border
            style="width: 100%"
            :default-sort = "{prop: 'right', order: 'descending'}"
            >
            <el-table-column
              prop="infor"
              label="信息"
              sortable
              >
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="150">
              <template slot-scope="scope">
                <el-button type="success" @click="success(scope.row,scope.$index)"  size="small">确定</el-button>
                <el-button type="danger" @click="cancle"  size="small">取消</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </template>
</div>
</template>

<script>
    import router from "../router";
    import Qs from 'qs';

    export default {
        data() {
          return {
            activeName: 'five',
            tableData1: [{
              infor: '订单提醒1',
              flag:true
            },{
              infor: '订单提醒2',
              flag:true
            }],
            tableData2: [{
              infor: '买家消息提醒',
              flag:true
            }],
            tableData3: [{
              infor: '声音提醒1',
              flag:true
            }],
            tableData4: [{
              infor: '短信提醒1',
              flag:true
            }],
            tableData5: [],
            company_list:[]
          }
        },
        methods: {
          success(row,index){
            // console.log(row);
            var uid = localStorage.getItem("uid");

            //存入关联库
            this.$http.post(this.api.link_add_user_to_company_staff,{
              user_id:uid,
              company_id:row.company_id,
              staff_id:row.staff_id
            }).then((res)=>{
              //删除信息
              this.$http.post(this.api.message_del_company_staff_link+'('+row.infor_id+')',{
              }).then((res)=>{
                // localStorage.staffc = "ok";
                this.$message({
                  message: '公司关联成功,请重新登陆',
                  type: 'success'
                });

                this.tableData5.splice(index,1);
                router.push({
                  path:'/'
                })
              })

            })

          },
          cancle(){
            console.log("取消");
          },
          getInfor(){
            var uid = localStorage.getItem("uid");
            var tk = localStorage.getItem("token");

            this.$http.post(this.api.company_list,{
              user_token:tk
            }).then((res)=>{

              this.company_list = res.values;
              this.$http.post(this.api.message_list_company_staff_link,{
                user_id:this.uid
              }).then((res)=>{
                for(var i = 0;i < res.values.length;i++){
                  if(res.values[i].status == "wait"){
                    for(var j = 0;j < this.company_list.length; j++){
                      if(this.company_list[j].id == res.values[i].company_id){
                        this.tableData5.push(
                          {
                            infor: '是否与 '+this.company_list[j].name+' 公司进行关联?',
                            company_id: res.values[i].company_id,
                            staff_id: res.values[i].staff_id,
                            infor_id: res.values[i].id
                          }
                        )
                      }
                    }
                  }
                }
              })

            })


            
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