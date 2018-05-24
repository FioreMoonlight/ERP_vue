<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>充值列表</h1>
  <div class="line"></div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :default-sort = "{prop: 'right', order: 'descending'}"
    >
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="admin"
      label="账号"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="right"
      label="权限"
      sortable
      >
    </el-table-column>
    
    <el-table-column
      prop="money"
      label="余额/¥"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="rcmoney"
      label="充值金额/¥"
      sortable
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="90"
      >
      <template slot-scope="scope">
        <el-button type="primary" @click="showToggle(scope.row)" v-if="scope.row.flag" size="small">确认</el-button>
        <el-button type="info" @click="showToggle(scope.row)" v-else size="small">完成</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            tableData: [{
              admin: 'admin1',
              name: '老刘',
              right: '超级管理',
              rcmoney: '2000.00',
              money: '1000.00',
              flag:true
            }, {
              admin: 'admin2',
              name: '老柴',
              right: 'vip1',
              rcmoney: '2000.00',
              money: '2000.00',
              flag:false
            }, {
              admin: 'admin3',
              name: '王小虎',
              right: 'vip2',
              rcmoney: '3000.00',
              money: '3000.00',
              flag:true
            }, {
              admin: 'admin4',
              name: '王小虎',
              right: 'vip3',
              rcmoney: '4000.00',
              money: '4000.00',
              flag:false
            }]
          }
        },
        methods: {
          confirm() {
            console.log("充值确认");
          },
          showToggle:function(data){  
            data.flag = !data.flag;
            // console.log(data.flag)
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