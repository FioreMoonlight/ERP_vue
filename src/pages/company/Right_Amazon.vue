<template>
    <div class="content">
        <div class="top">
            <el-button type="primary" size="small" @click="addAuthorization">添加授权</el-button>
            <el-button type="text">查看授权帮助</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
              <el-table-column prop="id" label="店铺名称"></el-table-column>
              <el-table-column prop="name" label="授权国家"></el-table-column>
              <el-table-column prop="amount1" label="代理邮箱"></el-table-column>
              <el-table-column prop="amount2" label="授权时间"></el-table-column>
              <el-table-column prop="amount3" label="操作">
                  <template slot-scope="scope">
                      <el-button type="text" @click="editAuthorization">重新授权</el-button>
                      <el-button type="text">删除</el-button>       
                  </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="bottom">
            <div class="bottom-left left">说明！</div>
            <div class="bottom-right left">
                <p>1.多店铺授权，防关联;</p>
                <p>2.同一店铺不可重复授权;</p>
                <p>3.授权删除，不影响平台数据</p>
            </div>
        </div>

        <!--弹框-->
        <el-dialog :title="title" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
            <div class="input"><span>店铺别名:</span><el-input v-model="input" placeholder="请输入店铺别名" style="margin-top:5px"></el-input></div>
            <div class="input"><span>Amazon账号:</span><el-input v-model="input" placeholder="请输入账号" style="margin-top:5px"></el-input></div>
            <div>
                <span>开户站:</span><br />
                <el-select v-model="value" placeholder="请选择" style="margin-top:5px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button type="text" v-if="isAdd">去站点</el-button>
            <div class="site-box clear" v-if="isAdd">
                <div class="input">
                    <span class="input-label">Merchant ID:</span>
                    <el-input v-model="input" placeholder="卖家编号" style="margin-top:5px;width:400px"></el-input>
                </div>
                <div class="input">
                    <span class="input-label">AWS Access Key ID:</span>
                    <el-input v-model="input" placeholder="AWS访问键编号" style="margin-top:5px;width:400px"></el-input>
                </div>
                <div>
                    <span class="input-label">Secret Key:</span>
                    <el-input v-model="input" placeholder="密钥" style="margin-top:5px;width:400px"></el-input>
                </div>
                <el-button type="text" class="right">如何获取上述信息？</el-button> 
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import router from "../../router";

    export default {
        data() {
            return {
               tableData: [{
                 id: 'jianggu',
                 name: '英国',
                 amount1: '249463571@qq.com',
                 amount2: '2017-06-06 19:40:01',
                 amount3: 10
               }, {
                 id: '12987123',
                 name: '德国',
                 amount1: '',
                 amount2: '',
                 amount3: 12
               }, {
                 id: '12987124',
                 name: '法国',
                 amount1: '',
                 amount2: '',
                 amount3: 9
               }, {
                 id: '12987125',
                 name: '意大利',
                 amount1: '',
                 amount2: '',
                 amount3: 17
               }, {
                 id: '12987126',
                 name: '西班牙',
                 amount1: '',
                 amount2: '',
                 amount3: 15
               }],
               dialogVisible:false,
                options: [{
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
                }],
                value: '',
                input:'',
                title:'',
                isAdd:true
            }
        },
        methods:{
            //row横行 column竖行
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0 || columnIndex === 3 || columnIndex === 4) {
                    if (rowIndex % 5 === 0) {
                        return {
                            rowspan: 5,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                   }
                }
            },
            addAuthorization(){
                this.dialogVisible = true;
                this.title="添加Amazon权限";
                this.isAdd = true;
            },
            editAuthorization(){
                this.dialogVisible = true;
                this.title="修改Amazon权限";
                this.isAdd = false;
            }
        }
    }
</script>
<style scoped>
    .content{
        padding: 0 20px;
    }

    .bottom{
        margin-top:30px;
    }
    
    .bottom-left{
        padding:2px 4px 2px 15px;
        background-color: #009997;
        margin-right: 20px;
        color:#fff;
    }

    .bottom-right p{
        margin-bottom: 10px;
        color:#979996;
    }

    .input{
        margin-bottom: 15px;
    }

    .site-box{
        width:100%;
        background-color: #ddd;
        border:1px solid #cdcdcd;
        border-radius: 5px;
        padding:10px 0 40px 0;
    }

    .input-label{
        display: inline-block;
        width:150px;
        text-align: right;
    }

</style>
