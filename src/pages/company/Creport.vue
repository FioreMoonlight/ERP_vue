<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <h1>公司业绩报表</h1>
        <div class="line"></div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司">
              <el-select v-model="value" placeholder="请选择公司" v-on:change="change()">
                <el-option
                    v-for ="item in form.company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <template>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="财务收入支出" name="first">
                <div class="charts">
                  <div id="myChart" :style="{width:'900px',height:'300px'}"></div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="商品" name="second">
                <div class="charts">
                  <div id="myChart2" :style="{width:'900px',height:'300px'}"></div>
                </div>
            </el-tab-pane>
          </el-tabs>
        </template>
        
    </div>
</template>

<script>
    import router from "../../router";
    import Qs from 'qs';

    export default {
        data() {
            return {
                activeName: 'first',
                form: {
                    company: []
                },
                value: '',
                options1:{
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['订单收入','订单支出']
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['0','5','10','15','20','25',"30"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        
                        {
                            name:'订单收入',
                            type:'line',
                            // stack: '总量',
                            data:["0", "2000", "1000", "4000", "3000", "6000", "4000"]
                        },
                        {
                            name:'订单支出',
                            type:'line',
                            // stack: '总量',
                            data:["0", "1000", "2000", "3000", "3000", "4000", "5000"]
                        }
                    ]
                },
                options2:{
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['商品添加数目','商品销售数目']
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '0%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['0','5','10','15','20','25',"30"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        
                        {
                            name:'商品添加数目',
                            type:'line',
                            // stack: '总量',
                            data:["100", "200", "100", "400", "300", "600", "400"]
                        },
                        {
                            name:'商品销售数目',
                            type:'line',
                            // stack: '总量',
                            data:["0", "100", "200", "300", "300", "400", "500"]
                        }
                    ]
                }
            }
        },
        methods: {
            drawLine(data,data2){
                // console.log(2);
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                myChart.setOption(data);
                let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
                myChart2.setOption(data2);
            },
            getcompanylist(){
                var tk = localStorage.getItem("token");
                this.$http({
                    url:'http://39.106.9.139/apis/v1805/user/list_asset_company',
                    method:'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    data:Qs.stringify({token:tk})
                  }).then(
                    res =>{
                      // console.log(res.data.asset);
                      // this.form.company = res.data.asset;
                      // console.log(this.form.company)
                      // console.log(this.form.company.length)
                      // console.log(this.form.company.split(","))
                      for(var i = 0;i < res.data.asset.split(",").length;i++){
                        this.form.company.push({"value": i,"label":res.data.asset.split(",")[i]});
                      }
                      this.form.company.shift();
                      this.value = 1;
                      console.log(this.form.company)

                    }
                  );
            },
            change(){
                this.drawLine(this.options2,this.options1);   
                console.log("公司选择")     
            }
        },
        mounted() {
            this.drawLine(this.options1,this.options2);
            this.getcompanylist();
        }
    }
</script>
<style scoped>
  .line{
     margin: 20px 0;
     border-top: 1px solid #dcdfe6;
   }
</style>