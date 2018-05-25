<template>
  <div>
    <h1>物流管理</h1>
    <div class="line"></div>
    <div class="search">
      <el-radio-group v-model="radio">
        <el-radio :label="1">订单号</el-radio>
        <el-radio :label="2">订单ID</el-radio>
        <el-radio :label="3">物流ID</el-radio>
        <el-radio :label="4">国内运单</el-radio>
        <el-radio :label="5">国际运单</el-radio>
        <el-radio :label="6">国际追踪号</el-radio>
      </el-radio-group>
      <el-input v-model="input" style="width: 200px;margin-left: 30px"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="logisticsId"
        label="物流ID">
      </el-table-column>
      <el-table-column
        prop="orderId"
        label="订单ID">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="产品信息">
        <template slot-scope="scope">
          <div style="overflow: hidden;float: left">
            <img :src="scope.row.detail.img" alt="" style="width: 60px;height: 60px" width="60" height="60">
          </div>
          <div style="float: left;margin-left: 10px">
            <p>
              当地货币符号{{scope.row.detail.type}}
            </p>
            <p>
              SKU {{scope.row.detail.price}}
            </p>
          </div>

        </template>
      </el-table-column>
      <el-table-column
        prop="domestic"
        label="国内运单">
        <template slot-scope="scope">
          <p>
            单号：{{scope.row.domestic.id}}
          </p>
          <p>
            <span v-if="scope.row.domestic.status === 1" style="color: #f00">
              未发货
            </span>
            <span v-else-if="scope.row.domestic.status === 2" style="color: #00f">
              已发货
            </span>
            <span v-else-if="scope.row.domestic.status === 3">
              已取消
            </span>
            <span v-else>

            </span>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="客户备注">
      </el-table-column>
      <el-table-column
        width="160"
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="text-align: right;padding: 10px">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog title="订单信息" :visible.sync="dialogFormVisible">

      <div class="order-detail">
        <h2>原始订单信息</h2>
        <p style="line-height: 36px;margin-top: 20px">
          <span>
            订单号:xxxxxxxxxxxxxxxxx
          </span>
          <el-button style="margin-left: 20px">收件人地址</el-button>
        </p>
        <div style="overflow: hidden;border-bottom: 1px solid #e4e7ed">
          <div class="order-img" style="width: 120px;height: 120px;float: left;margin-right: 20px">
            <img src="" alt="" width="120" height="120" style="width: 120px;height: 120px">
          </div>
          <div class="order-message"  style="padding: 20px 0;float:left">
            <div>
              <p style="line-height: 60px">
                <span>中文名：</span>
                <span>英文名：</span>
                <span>申报报价：</span>
              </p>
              <p style="line-height: 60px">
                <span>重量：xxxx kg</span>
                <span>体积：100 X 100 X 100 cm</span>
              </p>
            </div>
          </div>
        </div>
        <h2>修改订单信息</h2>
        <div class="order-message"   style="border-bottom: 1px solid #e4e7ed;padding: 20px 0">
          <div style="margin-top: 20px">
            <el-input placeholder="" v-model="input1" style="width: 260px">
              <template slot="prepend">重量:</template>
            </el-input>
            <el-input v-model="input2" placeholder="" style="width: 140px">
              <template slot="prepend">体积:</template>
            </el-input><span style="padding: 0 5px">x</span>
            <el-input v-model="input2" placeholder="" style="width: 70px"></el-input><span style="padding: 0 5px">x</span>
            <el-input v-model="input2" placeholder="" style="width: 70px"></el-input><span style="padding: 0 5px">cm</span>
            <el-input placeholder="" v-model="input1" style="width: 260px">
              <template slot="prepend">申报单价:</template>
            </el-input>
          </div>
          <div style="margin-top: 20px">
            <el-input placeholder="" v-model="input1" style="width: 265px">
              <template slot="prepend">材积:</template>
              <template slot="append">/6000</template>
            </el-input>
            <el-input placeholder="" v-model="input1" style="width: 200px">
              <template slot="append">/6000</template>
            </el-input>
            <el-input placeholder="" v-model="input1" style="width: 200px">
              <template slot="append">/6000</template>
            </el-input>
            <el-input placeholder="" v-model="input1" style="width: 200px">
              <template slot="append">1/3(计抛)</template>
            </el-input>
          </div>
          <div style="text-align: right;margin-top: 20px">
            <el-button type="primary">保存</el-button>
          </div>
        </div>
        <div class="point" style="border-bottom: 1px solid #e4e7ed;padding: 20px 0">
          <div style="line-height: 36px">
            <span>国际运单：</span>
            <el-button size="mini" type="primary">作废</el-button>
            <el-button size="mini" type="primary">手动添加</el-button>
          </div>
          <p style="line-height: 36px">
            <span>
              线路：xxxxxxxxxxxxxxxx
            </span>
            <span>
              发货日期：xxxxxxxxxxx
            </span>
          </p>
          <p style="line-height: 36px">
            <span>
              运单号：xxxxxxxxxxxxxxxx
            </span>
            <span>
              国际追踪号：xxxxxxxxxxx
            </span>
          </p>
          <div style="text-align: right">
            <el-button size="mini" type="primary">审核通过</el-button>
            <el-button size="mini" type="primary">打印</el-button>
          </div>
        </div>
        <div class="warehouse">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-top: 20px">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="操作日志" name="second"></el-tab-pane>
          </el-tabs>
          <el-select v-model="value" placeholder="仓库备注">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div>
            <el-input type="textarea" style="width: 300px;margin-top: 20px" >

            </el-input>
          </div>

          <div style="text-align: right">
            <el-button size="mini" type="primary">提交</el-button>
            <el-button size="mini" type="danger">审核未通过</el-button>
          </div>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        activeName:'',
        options: [{
          value: '1',
          label: '收件人地址异常'
        }, {
          value: '2',
          label: '国内订单异常'
        }, {
          value: '3',
          label: '订单ID异常'
        }, {
          value: '4',
          label: '物品破损'
        }, {
          value: '5',
          label: '材积比较大'
        }, {
          value: '6',
          label: '重量超重'
        }, {
          value: '7',
          label: '已处理'
        }],
        value: '',
        currentPage3:2,
        input:'111',
        radio:'1',
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        input5:'',
        input6:'',
        input7:'',
        input8:'',
        input9:'',
        input10:'',
        input11:'',
        dialogFormVisible:false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          logisticsId: '1000000000',
          orderId: '100000000',
          detail: {
            img:' ',
            price:'1',
            type:'2',
            sku:'1000142323'
          },
          domestic: {
            id:'123333333333333',
            status:1
          },
          number: '',
          remarks: ''
        }]
      }
    },
    methods:{
      handleSizeChange(){

      },
      handleCurrentChange(){

      },
      handleClick(){

      }
    }
  }
</script>
<style scoped>
  .line{
    margin: 20px 0;
    border-top: 1px solid #dcdfe6;
  }
  h2{
    padding: 20px 0;
    border-bottom: 1px solid #e4e7ed;
  }
</style>
