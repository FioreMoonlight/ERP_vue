<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
<div class="content">
  <h1>产品列表</h1>
  <div class="line"></div>
  <template>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="已发布" name="first">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :default-sort = "{prop: 'order', order: 'descending'}"
          >
          
          <el-table-column
            fixed
            prop="name"
            label="商品名"
            sortable
            width="120"
            >
          </el-table-column>
          <el-table-column
            prop="class"
            label="分类"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="brand"
            label="品牌"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="weight"
            label="重量/kg"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="bulk"
            label="体积/m³"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="keyword"
            label="关键字"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="intro"
            label="简介"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="EAN"
            label="商品条码EAN"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="UPC"
            label="商品统一代码UPC"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="SKU"
            label="商品编码SKU"
            sortable
            >
          </el-table-column>
          <el-table-column
            prop="img"
            label="商品图片"
            sortable
            >
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="195">
            <template slot-scope="scope">
              <!-- <el-button @click="product_UD"  size="small" class="UD_btn">上架</el-button> -->
              <el-button type="primary" @click="showToggle(scope.row)" v-if="scope.row.flag" size="small">上架</el-button>
              <el-button type="info" @click="showToggle(scope.row)" v-else size="small">下架</el-button>
              <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="small"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click="product_del" size="small"></el-button>
              
              <!-- <el-button @click="product_edit" type="text" size="small">编辑</el-button> 
              <el-button @click="product_del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="未发布" name="second">
          <el-table
              :data="tableData"
              border
              style="width: 100%"
              :default-sort = "{prop: 'order', order: 'descending'}"
              @selection-change="handleSelectionChange"
              >
              <el-table-column
                fixed
                type="selection"
                width="35">
              </el-table-column>
              <el-table-column
                fixed
                prop="name"
                label="商品名"
                sortable
                width="120"
                >
              </el-table-column>
              <el-table-column
                prop="class"
                label="分类"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="brand"
                label="品牌"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="weight"
                label="重量/kg"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="bulk"
                label="体积/m³"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="keyword"
                label="关键字"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="intro"
                label="简介"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="EAN"
                label="商品条码EAN"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="UPC"
                label="商品统一代码UPC"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="SKU"
                label="商品编码SKU"
                sortable
                >
              </el-table-column>
              <el-table-column
                prop="img"
                label="商品图片"
                sortable
                >
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="125">
                <template slot-scope="scope">
                  <el-button type="primary" icon="el-icon-edit" @click="product_edit" size="small"></el-button>
                  <el-button type="danger" icon="el-icon-delete" @click="product_del" size="small"></el-button>
                  
                  <!-- <el-button @click="product_edit" type="text" size="small">编辑</el-button> 
                  <el-button @click="product_del" type="text" style="color:#F56C6C" size="small">删除</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <el-button type="primary" @click="onSubmit" class="sub_btn">一键发布</el-button>
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
            activeName: 'first',
            tableData: [{
              name: '贝壳头经典款',
              class: '鞋子',
              brand: '阿迪达斯',
              weight: '2.00',
              bulk: '0.13',
              keyword: '经典款',
              intro: '阿迪爆款鞋',
              EAN: '123456789',
              UPC: '234567890',
              SKU: '345678901',
              img: '图片地址',
              flag:true
            }, {
              name: '贝壳头经典款',
              class: '鞋子',
              brand: '阿迪达斯',
              weight: '2.00',
              bulk: '0.13',
              keyword: '经典款',
              intro: '阿迪爆款鞋',
              EAN: '123456789',
              UPC: '234567890',
              SKU: '345678901',
              img: '图片地址',
              flag:false
            }, {
              name: '贝壳头经典款',
              class: '鞋子',
              brand: '阿迪达斯',
              weight: '2.00',
              bulk: '0.13',
              keyword: '经典款',
              intro: '阿迪爆款鞋',
              EAN: '123456789',
              UPC: '234567890',
              SKU: '345678901',
              img: '图片地址',
              flag:true
            }, {
              name: '贝壳头经典款',
              class: '鞋子',
              brand: '阿迪达斯',
              weight: '2.00',
              bulk: '0.13',
              keyword: '经典款',
              intro: '阿迪爆款鞋',
              EAN: '123456789',
              UPC: '234567890',
              SKU: '345678901',
              img: '图片地址',
              flag:false
            }],
            checked: [],
            total:0,//默认数据总数
            pagesize:7,//每页的数据条数
            currentPage:1,//默认开始页面
          }
        },
        methods: {
          created:function(){
            //加载班级的数据
            var url ='http://127.0.0.1:3000/clazz/findAll';
            //向后台获取数据
            var vm = this;
            $.getJSON(url,function(data){
                vm.clazzInfo = data;
                vm.total = data.length;//设置数据总数目！！！
            }); 
          },
          current_change:function(currentPage){
            this.currentPage = currentPage;
          },
          showToggle(data){
            data.flag = !data.flag;
          },
          product_edit(data) {
            router.push({
              path:'Cd_product_edit'
            })
          },
          product_del() {
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
          handleSelectionChange(val) {
            this.checked = val;
            console.log(this.checked)
          },
          onSubmit(){
            console.log("发布了")
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          }
        }
      }
</script>
<style scoped>
  .line{
    margin: 20px 0;
    border-top: 1px solid #dcdfe6;
  }
  .sub_btn{
    margin-top: 20px;
  }
</style>