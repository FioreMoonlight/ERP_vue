<template>
<div class="content">
  <h1>FBM订单</h1>
  <div class="line"></div>
  <div class="select-box">
    <el-row :gutter="10" style="margin-bottom:5px">
      <!-- <el-col :span="6"> -->
        <!-- <el-select v-model="value1" placeholder="选择员工" size="mini">
           <el-option
             v-for="item in options1"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select> -->
      <!-- </el-col> -->
      <!-- <el-col :span="6"> -->
        <el-select v-model="value2" placeholder="选择国家" size="mini">
           <el-option
             v-for="item in options2"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col>
      <el-col :span="6"> -->
        <el-select v-model="value1" placeholder="选择店铺" size="mini">
           <el-option
             v-for="item in options1"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
    </el-row>
    <el-row :gutter="10">
      
      <!-- <el-col :span="3"> -->
        <el-select v-model="value2" placeholder="Amazon订单状态" style="margin-bottom:5px" size="mini">
           <el-option
             v-for="item in options2"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
      <!-- <el-col :span="2"> -->
        <el-select v-model="value3" placeholder="支付状态" size="mini">
           <el-option
             v-for="item in options3"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
      <!-- <el-col :span="3"> -->
        <el-select v-model="value4" placeholder="国内物流状态" size="mini">
           <el-option
             v-for="item in options4"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
      <!-- <el-col :span="3"> -->
        <el-select v-model="value5" placeholder="国际物流状态" size="mini">
           <el-option
             v-for="item in options5"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
      <!-- <el-col :span="2"> -->
        <el-select v-model="value6" placeholder="异常状态" size="mini">
           <el-option
             v-for="item in options6"
             :key="item.value"
             :label="item.label"
             :value="item.value">
           </el-option>
         </el-select>
      <!-- </el-col> -->
      <!-- <el-col :span="9"> -->
        <el-date-picker
          v-model="value_time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="起始日期"
          end-placeholder="终止日期" size="mini">
        </el-date-picker>
      <!-- </el-col> -->
    </el-row>
  </div>
  <!-- <div class="line"></div> -->
  <div class="search clear">
    <el-row >
      <!-- <el-col :span="13"> -->
        <div class="search-radio left" style="margin-right:20px;margin-bottom:5px">
            <el-radio-group v-model="radio" size="mini">
                <el-radio :label="1" border>订单ID</el-radio>
                <el-radio :label="2" border>订单号</el-radio>
                <el-radio :label="3" border>产品SKU</el-radio>
                <el-radio :label="4" border>国内运单</el-radio>
                <el-radio :label="5" border>国际运单</el-radio>
                <el-radio :label="6" border>国际追踪号</el-radio>
            </el-radio-group>
        </div>
      <!-- </el-col>
      <el-col :span="8"> -->
        <el-input v-model="input" style="margin-right:0" placeholder="订单号、产品SKU" size="mini"></el-input>
        <el-button type="primary" style="margin-left:5px" size="mini" class="search-btn">搜索</el-button>
      <!-- </el-col> -->
    </el-row>
      
      <!-- <input type="text" class="search-input" placeholder="订单号、产品SKU"/> --> 
  </div>
  <div class="line" style="margin-bottom:5px"></div>
  <div class="search-result oh" style="margin-bottom:5px">
      <p class="search-result-text">符合条件的订单共有<span> 6 </span>个</p>
      <el-button type="primary" size="mini" class="search-btn right">同步订单</el-button>
  </div>
  <el-table
    :data="tableData"
    border
    style="width: 100%;margin-bottom:20px"
    :default-sort = "{prop: 'cname', order: 'descending'}"
    align="center"
    size="mini"
    >
    <el-table-column
      fixed
      prop="id"
      label="订单ID/订单号"
      width="220px"
      >
      <template slot-scope="scope">
        <div>
          订单ID:{{ scope.row.id}}
        </div>
        <div>
          订单号:{{ scope.row.order_num}}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="pic"
      label="产品信息"
      width="300px"
      >
        <template slot-scope="scope">
          <div class="left" style="width:45px;height:45px;background:#ccc">
            
          </div>
          <div class="right">
           <div> 
            当地货币符号 价格(eg:EUR 236.33)
           </div>
           <div>
             SKU: JIANGU001923beige
           </div>
          </div>
        </template>
    </el-table-column>
    <el-table-column
      prop="cost"
      label="成本(¥)"
      
      >
    </el-table-column>
    <el-table-column
      prop="profit"
      label="利润(¥)"
      
      >
    </el-table-column>
    <el-table-column
      prop="buy_data"
      label="下单时间"
      width="155"
      >
    </el-table-column>
    <el-table-column
      prop="shop"
      label="店铺"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="amazon"
      label="Amazon"
      >
    </el-table-column>
    <el-table-column
      prop="international_order"
      label="国际运单"
      width="200"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="right">
          <p class="order-box-title">顺丰快递:238923489732748970234</p>
          <div slot="reference">
            单号: {{ scope.row.international_order}} <br />
            <span>未发货</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="international_order"
      label="国内运单"
      width="200"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="right">
          <p class="order-box-title">顺丰快递:238923489732748970234</p>
          <div slot="reference">
            单号:{{ scope.row.international_order}} <br />
            <span>已发货</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      prop="count"
      label="数量"
      width="50"
      >
    </el-table-column>  
    <el-table-column
      prop="updata_data"
      label="更新时间"
      width="155"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="65">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="open" size="mini"></el-button>
        <!-- <el-button type="danger" icon="el-icon-delete"  size="mini"></el-button> -->
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
  <!--弹窗区域-->
  <el-dialog title="订单详情 - ID:47839" :visible.sync="dialogTableVisible" width="80%">
    <!--内部弹窗区域-->
        <el-dialog
          width="60%"
          title="国际运单"
          :visible.sync="innerVisible"
          append-to-body
          class="inline-dialog">
            <div class="inner-goods clear">
                <img class="inner-goods-img" src="/static/images/lcLU0ZgiTa.png" alt="" />
                <div class="inner-goods-text">
                    <p>GAZHFERY Big Head Cap Hat Male Flat Hat Large Baseball Cap Sunscreen Be Deepening Incre</p>
                    <span>SKU:GFF-BAAFG-731042-06&nbsp;&nbsp;&nbsp;数量:1</span>
                </div>
                <div class="inner-goods-right">
                    <p>运输数量<span v-if="isDetil">&nbsp;&nbsp;&nbsp;1</span></p>
                    <el-input-number size="mini" v-model="num" v-if="isAdd"></el-input-number>
                </div>
            </div>
            <div class="synchronous" v-if="isDetil">
                同步成功&nbsp;&nbsp;&nbsp;未发货
            </div>
            <div class="inner-input-item clear">
                <div class="inner-input-item-left">
                    <span>中文:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
                <div class="inner-input-item-right">
                    <span>英文:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
            </div>
            <div class="inner-input-item clear">
                <div class="inner-input-item-left">
                    <span>重量:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
                <div class="inner-input-item-right">
                    <span>体积:</span>
                    <el-input size="mini" style="width:50px"></el-input>&nbsp;&nbsp;x&nbsp;&nbsp;
                    <el-input size="mini" style="width:50px"></el-input>&nbsp;&nbsp;x&nbsp;&nbsp;
                    <el-input size="mini" style="width:50px"></el-input>
                </div>
            </div>
            <div class="inner-input-item clear" v-if="isAdd">
                <div class="inner-input-item-left">
                    <span>物流:</span>
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    <el-button type="success" size="mini" class="add-btn">生成运单</el-button>
                </div>
            </div>
            <div class="inner-input-item clear" v-if="isDetil">
                <div class="inner-input-item-left">
                    <span>运单:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
                <div class="inner-input-item-right">
                    <span>追踪:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
            </div>
            <div class="inner-input-item clear" style="margin-bottom:100px;border:none" v-if="isAdd">
                <div class="inner-input-item-left">
                    <span>运单:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
                <div class="inner-input-item-right">
                    <span>追踪:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                </div>
            </div>
            <div class="inner-input-item clear" style="margin-bottom:100px;border:none" v-if="isDetil">
                <div class="inner-input-item-left">
                    <span>备注:</span><el-input placeholder="请输入内容" size="mini"></el-input>
                    <el-button size="mini" class="add-btn">保存备注</el-button>
                </div>

            </div>
        </el-dialog>
    <p>店铺：gaoya(德国)&nbsp;&nbsp;&nbsp;Amazon：发货&nbsp;&nbsp;&nbsp;购买日期：2018/05/09 03:47&nbsp;&nbsp;&nbsp;AmazonID：305-1226403-5312348</p>
    <div class="speed-of-progress">
        <el-steps :active="2" align-center>
          <el-step title="待确定" description="待确定"></el-step>
          <el-step title="已支付" description="已支付"></el-step>
          <el-step title="虚发货" description="虚发货"></el-step>
          <el-step title="已采购" description="已采购"></el-step>
          <el-step title="已签收" description="已签收"></el-step>
          <el-step title="国际已发货" description="国际已发货"></el-step>
          <el-step title="已完成" description="已完成"></el-step>
        </el-steps>
    </div>
    <div class="goods-box clear">
        <div class="goods-item clear" v-for="(item,index) in goodsData">
            <img class="goods-item-pic" :src=item.picUrl alt="" />
            <div class="goods-item-text">
                <a href="">{{item.name}}</a>
                <p>SKU:{{item.sku}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数量:{{item.count}}</p>
                <div class="edit-input" v-if="isEdit">
                    <el-input size="mini" placeholder="请输入内容" v-model="item.purchasePrice" class="el-input">
                        <template slot="prepend">采购价</template>
                    </el-input>
                    <el-input size="mini" placeholder="请输入内容" v-model="item.wayBill" class="el-input">
                        <template slot="prepend">运单号</template>
                    </el-input>
                </div>
                <p v-else>采购价(¥):{{item.purchasePrice}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运单:{{item.wayBill}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;物流:{{item.logIstics}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发货日期:{{item.dataTime}}</p>
                
            </div>
            <div class="goods-item-edit">
                <h4>待签收</h4>
                <div v-if="isEdit">
                    <el-button type="text" class="eidt-btn" @click="pre">保存</el-button>
                    <el-button type="text" class="eidt-btn" @click="isEdit = false">取消</el-button>
                </div>
                <div v-else><el-button type="text" class="eidt-btn" @click="edit">采购编辑</el-button></div>
            </div>
        </div>
    </div>
    <div class="address">
        <div class="address-pred">
            <p>收件人/地址：德国
                <span class="eidtAddress-btn" v-if="isEditAddress"><el-button type="text">保存</el-button><el-button type="text" @click="isEditAddress = false">取消</el-button></span>
                <span class="eidtAddress-btn" v-else><el-button type="text" @click="editAddress">编辑</el-button></span>
                
            </p>          
        </div>
        <div v-if="!isEditAddress">
                <div><span>收件人:Hubert Marsmann</span><span>TEL:08122-9598731</span><span>ZIP:85435</span></div>
                <div><span>州:Bayern</span><span>市:Erding</span><span> 街道:Küchenschmiede Erding e.K.</span><span>地址:Am Gries 4</span></div>
            </div>
        <div class="address-input" v-else>
            <div>
                <el-input size="mini" placeholder="请输入内容" style="width:200px;margin-bottom:10px">
                    <template slot="prepend">联系人</template>
                </el-input>
                <el-input size="mini" placeholder="请输入内容" style="width:200px">
                    <template slot="prepend">电话号</template>
                </el-input>
                <el-input size="mini" placeholder="请输入内容" style="width:200px">
                    <template slot="prepend">邮编</template>
                </el-input>
            </div>
            <div>
                <el-input size="mini" placeholder="请输入内容" style="width:200px;margin-bottom:10px">
                    <template slot="prepend">州</template>
                </el-input>
                <el-input size="mini" placeholder="请输入内容" style="width:200px">
                    <template slot="prepend">市</template>
                </el-input>
                <el-input size="mini" placeholder="请输入内容" style="width:200px">
                    <template slot="prepend">街道门派</template>
                </el-input>
            </div>
            <el-input size="mini" placeholder="请输入内容" style="width:610px">
                <template slot="prepend">地址</template>
            </el-input>
        </div>
    </div>
    <div class="order-amount">
        订单金额:[EUR]47.24  -   Amazon佣金: [EUR]7.08  =   到账: [EUR]40.16
    </div>
    <div class="waybill">
        <div class="waybill-title">
            <span>国际运单</span>
            <el-button type="text" @click="addWaybill">添加</el-button>
        </div>
        <div class="waybill-item">
            <div class="waybill-item-top">
                <span>运单号:YT1812926306500138</span>
                <span>追踪号:</span>
                <span class="waybill-item-top-right">                  
                    <span>未发货</span>
                    <span>未同步</span>
                    <span>2018/05/10</span>
                </span>
            </div>
            <div class="waybill-item-bottom">
                <span>线路:[云途]德国专线挂号[DEZXR]</span>
                <span>发货日期:</span>
                <span class="waybill-item-bottom-right">                    
                    <el-button type="text">作废</el-button>
                    <el-button type="text">打印</el-button>
                    <el-button type="text" @click="addDetail">明细</el-button>
                </span>
            </div>
        </div>
    </div>
    <div class="tab-box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="内部备注" name="first">
                <el-input
                  type="textarea"
                  :rows="3"
                  placeholder="请输入内容"
                  v-model="textarea"
                  class="textarea">
                </el-input>
                <el-select v-model="value" placeholder="请选择" size="mini" class="select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      >
                    </el-option>
                </el-select>
                <el-button type="success" size="mini" class="add-btn">添加</el-button>
            </el-tab-pane>
            <el-tab-pane label="客户邮件" name="second">
                <div class="email-item">无客户邮件</div>
            </el-tab-pane>
            <el-tab-pane label="操作日志" name="third">
                <div class="log-item">
                    <span class="log-item-name">postyuntu:</span>
                    <span>国内物流签收</span>
                    <span class="log-item-time">05/09 11:38</span>
                </div>
                <div class="log-item">
                    <span class="log-item-name">postyuntu:</span>
                    <span>国内物流签收</span>
                    <span class="log-item-time">05/09 11:38</span>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
  </el-dialog>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            input:'',
            total:0,//默认数据总数
            pagesize:7,//每页的数据条数
            currentPage:1,//默认开始页面
            tableData: [{
              id: '0000000001',
              order_num:'000-0000000-0000001',
              pic:'/static/images/lcLU0ZgiTa.png',
              buy_data:'2018-05-08 22:01:53',
              
              operator:'009 高芳芳',
              shop:'德国',
              amazon:'已发货',
              international: '未发货',
              international_order:'YT1812926306500039',
              domestic:'待签收~~',
              domestic_order:'493348945168~~',
              count:'2',
              money:'47.24[EUR]',
              cost:'-',
              profit:'-',
              updata_data:'2018-05-09 18:16:01'
            },{
              id: '47839',
              pic:'/static/images/ntrrLWfLuN.png',
              buy_data:'2018/05/09',
              order_num:'305-1226403-5312348',
              operator:'009 高芳芳',
              shop:'德国',
              amazon:'已发货',
              international: '未发货',
              international_order:'YT1812926306500039',
              domestic:'待签收~~',
              domestic_order:'493348945168~~',
              count:'2',
              money:'47.24[EUR]',
              cost:'-',
              profit:'-',
              updata_data:'2018/05/09 18:16'
            }],
            dialogTableVisible:false,
            isEdit:false,
            isEditAddress:false,
            goodsData:[
                {
                    picUrl:'/static/images/lcLU0ZgiTa.png',
                    name:'GAZHFERY Dame Painter Flat Hut Der Männer Cowboy Bare Hat,Blue1-OneSize',
                    sku:'GFF-BAAFG-721307-03',
                    count:'1',
                    purchasePrice:'18.000',
                    wayBill:'493348945168',
                    logIstics:'minghangkuaidi',
                    dataTime:'2018/05/09 18:29'
                },
                {
                    picUrl:'/static/images/ntrrLWfLuN.png',
                    name:'GAZHFERY Dame Painter Flat Hut Der Männer Cowboy Bare Hat,Blue1-OneSize',
                    sku:'GFF-BAAFG-721307-03',
                    count:'2',
                    purchasePrice:'23.000',
                    wayBill:'493348945168',
                    logIstics:'minghangkuaidi',
                    dataTime:'2018/05/09 18:29'
                }
            ],
            activeName:'first',
            textarea:'',
            options1: [{
              value: '选项1',
              label: 'Jiangu(德国)'
            }, {
              value: '选项2',
              label: 'Jiangu(美国)'
            }],
            options2: [{
              value: '选项1',
              label: '已取消'
            }, {
              value: '选项2',
              label: '所有订单'
            }, {
              value: '选项3',
              label: '未发货'
            }, {
              value: '选项4',
              label: '等待中'
            }, {
              value: '选项5',
              label: '已发货'
            }],
            options3: [{
              value: '选项1',
              label: '已支付'
            }, {
              value: '选项2',
              label: '退款'
            }],
            options4: [{
              value: '选项1',
              label: '未采购'
            }, {
              value: '选项2',
              label: '待发货'
            }, {
              value: '选项3',
              label: '待签收'
            }, {
              value: '选项4',
              label: '已签收'
            }],
            options5: [{
              value: '选项1',
              label: '未发货'
            }, {
              value: '选项2',
              label: '已发货'
            }, {
              value: '选项3',
              label: '已签收'
            }],
            options6: [{
              value: '选项1',
              label: '搁置订单'
            }, {
              value: '选项2',
              label: '问题件'
            }],
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value_time:'',
            innerVisible: false,
            num:'2',
            isAdd:false,
            isDetil:false,
            radio:1
          }
        },
        methods: {
          handleSizeChange:function(size) {
            this.pagesize = size;
          },
          handleCurrentChange:function(currentPage) {
            this.currentPage = currentPage;
          },
          handleClick:function(){

          },
          open:function(){
            this.dialogTableVisible = true;
          },
          edit:function(){
            this.isEdit = true;
          },
          pre:function(){
            this.isEdit = false;
          },
          editAddress:function(){
            this.isEditAddress = true;
          },
          addWaybill:function(){
            this.innerVisible = true;
            this.isAdd = true;
            this.isDetil = false;
          },
          addDetail:function(){
            this.innerVisible = true;
            this.isAdd = false;
            this.isDetil = true;
          }
        }
      }
</script>
<style scoped>
    .clear:after {
        content: "";
        display: block;
        clear: both;
        vertical-align: hidden;
    }
    .select-box{
      margin-top: 20px;
      /*margin-bottom: 150px;*/
      margin-bottom: 20px;
    }

    .search{
        margin-top: 13px;
        margin-bottom: 10px;
    }

    .search-radio{
        /*height:30px;
        width: 680px;
        line-height: 30px;
        padding-left: 15px;
        border:1px solid #ebeef5;
        border-radius: 5px 0 0 5px;
        float: left;*/
    }

    .search-input{
        /*width:200px;
        height:30px;
        float:left;
        border:1px solid #ebeef5;
        margin-left: -1px;
        border-radius: 0 5px 5px 0;
        padding:0 10px;*/
        
    }

    .search-btn{
        margin-left: 20px;
    }

    .search-result{
        /*padding-top: 10px;*/
        /*border-top: 2px solid #61adf8;*/
        /*margin-bottom: 20px;*/
    }

    .search-result-text{
      font-size: 14px;
      color: #606266;
        width:230px;
        padding:5px 0px;
        /*border:1px solid #4a9deb;*/
        /*border-radius: 5px;*/
        float:left;
    }

    .search-result-text span{
        color:#F56C6C;
    }

    .name-wrapper{
        width:60px;
        height: 60px;
    }

    .name-wrapper img{
        width:100%;
        height:100%;
    }

    .hover-img{
        width:300px;
        height:300px;
    }

    .hover-img img{
        width:100%;
        height:100%;
    }

    .speed-of-progress{
        width:100%;
        border:1px solid #666;
        border-radius: 5px;
        padding: 20px 0;
    }

    .goods-box{
        margin-top: 20px;
        width:100%;
        padding-bottom: 10px;
        border-top:1px solid #666;
        border-bottom: 1px solid #666;
    }

    .goods-box .goods-item{
        margin-top: 10px;
    }

    .goods-box .goods-item .goods-item-pic{
        width:80px;
        height:80px;
        border:1px solid #666;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
    .goods-box .goods-item .goods-item-text{
        float:left;
    }
    .goods-box .goods-item .goods-item-edit{
        float:right;
    }

    .el-input{
        width:200px;
    }

    .address{
        margin-top:10px;
        border-bottom: 1px solid #666;
        padding-bottom: 10px;
    }

    .address .eidtAddress-btn{
        float:right;
    }

    .order-amount{
        padding:10px 0;
        border-bottom: 1px solid #666;
    }

    .waybill{
        border-bottom: 1px solid #666;
        padding-bottom: 20px;
    }

    .waybill-title span{
        margin-right: 10px;
    }

    .waybill-item{
        padding:10px;
        border-radius: 5px;
        border-bottom: 1px solid #eee;
    }

    .waybill-item:hover{
        background-color: #eee;
    }

    .waybill-item .waybill-item-top-right{
        float:right;
    }

    .waybill-item .waybill-item-top-right span{
        margin-left: 10px;
    }

    .waybill-item .waybill-item-bottom-right{
        float:right;
    }

    .tab-box{
        margin-top: 10px;
        position:relative;
        border-bottom: 1px solid #666;
        padding-bottom: 20px;
    }

    .tab-box .textarea{
        width:40%;
    }

    .tab-box .select{
        position: absolute;
        left:43%;
    }

    .tab-box .add-btn{
        margin-left: 160px;
    }

    .tab-box .email-item{
        padding:10px 0;
    }

    .tab-box .log-item{
        padding:10px 0;
        border-bottom: 1px solid #eee;
    }

    .tab-box .log-item .log-item-name{
        color:#4cae4c;
    }

    .tab-box .log-item .log-item-time{
        float:right;
    }

    .inner-goods{
        padding:5px 0;
        border-bottom: 1px solid #eee;
    }

    .inner-goods .inner-goods-img{
        display:inline-block;
        width:80px;
        height:80px;
        float:left;
        margin-right: 10px;
    }

    .inner-goods .inner-goods-text{
        float:left;
        line-height: 30px;
    }

    .inner-goods .inner-goods-text p{
        width:500px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .inner-goods .inner-goods-right{
        float:right;
    }

    .inner-goods .inner-goods-right p {
        text-align: center;
        margin-bottom: 5px;
    }

    .inner-input-item{
        padding:10px 30px;
        border-bottom: 1px solid #eee;
    }

    .inner-input-item .inner-input-item-left{
        float:left;
    }

    .inner-input-item .inner-input-item-left span{
        margin-right: 10px;
        font-weight: bold;
    }

    .inner-input-item .inner-input-item-right{
        float:left;
        margin-left: 200px;
    }

    .inner-input-item .inner-input-item-right span{
        margin-right: 10px;
        font-weight: bold;
    }

    .synchronous{
        padding:10px 0;
        border-bottom: 1px solid #eee;
    }
</style>