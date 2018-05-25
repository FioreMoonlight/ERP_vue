<template>
<div class="content">
  <h1>在线产品</h1>
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
    <el-form-item label="店铺" style="margin-bottom:5px">
      <el-select 
        v-model="value" 
        placeholder="选择店铺"
        v-on:change="change(value)">
        <el-option
            v-for ="item in form.company"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="库存状态" style="margin-bottom:5px">
      <el-radio-group v-model="radio1" size="mini">
        <el-radio label="1" border>全部(53492)</el-radio>
        <el-radio label="2" border >有货(50123)</el-radio>
        <el-radio label="3" border >无货(245)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="内容搜索" >
      <el-row  >
        <el-col :span="9"  style="margin-right:10px">
          <el-input placeholder="请输入内容" v-model="form.infor1" class="input-with-select" >
            <el-select v-model="form.select1" slot="prepend" placeholder="请选择" style="width:120px">
              <el-option label="标题" value="1" ></el-option>
              <el-option label="SKU" value="2"></el-option>
              <el-option label="Asin" value="3"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="2"  >
          <el-button type="primary">搜索产品</el-button>
        </el-col>  
      </el-row>  
    </el-form-item>
  </el-form> 
  
  

  <div class="line" style="margin-bottom:0px"></div>
  <div class="search-result oh" >
      <p class="search-result-text">符合查询条件的产品有<span> 6 </span>件</p>
      <div class="right">
        <el-button type="text" @click="open1" size="mini">修改价格</el-button> |
        <el-button type="text" @click="open2" size="mini">修改促销价格</el-button> |
        <el-button type="text" @click="open3" size="mini">修改库存</el-button> |
        <el-button type="text" @click="open4" size="mini">修改备货时间</el-button>
        <!-- <el-button type="text" @click="open1">导出货源信息</el-button> -->
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
        prop="img"
        label="产品"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        sortable
        width="200"
        >
        <template slot-scope="scope">
          <el-button type="primary" @click="open6" size="mini">修改所有变态基本信息</el-button>
          <div>
            <el-button  type="text" @click="open7" size="mini">[查看货源]</el-button>
          </div>
        </template>
      </el-table-column>
      
      <!-- <el-table-column
        prop="SKU"
        label="SKU"
        sortable
        >
      </el-table-column> -->
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
        label="当前价格"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="BuyBox"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="FBA"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="FBM"
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
        label="销量排名"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="Fulfilled By"
        sortable
        >
      </el-table-column>
      <el-table-column
        
        label="操作"
        >
        <template slot-scope="scope">
          <!-- <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="mini"></el-button> -->
          
          <el-button type="primary" @click="open5" size="mini">价</el-button>
          <el-button type="primary" @click="open6" size="mini">信</el-button>
          <!-- <el-button @click="product_del" type="text" style="color:#F56C6C" size="mini">删除</el-button> -->
        </template>
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="操作员"
        sortable
        >
      </el-table-column>
  </el-table>
  <div class="search-result oh" >
      <p class="search-result-text">已选择<span> 0 </span>件产品</p>
      <div class="right">
        <el-button type="text" @click="open1" size="mini">修改价格</el-button> |
        <el-button type="text" @click="open2" size="mini">修改促销价格</el-button> |
        <el-button type="text" @click="open3" size="mini">修改库存</el-button> |
        <el-button type="text" @click="open4" size="mini">修改备货时间</el-button>
        <!-- <el-button type="text" @click="open1">导出货源信息</el-button> -->
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
 
  <el-dialog title="批量修改价格" :visible.sync="dialog1" width="60%">
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="产品价格"> -->
        <el-radio-group 
          v-model="radio1" 
          size="mini"
          v-on:change="change2(radio1)"
          style="margin-bottom:10px">
          <div>
            <el-radio label="1" style="margin-bottom:5px">
              <span >
                直接替换原来价格
              </span>
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-edit"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="2" style="margin-bottom:5px">
              在原基础上增加&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-plus"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="3" style="margin-bottom:5px">
              在原基础上减少&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-minus"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="4" style="margin-bottom:5px">
              在原基础上乘以&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-close"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="5" style="margin-bottom:5px">
              在原基础上除以&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-minus"></el-button>
              </el-input>
            </el-radio>
          </div>
        </el-radio-group>
      <!-- </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog1 = false">取 消</el-button>
      <el-button type="primary" @click="dialog1 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="批量修改促销信息" :visible.sync="dialog2" width="60%">
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="产品价格"> -->
        <el-radio-group 
          v-model="radio1" 
          size="mini"
          v-on:change="change2(radio1)"
          style="margin-bottom:10px">
          <div>
            <el-radio label="1" style="margin-bottom:5px">
              <span >
                设置促销价格
              </span>
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-edit"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="2" style="margin-bottom:5px">
              在价格上减少&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-minus"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="3" style="margin-bottom:5px">
              在价格上乘以&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-close"></el-button>
              </el-input>
            </el-radio>
          </div>
        </el-radio-group>
        <div class="line"></div>
        <div style="margin-bottom:5px">
          促销开始时间
          <el-date-picker
            v-model="infor"
            type="datetime"
            placeholder="促销开始时间"
            style="margin-left:20px">
          </el-date-picker>
        </div>
        <div>
          促销结束时间
          <el-date-picker
            v-model="infor"
            type="datetime"
            placeholder="促销结束时间"
            style="margin-left:20px">
          </el-date-picker>
        </div>
      <!-- </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog2 = false">取 消</el-button>
      <el-button type="primary" @click="dialog2 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="批量修改库存" :visible.sync="dialog3" width="60%">
    <el-form ref="form" :model="form" label-width="80px">
      <!-- <el-form-item label="产品价格"> -->
        <el-radio-group 
          v-model="radio1" 
          size="mini"
          v-on:change="change2(radio1)"
          style="margin-bottom:10px">
          <div>
            <el-radio label="1" style="margin-bottom:5px">
              <span >
                直接替换原库存
              </span>
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-edit"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="2" style="margin-bottom:5px">
              在原基础上增加&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-plus"></el-button>
              </el-input>
            </el-radio>
          </div>
          <div>
            <el-radio label="3" style="margin-bottom:5px">
              在原基础上减少&nbsp;&nbsp;&nbsp;&nbsp;
              <el-input placeholder="请输入数字" v-model="infor" style="margin-left:20px" :disabled="true">
                <el-button slot="prepend" icon="el-icon-minus"></el-button>
              </el-input>
            </el-radio>
          </div>
        </el-radio-group>
      <!-- </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog3 = false">取 消</el-button>
      <el-button type="primary" @click="dialog3 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="批量修改备货时间" :visible.sync="dialog4" width="60%">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="备货时间">
        <el-input-number v-model="num" controls-position="right"  :min="0" ></el-input-number>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog4 = false">取 消</el-button>
      <el-button type="primary" @click="dialog4 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="批量修改促销信息" :visible.sync="dialog5" width="60%">
    <el-form ref="form" :model="form" label-width="120px">
      <!-- <el-form-item label="产品价格"> -->
        <el-form-item label="SKU">
          <el-input  placeholder="SKU" v-model="form.infor">
          </el-input>
        </el-form-item>
        <div class="line"></div>
        <el-form-item label="库存">
          <el-input-number v-model="num" controls-position="right"  :min="0" ></el-input-number>
        </el-form-item>
        <div class="line"></div>
        <el-form-item label="价格">
          <el-input-number v-model="num" controls-position="right"  :min="0" ></el-input-number>
        </el-form-item>
        <el-form-item label="促销开始时间">
          <el-date-picker
            v-model="infor"
            type="datetime"
            placeholder="促销开始时间"
            style="margin-left:20px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="促销结束时间">
          <el-date-picker
            v-model="infor"
            type="datetime"
            placeholder="促销结束时间"
            style="margin-left:20px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="促销价格">
          <el-input-number v-model="num" controls-position="right"  :min="0" ></el-input-number>
        </el-form-item>
      <!-- </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog5 = false">取 消</el-button>
      <el-button type="primary" @click="dialog5 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="基本信息修改" :visible.sync="dialog6" width="60%">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="标题">
        <el-button type="primary">收回</el-button>
        <el-table
          ref="singleTable"
          :data="tableData1"
          highlight-current-row
          border
          style="width: 100%">
          <el-table-column
            property="sku"
            label="SKU"
            width="120">
          </el-table-column>
          <el-table-column
            property="sku"
            label="标题">
            <template slot-scope="scope">
              <el-input v-model="scope.row.stock"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <div class="line"></div>
      <el-form-item label="分类">
        <el-select v-model="form.infor" placeholder="请选择">
          <el-option
            v-for="item in form.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="五大亮点">
        <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.infor"></el-input>
        <span style="color:#F56C6C">5个亮点不需要全部填写,可根据需求填写</span>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input placeholder="请输入关键词" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="请输入关键词" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="请输入关键词" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="请输入关键词" v-model="form.infor" class="mt10"></el-input>
        <el-input placeholder="请输入关键词" v-model="form.infor"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" placeholder="请输入描述" v-model="form.infor">
        </el-input>
      </el-form-item>

    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog6 = false">取 消</el-button>
      <el-button type="primary" @click="dialog6 = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="货源链接" :visible.sync="dialog7" width="60%">
    <el-form ref="form" :model="form" label-width="100px">

      <el-form-item label="五大亮点">
        <el-input placeholder="" maxlength="500" v-model="form.infor" class="mt10">
          <template slot="prepend">1</template>
        </el-input>
        <el-input placeholder="" maxlength="500" v-model="form.infor" class="mt10">
          <template slot="prepend">2</template>
          <el-button slot="append" icon="">访问链接</el-button>
          <el-button slot="append" icon="el-icon-close"></el-button>
        </el-input>
        
        <span style="color:#F56C6C">此链接记录货源链接,可填写1-5条,非必填</span>
      </el-form-item>
      <el-button type="primary">增加一条记录</el-button>
    </el-form>
    <div class="line"></div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog7 = false">取 消</el-button>
      <el-button type="primary" @click="dialog7 = false">确 定</el-button>
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
            num:'0',
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
            dialog1:false,
            dialog2:false,
            dialog3:false,
            dialog4:false,
            dialog5:false,
            dialog6:false,
            dialog7:false,
            box1:true,
            box2:false,
            box3:false,
            box2_1:true,
            box2_2:false,
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
          open1(){
            this.dialog1 = true;
          },
          open2(){
            this.dialog2 = true;
          },
          open3(){
            this.dialog3 = true;
          },
          open4(){
            this.dialog4 = true;
          },
          open5(){
            this.dialog5 = true;
          },
          open6(){
            this.dialog6 = true;
          },
          open7(){
            this.dialog7 = true;
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
          change2(val){
            if(val == 1){
              this.box1 = true;
              this.box2 = false;
              this.box3 = false;
            }else if(val == 2){
              this.box1 = false;
              this.box2 = true;
              this.box3 = false;
            }else if(val == 3){
              this.box1 = false;
              this.box2 = false;
              this.box3 = true;
            }
          },
          change3(val){
            if(val == 1){
              this.box2_1 = true;
              this.box2_2 = false;

            }else if(val == 2){
              this.box2_1 = false;
              this.box2_2 = true;
            }
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