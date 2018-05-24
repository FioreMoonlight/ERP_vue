<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>订单列表</h1>
  <div class="line"></div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :default-sort = "{prop: 'cname', order: 'descending'}"
    >
    <el-table-column
      fixed
      prop="brand"
      label="品牌"
      sortable
      width="130"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="产品名称"
      sortable
      width="140"
      >
    </el-table-column>
    <el-table-column
      prop="intro"
      label="简介"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      prop="inl_logistics"
      label="国内物流"
      sortable
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="feg_logistics"
      label="国际物流"
      sortable
      width="300"
      >
    </el-table-column>
    <el-table-column
      prop="logistics_tail"
      label="物流跟踪"
      sortable
      width="110"
      >
    </el-table-column>

    <el-table-column
      prop="buyer_name"
      label="买家名称"
      sortable
      >
    </el-table-column>
    <el-table-column
      prop="buyer_address"
      label="买家地址"
      sortable
      width="150"
      >
    </el-table-column>
    <el-table-column
      prop="buyer_annotation"
      label="买家注释"
      sortable
      width="150"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      prop="state"
      label="订单状态"
      sortable
      width="110"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="125">
      <template slot-scope="scope">
        <!-- <el-button @click="company_edit" type="text" size="small">编辑</el-button> 
        <el-button @click="company_del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
        <el-button type="primary" icon="el-icon-edit" @click="company_edit" size="small"></el-button>
        <el-button type="danger" icon="el-icon-delete" @click="company_del" size="small"></el-button>
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
              brand: '三叶草',
              name:'限量版贝壳头板鞋',
              intro:'很贵重的一批产品',
              inl_logistics:'上海 xxxxx基地出库-前往武汉xxx中心-运送往xxx港口',
              feg_logistics:'美国 xxxxx基地出库-前往洛杉矶xxx中心-运送往xxx店',
              logistics_tail:'物流跟踪我也不知要干什么',
              buyer_name:'老柴',
              buyer_address: '上海杨浦区仁德路102弄15单元302',
              buyer_annotation:'给我弄得好好 不要损坏了货物',
              state:'付款'
            }, {
              brand: '三叶草',
              name:'限量版贝壳头板鞋',
              intro:'很贵重的一批产品',
              inl_logistics:'上海 xxxxx基地出库-前往武汉xxx中心-运送往xxx港口',
              feg_logistics:'美国 xxxxx基地出库-前往洛杉矶xxx中心-运送往xxx店',
              logistics_tail:'物流跟踪我也不知要干什么',
              buyer_name:'老柴',
              buyer_address: '上海杨浦区仁德路102弄15单元302',
              buyer_annotation:'给我弄得好好 不要损坏了货物',
              state:'付款'
            }, {
              brand: '三叶草',
              name:'限量版贝壳头板鞋',
              intro:'很贵重的一批产品',
              inl_logistics:'上海 xxxxx基地出库-前往武汉xxx中心-运送往xxx港口',
              feg_logistics:'美国 xxxxx基地出库-前往洛杉矶xxx中心-运送往xxx店',
              logistics_tail:'物流跟踪我也不知要干什么',
              buyer_name:'老柴',
              buyer_address: '上海杨浦区仁德路102弄15单元302',
              buyer_annotation:'给我弄得好好 不要损坏了货物',
              state:'付款'
            }, {
              brand: '三叶草',
              name:'限量版贝壳头板鞋',
              intro:'很贵重的一批产品',
              inl_logistics:'上海 xxxxx基地出库-前往武汉xxx中心-运送往xxx港口',
              feg_logistics:'美国 xxxxx基地出库-前往洛杉矶xxx中心-运送往xxx店',
              logistics_tail:'物流跟踪我也不知要干什么',
              buyer_name:'老柴',
              buyer_address: '上海杨浦区仁德路102弄15单元302',
              buyer_annotation:'给我弄得好好 不要损坏了货物',
              state:'付款'
            }]
          }
        },
        methods: {
          company_edit() {
            router.push({
              path:'G_order_edit'
            })
          },
          company_del() {
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