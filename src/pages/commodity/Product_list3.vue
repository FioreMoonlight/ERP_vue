<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>待发布产品</h1>
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
    <div class="line"></div>
    <el-form-item label="审核状态">
      <el-radio-group v-model="radio1" size="small">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >通过(50123)</el-radio>
        <el-radio label="3" border >待审核(245)</el-radio>
        <el-radio label="4" border >失效(1)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="上架状态">
      <el-radio-group v-model="radio2" size="small">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >上架(50123)</el-radio>
        <el-radio label="3" border >下架(245)</el-radio>
        <el-radio label="4" border >过滤(1)</el-radio>
        <el-radio label="4" border >侵权(103)</el-radio>
        <el-radio label="4" border >屏蔽(0)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="产品类型">
      <el-radio-group v-model="radio3" size="small">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >重点(50123)</el-radio>
        <el-radio label="3" border >原创(245)</el-radio>
        <el-radio label="4" border >海外(1)</el-radio>
        <el-radio label="4" border >抓取(103)</el-radio>
        <el-radio label="4" border >其他(0)</el-radio>
        <el-radio label="4" border >ERP产品库(0)</el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form> 
  
  

  <div class="line"></div>
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
        label="标题"
        sortable
        width="120"
        >
      </el-table-column>
      <el-table-column
        prop="img"
        label="图片"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="父SKU"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="价格"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="库存"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="更新时间"
        sortable
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="181">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="small"></el-button>
          <el-button type="success" icon="el-icon-upload2"  size="small"></el-button>
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
 
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            radio1:'1',
            radio2:'1',
            radio3:'1',
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