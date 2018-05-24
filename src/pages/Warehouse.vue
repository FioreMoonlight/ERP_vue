<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <!-- <div class="title"> -->
    <h1 >出库/入库</h1>
    <!-- <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div> -->

  <div class="line"></div>
  <template>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="总览" name="first">
        <el-table
            :data="tableData1"
            border
            style="width: 100%"
            :default-sort = "{prop: 'right', order: 'descending'}"
            >
            <el-table-column
              prop="name"
              label="产品名"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="num"
              label="产品数量"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="annotation"
              label="注释"
              sortable
              >
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="135">
              <template slot-scope="scope">
                <el-button type="primary" @click="showToggle(scope.row)" v-if="scope.row.flag" size="small">出库</el-button>
                <el-button type="success" @click="showToggle(scope.row)" v-else size="small">入库</el-button>
                <!-- <el-button type="primary"  @click="chuku" size="small">出库</el-button> -->
                <el-button type="danger" icon="el-icon-delete" @click="del" size="small"></el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="出库" name="second">
        <el-table
            :data="tableData2"
            border
            style="width: 100%"
            :default-sort = "{prop: 'right', order: 'descending'}"
            >
            <el-table-column
              prop="name"
              label="产品名"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="num"
              label="产品数量"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="annotation"
              label="注释"
              sortable
              >
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="135">
              <template slot-scope="scope">
                <!-- <el-button @click="chuku" type="text" size="small">出库</el-button> 
                <el-button @click="del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
                <el-button type="primary"  @click="chuku" size="small">出库</el-button>
                <el-button type="danger" icon="el-icon-delete" @click="del" size="small"></el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
      <el-tab-pane label="入库" name="three">
        <el-table
            :data="tableData3"
            border
            style="width: 100%"
            :default-sort = "{prop: 'right', order: 'descending'}"
            >
            <el-table-column
              prop="name"
              label="产品名"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="num"
              label="产品数量"
              sortable
              >
            </el-table-column>
            <el-table-column
              prop="annotation"
              label="注释"
              sortable
              >
            </el-table-column>
            
            <el-table-column
              fixed="right"
              label="操作"
              width="135">
              <template slot-scope="scope">
                <el-button type="primary"  @click="ruku" size="small">入库</el-button>
                <el-button type="danger" icon="el-icon-delete" @click="del" size="small"></el-button>
                <!-- <el-button @click="ruku" type="text" size="small">入库</el-button> 
                <el-button @click="del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
              </template>
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </template>
</div>
</template>

<script>
    import router from "../router";
    export default {
        data() {
          return {
            activeName: 'first',
            tableData1: [{
              name: '三叶草',
              num:100,
              annotation:'很贵重的一批产品',
              flag:true
            },{
              name: '阿迪达斯',
              num:200,
              annotation:'一批鞋子',
              flag:false
            }],
            tableData2: [{
              name: '充气娃娃',
              num:20,
              annotation:'很好用的一批产品',
              flag:false
            }],
            tableData3: [{
              name: '充气娃娃',
              num:20,
              annotation:'很好用的一批产品',
              flag:true
            }]
          }
        },
        methods: {
          chuku(){
            console.log("正在出库");
          },
          ruku(){
            console.log("正在出库");
          },
          del(){
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
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
    .title{
      overflow: hidden;
    }
    .left{
      float: left;
    }
    .right{
      float: right;
    }
</style>