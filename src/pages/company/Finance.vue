<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <h1>查看报表</h1>
        <div class="line"></div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司">
              <el-select 
                v-model="value" 
                placeholder="请选择公司" 
                v-on:change="change()">
                <el-option
                    v-for ="item in form.company"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
        </el-form>
        <div class="charts">
          <div id="myChart" :style="{width:'100%',height:'300px'}"></div>
        </div>
    </div>
</template>

<script>
    import router from "../../router";
    import Qs from 'qs';

    export default {
        data() {
            return {
               form: {
                   company: []
               },
               value: '',
               options1:{
                   title: {
                       text: '财务图'
                   },
                   tooltip: {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['充值情况','消费情况','跨境邮费']
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
                           name:'充值情况',
                           type:'line',
                           // stack: '总量',
                           data:["0", "2000", "1000", "4000", "3000", "6000", "4000"]
                       },
                       {
                           name:'消费情况',
                           type:'line',
                           // stack: '总量',
                           data:["0", "1000", "2000", "3000", "3000", "4000", "5000"]
                       },
                       {
                           name:'跨境邮费',
                           type:'line',
                           // stack: '总量',
                           data:["0", "1000", "1000", "4000", "3000", "3000", "2000"]
                       },
                      
                   ]
               },
               options2:{
                   title: {
                       text: '财务图2'
                   },
                   tooltip: {
                       trigger: 'axis'
                   },
                   legend: {
                       data:['充值情况','消费情况','跨境邮费']
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
                           name:'充值情况',
                           type:'line',
                           // stack: '总量',
                           data:["0", "1000", "1000", "4000", "3000", "6000", "4000"]
                       },
                       {
                           name:'消费情况',
                           type:'line',
                           // stack: '总量',
                           data:["0", "2000", "2000", "3000", "3000", "4000", "5000"]
                       },
                       {
                           name:'跨境邮费',
                           type:'line',
                           // stack: '总量',
                           data:["0", "3000", "1000", "4000", "3000", "3000", "2000"]
                       },
                      
                   ]
               },
               myChart:'',
               flag:false
            }
        },
        mounted() {
            this.drawLine(this.options1);
            this.getcompanylist();
        },
        methods: {
            drawLine(data){
                // console.log(2);
                this.myChart = this.$echarts.init(document.getElementById('myChart'));
                this.myChart.setOption(data);
                
            },
            change(){
                // console.log(3);
                // this.flag ? this.drawLine(this.options2) : this.flag = true;
                // console.log(document.getElementById('myChart'));
                this.drawLine(this.options2);
                
                // console.log(document.getElementById('myChart'));
                // this.myChart = this.$echarts.init(document.getElementById('myChart'));
                // this.myChart.setOption(this.options2);
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
            }
        }
    }
</script>
<style scoped>
  .line{
     margin: 20px 0;
     border-top: 1px solid #dcdfe6;
   }
</style>