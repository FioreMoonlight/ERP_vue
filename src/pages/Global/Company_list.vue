<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>公司列表</h1>
  <div class="line"></div>
  <el-input placeholder="请输入" icon="search" v-model="schfilter" class="search-input">  
  </el-input> 
  <el-table
    :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    border
    style="width: 100%"
    :default-sort = "{prop: 'name', order: 'descending'}"
    >
    <el-table-column
      fixed
      prop="name"
      label="公司名"
      sortable
      width="130"
      >
    </el-table-column>
    <el-table-column
      prop="regmoney"
      label="注册资金/万(¥)"
      sortable
      width="140"
      >
    </el-table-column>
    <el-table-column
      prop="reg_address"
      label="注册地点"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="legalp"
      label="法人名称"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="range"
      label="经营范围"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="work_address"
      label="办公地址"
      sortable
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="dialogImageUrl"
      label="营业执照照片"
      sortable
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="125">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="company_edit" size="small"></el-button>
        <el-button type="danger" icon="el-icon-delete" @click="company_del" size="small"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 20, 50, 100]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalItems">
  </el-pagination>
</div>
</template>

<script>
    import router from "../../router";
    import Qs from 'qs';

    export default {
        data() {
          return {
            data: [],
            totalItems:0,
            currentPage:1,
            pagesize:5,
            schfilter:"",
            data2:[],
            data3:[]
          }
        },
        methods: {
          handleSizeChange: function (size) {
              this.pagesize = size;            
          },
          handleCurrentChange: function(currentPage){
              this.currentPage = currentPage;
          },
          getcompanylist(){
            var tk = localStorage.getItem("token")

            this.$http.post(this.api.company_list,
            {
              user_token:tk
            }).then((res)=>{
              // console.log(res);
              this.data = res.values;
              this.data2 = this.data.concat(); 
              this.totalItems = res.values.length;
            })


          },
          currentChangePage(list) {
            // console.log("1")
            let from = (this.currentPage - 1) * this.pageSize;
            let to = this.currentPage * this.pageSize;
                 
            for (; from < to; from++) {
              if (list[from]) {
                this.data2.push(list[from]);
              }
            }
          },
          company_edit() {
            router.push({
              path:'G_company_edit'
            })
          },
          company_del() {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
          }
        },
        mounted(){
          this.getcompanylist();
        },
        watch: {  
           schfilter: function(val, oldVal){  
                // console.log(val)
                if(val != ""){                       
                    
                  this.data3 = [];
                  this.data.length=0;
                  for(var demokey of this.data2){
                    if(demokey.name.indexOf(this.schfilter)>=0){          
                        this.data.push(demokey);
                    }
                  }
                  this.currentPage = 1;
                  this.totalItems = this.data.length;
                  this.currentChangePage(this.data3)
                }else{
        
                  this.data.length=0;
                  this.totalItems = this.data2.length;
                  this.data = this.data2.concat();
                }
                
                //this.data = this.otableData.filter( item => (~item.name.indexOf(val)));  
            }   
        }
      }
</script>
<style scoped>
    .line{
      margin: 20px 0;
      border-top: 1px solid #dcdfe6;
    }
</style>