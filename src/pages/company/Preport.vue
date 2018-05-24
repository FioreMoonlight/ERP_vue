<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <h1>员工工作报表</h1>
        <div class="line"></div>
        <template>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="商品销售情况" name="first">
                <div class="charts">
                  <div id="myChart" :style="{width:'900px',height:'300px'}"></div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="工作情况" name="second">
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
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            
        },
        mounted() {
            let myChart = this.$echarts.init(document.getElementById('myChart'));
            myChart.setOption({
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['商品售出']
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
                        name:'商品售出',
                        type:'line',
                        // stack: '总量',
                        data:["0", "2000", "1000", "4000", "3000", "6000", "4000"]
                    }
                ]
            });

            let myChart2 = this.$echarts.init(document.getElementById('myChart2'));
            myChart2.setOption({
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
            });
            
        }
    }
</script>
<style scoped>
  .line{
     margin: 20px 0;
     border-top: 1px solid #dcdfe6;
   }
</style>