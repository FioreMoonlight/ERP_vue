<template>
  <div>
    <h1>店铺业绩</h1>
    <div class="line"></div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="明细" name="0"></el-tab-pane>
      <el-tab-pane label="折线图" name="1"></el-tab-pane>
    </el-tabs>
    <div class="demo-input-size"  style="margin-bottom:10px">
      <!-- <el-select v-model="value" placeholder="选择员工">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> -->
      <el-select v-model="value" placeholder="选择店铺" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
        v-model="input6"
        type="date"
        placeholder="选择开始日期"
        size="mini">
      </el-date-picker>
      <el-date-picker
        v-model="input7"
        type="date"
        placeholder="选择结束日期"
        size="mini">
      </el-date-picker>
    </div>
    <div class="demo-input-size" style="margin-bottom:10px">
      <el-row style="margin-bottom:10px" v-show="status">
        <el-col :span="24">
          <span class="left search-result-text">时间筛选：</span>
          <el-checkbox-group v-model="Optioned1" @change="handleCheckedCitiesChange" class="left">
              <el-checkbox v-for="city in Option1" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <!-- <el-row style="margin-bottom:10px" v-show="status">
        <el-col :span="24">
          
        </el-col>
      </el-row> -->
      <el-row style="margin-bottom:10px">
        <el-col :span="24">
          <span class="left search-result-text">派送方式：</span>
          
          <el-checkbox-group v-model="Optioned2" @change="handleCheckedCitiesChange" class="left">
              <el-checkbox v-for="city in Option2" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <!-- <el-row style="margin-bottom:10px">
        <el-col :span="24">
          <span class="left search-result-text">店铺账号：</span>
          
          <el-checkbox-group v-model="Optioned3" @change="handleCheckedCitiesChange" class="left">
              <el-checkbox v-for="city in Option3" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row> -->
    </div>
    <div class="line" v-show="status"></div>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-if="status"
      size="mini"
      >
      <el-table-column
        prop="d1"
        label="订单量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="d2"
        label="订单总金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="d3"
        label="成本">
      </el-table-column>
      <el-table-column
        prop="d4"
        label="退款费用">
      </el-table-column>
      <el-table-column
        prop="d5"
        label="利润">
      </el-table-column>
      <el-table-column
        prop="d6"
        label="销售利润率">
      </el-table-column>
      <el-table-column
        prop="d7"
        label="成本利润率">
      </el-table-column>
    </el-table>
    <!-- <div class="line"></div> -->
    <el-form ref="form" :model="form" label-width="80px" size="mini" style="margin-top:20px">
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
                <el-option label="订单ID" value="1" ></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="运单号" value="3"></el-option>
              </el-select>
            </el-input>
          </el-col>
          <el-col :span="2"  >
            <el-button type="primary">搜索</el-button>
          </el-col>
          
        </el-row>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData2"
      style="width: 100%"
      v-if="status"
      border
      size="mini">
      <el-table-column
        prop="name"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="订单ID"
        width="180">
      </el-table-column>
      <el-table-column label="收入">
        <el-table-column
          prop="province"
          label="订单总价"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="实收费用"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column label="成本">
        <el-table-column
          prop="province"
          label="订单手续费"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="物流费用"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="采购成本"
          width="120">
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="province"
        label="退款费用"
        width="120">
      </el-table-column>

      <el-table-column
        prop="collection"
        label="其他费用">
      </el-table-column>
      <el-table-column label="利润">
        <el-table-column
          prop="province"
          label="利润"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="利润成本率"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="销售利润率"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="claim"
        label="订单号">
      </el-table-column>
    </el-table>
    <div id="chart" ref="chart" style="width: 100% ; height: 500px;margin: 20px 0">
    </div>
    <div class="block" style="text-align: right;padding: 10px">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        style="clear:both;text-align:center"
        v-show="status">
      </el-pagination>
    </div>
  </div>

</template>
<script>
  import echarts from 'echarts';
  const Option1 = ['昨天', '7天内', '30天内'];
  const Option2 = ['FBA', 'FBM'];
  const Option3 = ['店铺1', '店铺2'];
  export default {
    data() {
      return {
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
        checkAll: false,
        Optioned1: ['昨天'],
        Optioned2: ['FBA'],
        Optioned3: ['店铺1'],
        Option1: Option1,
        Option2: Option2,
        Option3: Option3,
        isIndeterminate: true,
        activeName: '0',
        status:true,
        input6: new Date().setTime(new Date().getTime() - 3600 * 1000 * 24),
        input7: '',
        input8: '',
        input9: '',
        currentPage3: 0,
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
        tableData: [{
          d1: '156',
          d2: '200000.00',
          d3: '5684.00',
          d4: '0',
          d5: '156820.00',
          d6: '152649.00',
          d7: '156.00',
        }],
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          collection: '王小虎',
          claim: '王小虎',
          newlybuild: '王小虎',
          total: '王小虎',
        }],
        chartArr:[
          {
            name: '商品添加数目',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '商品销售数目',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };
    },
    methods: {
      handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleClick(tab, event) {
        if(this.activeName === '0')
        {
          this.$nextTick(()=>{
            this.$refs.chart.style.display = 'none';
          });
          this.status = true;
        }else{
          this.$nextTick(()=>{
            this.$refs.chart.style.display = 'block';
          });
          this.status = false;
        }
      },
      handleCurrentChange(data) {
        console.log(data);
      },
      handleSizeChange(data) {
        console.log(data);
      }
    },
    mounted() {
      this.$nextTick(()=>{
        this.$refs.chart.style.display = 'none';
      });
      let myChart = document.getElementById('chart');
      let mainChart = echarts.init(myChart);
      let option = {
        title: {
          text: '销售统计',
          left:'2%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['商品添加数目', '商品销售数目']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 65,
            end: 85
          },
          {
            type: 'inside',
            realtime: true,
            start: 65,
            end: 85
          }
        ],
        series:this.chartArr
      };
      // 使用刚指定的配置项和数据显示图表。
      if (option && typeof option === "object") {
        mainChart.setOption(option, true)
      }
    }
  }
</script>
<style scoped>
    .search-result-text{
        font-size: 14px;
        color: #606266;
        padding: 0;
    }
</style>