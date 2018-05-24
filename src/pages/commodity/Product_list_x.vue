<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>产品列表</h1>
  <div class="line"></div>
  <el-form>
    <el-form-item label="公司" v-show="ifboos">
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
  <template>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="已发布" name="first">
        <el-table
          :data="tableData1"
          border
          style="width: 100%"
          :default-sort = "{prop: 'order', order: 'descending'}"
          >
          
          <el-table-column
            fixed
            prop="name"
            label="商品名"
            sortable
            width="120"
            >
          </el-table-column>
          <el-table-column
            prop="class"
            label="分类"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="brand"
            label="品牌"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="weight"
            label="重量/kg"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="bulk"
            label="体积/m³"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="keyword"
            label="关键字"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="intro"
            label="简介"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="EAN"
            label="商品条码EAN"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="UPC"
            label="商品统一代码UPC"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="SKU"
            label="商品编码SKU"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="img"
            label="商品图片"
            sortable
            >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="195">
            <template slot-scope="scope">
              <!-- <el-button @click="product_UD"  size="small" class="UD_btn">上架</el-button> -->
              <el-button type="primary" @click="showToggle(scope.row)" v-if="scope.row.flag" size="small">上架</el-button>
              <el-button type="info" @click="showToggle(scope.row)" v-else size="small">下架</el-button>
              <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="small"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="product_del" size="small"></el-button>
              
              <!-- <el-button @click="product_edit" type="text" size="small">编辑</el-button> 
              <el-button @click="product_del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="未发布" name="second">
        <el-input placeholder="请输入" icon="search" v-model="schfilter" class="search-input">  
        </el-input> 
        <el-table
            :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            border
            style="width: 100%"
            :default-sort = "{prop: 'order', order: 'descending'}"
            @selection-change="handleSelectionChange"
            >
            <el-table-column
              fixed
              type="selection"
              width="35">
            </el-table-column>
            <el-table-column
              fixed
              prop="name"
              label="商品名"
              sortable
              width="120"
              >
            </el-table-column>
            <el-table-column
              prop="class"
              label="分类"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="brand"
              label="品牌"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="weight"
              label="重量/kg"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="bulk"
              label="体积/m³"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="keyword"
              label="关键字"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="intro"
              label="简介"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="EAN"
              label="商品条码EAN"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="UPC"
              label="商品统一代码UPC"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="SKU"
              label="商品编码SKU"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="img"
              label="商品图片"
              sortable
              >
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="125">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="small"></el-button>
                <el-button type="danger" icon="el-icon-delete" @click="product_del" size="small"></el-button>
                
                <!-- <el-button @click="product_edit" type="text" size="small">编辑</el-button> 
                <el-button @click="product_del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
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
        <el-button type="primary" @click="onSubmit" class="sub_btn">一键发布</el-button>
      </el-tab-pane>
    </el-tabs>
  </template>
  
  
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            form:{
              company: []
            },
            activeName: 'second',
            tableData1: [],
            data: [],
            checked: [],
            total:0,//默认数据总数
            pagesize:7,//每页的数据条数
            currentPage:1,//默认开始页面
            cid:'',
            staffid:'',
            value: '',
            ifboos:false,
            data: [],
            data2:[],
            data3:[],
            totalItems:0,
            currentPage:1,
            pagesize:5,
            schfilter:"",
            
          }
        },
        methods: {
          change(val){
              var tk = localStorage.getItem("token");
              var uid = localStorage.getItem("uid");

              this.cid = val;//把当前公司id


              //列出公司里的产品
              this.$http.post('/restful/list/company.'+this.cid+'/product',{
                // user_token:tk,

              }).then((res)=>{
                // console.log(res);
                this.data = res.values;
              })             
          },
          current_change:function(currentPage){
            this.currentPage = currentPage;
          },
          showToggle(data){
            data.flag = !data.flag;
          },
          product_edit(data) {
            router.push({
              path:'Cd_product_edit'
            })
          },
          product_del() {
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
          },
          handleSelectionChange(val) {
            this.checked = val;
            console.log(this.checked)
          },
          onSubmit(){
            console.log("发布了")
          },
          handleSizeChange(size) {
            this.pagesize = size;
          },
          handleCurrentChange(currentPage) {
            this.currentPage = currentPage;
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
          getinfor(){
            var tk = localStorage.getItem("token");
            var uid = localStorage.getItem("uid");

            if(localStorage.getItem("status") == "staff"){
              this.$http.post(this.api.link_list_company_staff_to_user,{
                user_token:tk,
                user_query:"user_id=='"+uid+"'"
              }).then((res)=>{
                // console.log(res)
                //获取员工用户的对应公司id
                this.cid = res.values[0].company_id;
                //获取员工用户的对应公司的对应员工id
                this.staffid = res.values[0].staff_id;
                //列出公司里的产品
                this.$http.post('/restful/list/company.'+this.cid+'/product',{
                  // user_token:tk,
                  user_query:"user_id=='"+uid+"'"
                }).then((res)=>{
                  // console.log(res);
                  this.data = res.values;
                  this.data2 = this.data.concat(); 
                  this.totalItems = res.values.length;
                })
              })
            }else{
              this.ifboos = true;
              this.$http.post(this.api.user_company_list,{
                user_token:tk,
                user_query:"user_id=='"+uid+"'"
              }).then((res)=>{
                // console.log(res);
                if(res.values.length > 0){
                  for(var i = 0;i < res.values.length;i++){
                    this.form.company.push({
                      "value":res.values[i].company_id,
                      "label":res.values[i].name
                    });
                  }
                  this.value = res.values[0].company_id;//下拉框显示公司名字
                  this.cid = res.values[0].company_id;//把当前公司id
                  // console.log(this.cid)
                  this.staffid = 1;//老板的员工id都是1?
                  //列出公司里的产品
                  this.$http.post('/restful/list/company.'+this.cid+'/product',{
                    // user_token:tk,

                  }).then((res)=>{
                    // console.log(res);
                    this.data = res.values;
                    this.data2 = this.data.concat(); 
                    this.totalItems = res.values.length;
                  })
                }
              })
            }
            
          }
        },
        mounted(){
          this.getinfor();
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
  .sub_btn{
    margin-top: 20px;
  }
</style>