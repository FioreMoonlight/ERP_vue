<template>
<div class="content">
  <h1>产品回收站</h1>
  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="80px" size="mini">
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
    <div class="line" v-show="ifboos"></div>
    <el-form-item label="分类" style="margin-bottom:5px">
      <el-select v-model="form.inf2" placeholder="请选择">
        <el-option
          v-for="item in form.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="内容搜索" >
      <el-row  >
        <el-col :span="9" style="margin-right:10px">
          <el-date-picker
            v-model="form.infor2"
            type="datetimerange"
            :picker-options="form.pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width:100%"
            >
          </el-date-picker>
        </el-col>
        <el-col :span="9" style="margin-right:10px">
          <el-input placeholder="请输入内容" v-model="form.infor1" class="input-with-select" >
            <el-select v-model="form.select1" slot="prepend" placeholder="请选择" style="width:120px">
              <el-option label="标题" value="1" ></el-option>
              <el-option label="SKU" value="2"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="2"  >
          <el-button type="primary">搜索产品</el-button>
        </el-col>
        
      </el-row>
      
    </el-form-item>
    <div class="line"></div>
    <el-form-item label="审核状态" style="margin-bottom:5px">
      <el-radio-group v-model="radio1" size="mini">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >通过(50123)</el-radio>
        <el-radio label="3" border >待审核(245)</el-radio>
        <el-radio label="4" border >失效(1)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="上架状态" style="margin-bottom:5px">
      <el-radio-group v-model="radio2" size="mini">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >上架(50123)</el-radio>
        <el-radio label="3" border >下架(245)</el-radio>
        <el-radio label="4" border >过滤(1)</el-radio>
        <el-radio label="4" border >侵权(103)</el-radio>
        <el-radio label="4" border >屏蔽(0)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="产品类型">
      <el-radio-group v-model="radio3" size="mini">
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
  
  

  <div class="line" style="margin-bottom:5px"></div>
  <div class="search-result oh" style="margin-bottom:5px">
      <p class="search-result-text">符合查询条件的产品有<span> 6 </span>件</p>
      <div class="left">
        <el-select v-model="form.select1" size="mini" slot="prepend" placeholder="请选择" style="width:120px">
          <el-option label="操作" value="1" ></el-option>
          <el-option label="上架" value="2"></el-option>
          <el-option label="下架" value="2"></el-option>
          <el-option label="待审核" value="2"></el-option>
          <el-option label="审核通过" value="2"></el-option>
        </el-select>
      </div>
      <div class="right">
        <el-button type="text" @click="infor2" size="mini">批量还原</el-button> |
        <el-button type="text" @click="infor1" size="mini">批量删除</el-button>
      </div>
  </div>
  <el-table
      :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      border
      style="width: 100%"
      :default-sort = "{prop: 'order', order: 'descending'}"
      @selection-change="handleSelectionChange"
      size="mini"
      >
      <el-table-column
        fixed
        type="selection"
        width="35">
      </el-table-column>
      <el-table-column
        fixed
        prop="name"
        label="产品ID"
        sortable
        width="120"
        >
      </el-table-column>
      <el-table-column
        prop="img"
        label="主图"
        sortable
        >
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
        prop="SKU"
        label="父SKU"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="SKU"
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
        prop="SKU"
        label="操作员"
        sortable
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="75">
        <template slot-scope="scope">
          <!-- <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="mini"></el-button>
          <el-button type="success" icon="el-icon-upload2"  size="mini"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="product_del" size="mini"></el-button> -->
          
          <el-button @click="product_edit" type="text" size="mini">编辑</el-button> 
          <!-- <el-button @click="product_del" type="text" style="color:#F56C6C" size="mini">删除</el-button> -->
        </template>
      </el-table-column>
  </el-table>
  <div class="search-result oh" >
      <p class="search-result-text">已选择<span> 0 </span>件产品</p>
      <div class="right">
        <el-button type="text" @click="infor2" size="mini">批量还原</el-button> |
        <el-button type="text" @click="infor1" size="mini">批量删除</el-button>
      </div>
  </div>
  
  <div style="border-bottom:1px solid #ebeef5;clear:both;margin-bottom:20px"></div>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 20, 50, 100]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalItems"
    style="clear:both;text-align:center">
  </el-pagination>
 
  <el-dialog title="批量编辑" :visible.sync="dialogTableVisible" width="60%">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">开头添加</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">结尾添加</template>
        </el-input>
        <el-row  class="mt10">
          <el-col :span="11">
            <el-input placeholder="请输入内容" v-model="infor">
              <template slot="prepend">将标题中的</template>
            </el-input>
          </el-col>
          <el-col :span="11" :offset="2">
            <el-input placeholder="请输入内容" v-model="infor">
              <template slot="prepend">替换为</template>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <div class="line"></div>
      <el-form-item label="生成SKU">
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">前缀</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">后缀</template>
        </el-input>
        <div style="margin-bottom:5px">
          中间数字位数
          <el-select v-model="form.select1" placeholder="请选择">
            <el-option label="0" value="1" ></el-option>
            <el-option label="1" value="2"></el-option>
            
          </el-select>
        </div>
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">起始数字</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
          <template slot="prepend">生成示例</template>
        </el-input>
      </el-form-item>
      <div class="line"></div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
    </div>
  </el-dialog>

  
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            infor:'',
            radio1:'1',
            radio2:'1',
            radio3:'1',
            checked1:true,
            checked2:true,
            checked3:true,
            checked4:true,
            form:{
              company: [],
              infor1:'',
              select1:'1',
              infor2:'',
              options: [{
                value: '1',
                label: '鞋子'
              }, {
                value: '2',
                label: '帽子'
              }, {
                value: '3',
                label: '衣服'
              }, {
                value: '4',
                label: '裤子'
              }],
              pickerOptions: {
                shortcuts: [{
                  text: '最近一周',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近一个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                  }
                }, {
                  text: '最近三个月',
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                  }
                }]
              }
            },
            dialogTableVisible:false,
            dialogTableVisible1:false,
            inf2:'',
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
          infor2(){
            this.$confirm('确认要批量还原吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '还原成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
          },
          infor1(){
            this.$confirm('确认要批量删除吗?', '提示', {
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
              path:'Cd_product_add'
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
  /*.line{
    margin: 20px 0;
    border-top: 1px solid #dcdfe6;
  }*/
  .sub_btn{
    margin-top: 20px;
  }
</style>