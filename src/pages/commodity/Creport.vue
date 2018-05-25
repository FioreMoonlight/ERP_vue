<template>
    <div>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="充值记录" name="first">
                <div class="header">
                    <el-row>
                        <el-col :span="20">
                            <div class="header-top">
                                <el-date-picker v-model="value" type="datetimerange" range-separator="至" start-placeholder="制单开始日期" end-placeholder="制单结束日期" size="mini"></el-date-picker>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="table">
                    <div class="table-table">
                        <el-table
                          :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                          border
                          style="width: 100%;margin-bottom:20px"
                          :default-sort = "{prop: 'right', order: 'descending'}"
                          fit
                          >
                          <el-table-column
                            prop="name"
                            label="单据编号"
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="username"
                            label="会计期间"
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="password"
                            label="收款金额/¥"
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="tel"
                            label="收款帐户"
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="idcardnum"
                            label="核销金额/¥"
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="status"
                            label="核销差额" 
                            sortable
                            
                            >
                          </el-table-column>
                          <el-table-column
                            prop="data"
                            label="日期" 
                            sortable
                            
                            >
                          </el-table-column>
                          
                        </el-table>
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
                    </div>
                </div>
          </el-tab-pane>
          <el-tab-pane label="自动报账" name="second">
              <div class="header">
                  <el-row>
                      <el-col :span="20">
                          <div class="header-top">
                              <el-date-picker v-model="value" type="datetimerange" range-separator="至" start-placeholder="制单开始日期" end-placeholder="制单结束日期" size="mini"></el-date-picker>
                          </div>
                          <div class="header-bottom">
                              <el-select v-model="value" placeholder="账户" size="mini" class="header-bottom-select">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                              </el-select>
                              <el-select v-model="value" placeholder="审核标识" size="mini" class="header-bottom-select">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                              </el-select>
                              <el-button type="primary" size="mini">查询</el-button>
                              <el-button type="primary" size="mini">重置</el-button>
                          </div>
                      </el-col>
                      <el-col :span="4">
                          <div class="header-right">
                              <el-button type="text" size="medium " @click="openWeb"><a href="http://down.takesend.com/track/huikuanzhanghao.php" target="_blank">汇款账号</a></el-button>
                          </div>
                      </el-col>
                  </el-row>
              </div>
              <div class="table">
                  <div class="table-header">
                      <el-button type="primary" size="mini" @click="add">增加</el-button>
                  </div>
                  <div class="table-table">
                      <el-table
                        :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                        border
                        style="width: 100%;margin-bottom:20px"
                        :default-sort = "{prop: 'right', order: 'descending'}"
                        fit
                        >
                        <el-table-column
                          prop="name"
                          label="报账类型"
                          sortable
                          width="120"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="username"
                          label="是否审核"
                          sortable
                          width="120"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="password"
                          label="单据编号"
                          sortable
                          width="180"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="tel"
                          label="收款帐户"
                          sortable
                          width="150"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="idcardnum"
                          label="报账金额"
                          sortable
                          width="120"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="status"
                          label="报账币别" 
                          sortable
                          width="120"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="people"
                          label="制单人" 
                          sortable
                          width="120"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="data"
                          label="制单日期" 
                          sortable
                          width="180"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="remarks "
                          label="备注" 
                          sortable
                          width="150"
                          >
                        </el-table-column>
                        <el-table-column
                          fixed="right"
                          label="操作"
                          width="130">
                          <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" @click="edit" size="small"></el-button>
                            <el-button type="danger" icon="el-icon-delete" @click="del" size="small"></el-button>
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
                        :total="totalItems"
                        style="clear:both;text-align:center">
                      </el-pagination>
                  </div>
              </div>
          </el-tab-pane>
        </el-tabs>

        <!--弹窗-->
        <el-dialog :title=dialogTitle :visible.sync="dialogTableVisible">
            <el-row class="dialog-item">
                <el-col :span="12">
                    <span class="dialog-left">单据编号</span>
                    新建中...
                </el-col>
                <el-col :span="12"></el-col>
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="12">
                    <span class="dialog-left">收款帐户</span>
                    <el-select v-model="value" placeholder="请选择" size="mini">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
                <!-- <el-col :span="12">
                    <span class="dialog-left">报账类型</span>
                    <el-radio v-model="radio" label="1">贷款</el-radio>
                    <el-radio v-model="radio" label="2">押金</el-radio>
                </el-col> -->
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="12">
                    <span class="dialog-left">报账金额</span>
                    <el-input v-model="input" placeholder="请输入内容" class="dialog-input" size="mini"></el-input>
                </el-col>
                <el-col :span="12">
                    <span class="dialog-left">报账币别</span>
                    <el-select v-model="value" placeholder="请选择" size="mini">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="12">
                    <span class="dialog-left">报账银行</span>
                    <el-input v-model="input" placeholder="请输入内容" class="dialog-input" size="mini"></el-input>
                </el-col>
                <el-col :span="12">
                    <span class="dialog-left">银行账号</span>
                    <el-input v-model="input" placeholder="请输入内容" class="dialog-input" size="mini"></el-input>
                </el-col>
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="12">
                    <span class="dialog-left">银行户名</span>
                    <el-input v-model="input" placeholder="请输入内容" class="dialog-input" size="mini"></el-input>
                </el-col>
                <el-col :span="12">
                    <span style="margin-right:25px">是否备注姓名</span>
                    <el-radio v-model="radio" label="1">是</el-radio>
                    <el-radio v-model="radio" label="2">否</el-radio>
                </el-col>
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="18">
                    <span class="left" style="margin-right:55px">上传凭证</span>
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="mini" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">温馨提示:除工行，交行必须上传凭证以外，其他银行打款时必须备注客户名</div>
                    </el-upload>

                </el-col>
            </el-row>
            <el-row class="dialog-item">
                <el-col :span="24">
                    <span class="dialog-left left" style="margin-right:55px">备注</span>
                    <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea"></el-input>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
            return {
                value:'',
                activeName:'first',
                options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
                data: [
                    {
                        name:'货款',
                        username:'通过审核',
                        password:'FXE201805120004',
                        tel:'交通银行（深圳）',
                        idcardnum:'1200.00',
                        status:'人民币',
                        people:'KH041006',
                        data:'2018-05-12 07:21:48',
                        remarks:'费用预付'
                    },
                ],
                totalItems:0,
                currentPage:1,
                pagesize:5,
                dialogTableVisible:false,
                radio:'1',
                input:'',
                fileList:[],
                dialogTitle:''
            }
        },
        methods: {
            openWeb: function(){

            },
            handleSizeChange: function (size) {
                this.pagesize = size;            
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            add: function(){
                this.dialogTableVisible = true
                this.dialogTitle="自助报账"
            },
            edit: function(){
                this.dialogTableVisible = true
                this.dialogTitle="修改/查看"
            },
            del: function(){
                this.$confirm('是否删除该条, 是否继续?', '提示', {
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
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },

        },
        mounted() {
            
        }
    }
</script>
<style scoped>
    a{
        text-decoration: none;
    }

    .header{
        /*height:90px;*/
        border-bottom: 1px solid #b8d0d6;
    }

    .header-top{
        margin-bottom: 20px;
    }

    .header-bottom-select{
        margin-right: 2%;
    }

    .header-right{
        width: 100%;
        height:80px;
        border-left: 1px solid #b8d0d6;
        text-align: center;
        line-height: 80px;
    }

    .table{
        margin-top: 10px;
    }

    .table-header{
        height:20px;
    }

    .table-table{
        margin-top: 20px;
    }

    .dialog-item{
        margin-bottom: 20px;
    }    

    .dialog-left{
        margin-right: 50px;
    }

    .dialog-input{
        width:185px;
    }

    .el-upload__tip{
        color:red;
    }

</style>