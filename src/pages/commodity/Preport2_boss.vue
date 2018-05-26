<template>
  <div>
    <h1>新增产品</h1>
    <div class="line"></div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="明细" name="0"></el-tab-pane>
      <el-tab-pane label="折线图" name="1"></el-tab-pane>
    </el-tabs>
    <div class="demo-input-size" >
      <el-select v-model="value" placeholder="选择员工" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- <el-select v-model="value" placeholder="选择店铺" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select> -->
      <el-date-picker
        v-model="input6"
        type="date"
        placeholder="选择开始日期"
        v-show="status"
        size="mini">
      </el-date-picker>
      <el-date-picker
        v-model="input7"
        type="date"
        placeholder="选择结束日期"
        v-show="status"
        size="mini">
      </el-date-picker>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-top:10px"
      v-if="status"
      size="mini"
    >
      <el-table-column
        prop="name"
        label="操作员"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="collection"
        label="采集上传主体/变体">
      </el-table-column>
      <el-table-column
        prop="claim"
        label="认领上传主体/变体">
      </el-table-column>
      <el-table-column
        prop="newlybuild"
        label="新建上传主体/变体">
      </el-table-column>
      <el-table-column
        prop="total"
        label="合计主体/变体">
      </el-table-column>
    </el-table>
    <div id="chart" ref="chart" style="width: 100% ; height: 500px;margin: 20px 0">
    </div>
    <div class="block" style="text-align: right;padding: 10px" >
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        :total="1000"
        layout="total, sizes, prev, pager, next, jumper"
        style="clear:both;text-align:center"
        v-show="status">
      </el-pagination> 
    </div>
  </div>

</template>
<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
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
