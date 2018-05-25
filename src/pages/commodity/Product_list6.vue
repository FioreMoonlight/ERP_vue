
<template>
<div class="content">
  <h1>推销商列表</h1>
  <div class="line" v-show="ifboos"></div>
  <el-form ref="form" :model="form" label-width="80px" size="small">
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
        <el-col :span="9">
          <el-date-picker
            v-model="form.infor2"
            type="datetimerange"
            :picker-options="form.pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
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
  </el-form> 
  
  

  <div class="line" style="margin-bottom:0px"></div>
  <div class="search-result oh" >
      <p class="search-result-text">符合查询条件的产品有<span> 6 </span>件</p>
      <div class="left">
        <el-select v-model="form.select1" size="small" slot="prepend" placeholder="请选择" style="width:120px;margin-top:4px">
          <el-option label="操作" value="1" ></el-option>
          <el-option label="上架" value="2"></el-option>
          <el-option label="下架" value="2"></el-option>
          <el-option label="待审核" value="2"></el-option>
          <el-option label="审核通过" value="2"></el-option>
        </el-select>
      </div>
      <div class="right">
        <el-button type="text" @click="open1">批量编辑</el-button> | 
        <el-button type="text" @click="infor1">批量删除</el-button> | 
        <el-button type="text" @click="open2">批量翻译</el-button> | 
        <el-button type="text" @click="infor2">批量发布</el-button> | 
        <el-button type="text" @click="infor3">批量检测</el-button> 
      </div>
  </div>
  <div style="border-bottom:1px solid #ebeef5"></div>
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
        label="SKU"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="SKU"
        label="价格(CNY)"
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
  <div class="search-result oh" >
      <p class="search-result-text">已选择<span> 0 </span>件产品</p>
      <div class="right">
        <el-button type="text" @click="open1">批量编辑</el-button> | 
        <el-button type="text" @click="infor1">批量删除</el-button> | 
        <el-button type="text" @click="open2">批量翻译</el-button> | 
        <el-button type="text" @click="infor2">批量发布</el-button> | 
        <el-button type="text" @click="infor3">批量检测</el-button> 
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
    <el-form ref="form" :model="form" label-width="100px">
      <el-row :gutter="20">
        <el-col :span="18">
          <div>
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions2"
              >
            </el-cascader>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">选择分类</el-button>
        </el-col>
      </el-row>
      <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
        <template slot="prepend">节点ID</template>
      </el-input>
      <el-row :gutter="20">
        <el-col :span="18">
          <div>
            <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
              <template slot="prepend">分类模板</template>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">刷新分类属性</el-button>
        </el-col>
      </el-row>
      
      <el-input placeholder="请输入内容" v-model="infor" style="margin-bottom:5px">
        <template slot="prepend">分类属性</template>
      </el-input>
      <div class="line"></div>
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
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
    </div>
  </el-dialog>
  <el-dialog title="批量翻译" :visible.sync="dialogTableVisible1" width="60%">
    <el-form>
      <el-form-item label="翻译方式">
        <el-select v-model="form.select1" placeholder="请选择">
          <el-option label="一键从中文翻译" value="1" ></el-option>
          <el-option label="一键从英文翻译" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="翻译内容">
        <el-checkbox v-model="checked1" label="产品标题" border></el-checkbox>
        <el-checkbox v-model="checked2" label="产品亮点" border></el-checkbox>
        <el-checkbox v-model="checked3" label="产品关键词" border></el-checkbox>
        <el-checkbox v-model="checked4" label="产品描述" border></el-checkbox>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogTableVisible1 = false">取 消</el-button>
      <el-button type="primary" @click="dialogTableVisible1 = false">确 定</el-button>
    </div>
  </el-dialog>
  
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            options: [{
                      value: 'zhinan',
                      label: '指南',
                      children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                          value: 'yizhi',
                          label: '一致'
                        }, {
                          value: 'fankui',
                          label: '反馈'
                        }, {
                          value: 'xiaolv',
                          label: '效率'
                        }, {
                          value: 'kekong',
                          label: '可控'
                        }]
                      }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                          value: 'cexiangdaohang',
                          label: '侧向导航'
                        }, {
                          value: 'dingbudaohang',
                          label: '顶部导航'
                        }]
                      }]
              }, {
                value: 'zujian',
                label: '组件',
                children: [{
                  value: 'basic',
                  label: 'Basic',
                  children: [{
                    value: 'layout',
                    label: 'Layout 布局'
                  }, {
                    value: 'color',
                    label: 'Color 色彩'
                  }, {
                    value: 'typography',
                    label: 'Typography 字体'
                  }, {
                    value: 'icon',
                    label: 'Icon 图标'
                  }, {
                    value: 'button',
                    label: 'Button 按钮'
                  }]
                }, {
                  value: 'form',
                  label: 'Form',
                  children: [{
                    value: 'radio',
                    label: 'Radio 单选框'
                  }, {
                    value: 'checkbox',
                    label: 'Checkbox 多选框'
                  }, {
                    value: 'input',
                    label: 'Input 输入框'
                  }, {
                    value: 'input-number',
                    label: 'InputNumber 计数器'
                  }, {
                    value: 'select',
                    label: 'Select 选择器'
                  }, {
                    value: 'cascader',
                    label: 'Cascader 级联选择器'
                  }, {
                    value: 'switch',
                    label: 'Switch 开关'
                  }, {
                    value: 'slider',
                    label: 'Slider 滑块'
                  }, {
                    value: 'time-picker',
                    label: 'TimePicker 时间选择器'
                  }, {
                    value: 'date-picker',
                    label: 'DatePicker 日期选择器'
                  }, {
                    value: 'datetime-picker',
                    label: 'DateTimePicker 日期时间选择器'
                  }, {
                    value: 'upload',
                    label: 'Upload 上传'
                  }, {
                    value: 'rate',
                    label: 'Rate 评分'
                  }, {
                    value: 'form',
                    label: 'Form 表单'
                  }]
                }, {
                  value: 'data',
                  label: 'Data',
                  children: [{
                    value: 'table',
                    label: 'Table 表格'
                  }, {
                    value: 'tag',
                    label: 'Tag 标签'
                  }, {
                    value: 'progress',
                    label: 'Progress 进度条'
                  }, {
                    value: 'tree',
                    label: 'Tree 树形控件'
                  }, {
                    value: 'pagination',
                    label: 'Pagination 分页'
                  }, {
                    value: 'badge',
                    label: 'Badge 标记'
                  }]
                }, {
                  value: 'notice',
                  label: 'Notice',
                  children: [{
                    value: 'alert',
                    label: 'Alert 警告'
                  }, {
                    value: 'loading',
                    label: 'Loading 加载'
                  }, {
                    value: 'message',
                    label: 'Message 消息提示'
                  }, {
                    value: 'message-box',
                    label: 'MessageBox 弹框'
                  }, {
                    value: 'notification',
                    label: 'Notification 通知'
                  }]
                }, {
                  value: 'navigation',
                  label: 'Navigation',
                  children: [{
                    value: 'menu',
                    label: 'NavMenu 导航菜单'
                  }, {
                    value: 'tabs',
                    label: 'Tabs 标签页'
                  }, {
                    value: 'breadcrumb',
                    label: 'Breadcrumb 面包屑'
                  }, {
                    value: 'dropdown',
                    label: 'Dropdown 下拉菜单'
                  }, {
                    value: 'steps',
                    label: 'Steps 步骤条'
                  }]
                }, {
                  value: 'others',
                  label: 'Others',
                  children: [{
                    value: 'dialog',
                    label: 'Dialog 对话框'
                  }, {
                    value: 'tooltip',
                    label: 'Tooltip 文字提示'
                  }, {
                    value: 'popover',
                    label: 'Popover 弹出框'
                  }, {
                    value: 'card',
                    label: 'Card 卡片'
                  }, {
                    value: 'carousel',
                    label: 'Carousel 走马灯'
                  }, {
                    value: 'collapse',
                    label: 'Collapse 折叠面板'
                  }]
                }]
              }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                  value: 'axure',
                  label: 'Axure Components'
                }, {
                  value: 'sketch',
                  label: 'Sketch Templates'
                }, {
                  value: 'jiaohu',
                  label: '组件交互文档'
                }]
              }],
            selectedOptions: [],
            selectedOptions2: [],
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
            this.dialogTableVisible = true;
          },
          open2(){
            this.dialogTableVisible1 = true;
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
          infor2(){
            this.$confirm('确认要批量发布吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '正在同步!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消同步'
              });          
            });
          },
          infor3(){
            this.$confirm('确认要批量检测吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '检测成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消检测'
              });          
            });
          },
          infor4(){
            this.$confirm('确认翻译吗?', '提示', {
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