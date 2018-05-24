<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>

<div class="content">
  <div class="title">
    <h1 class="left">编辑订单</h1>
    <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div>

  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="110px">
    <el-form-item label="品牌">
      <el-input v-model="form.brand"></el-input>
    </el-form-item>
    <el-form-item label="产品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="简介">
      <el-input v-model="form.intro"></el-input>
    </el-form-item>
    <el-form-item label="国内物流">
      <el-input v-model="form.inl_logistics"></el-input>
    </el-form-item>
    <el-form-item label="国际物流">
      <el-input v-model="form.feg_logistics"></el-input>
    </el-form-item>
    
    <el-form-item label="物流跟踪">
      <el-input v-model="form.logistics_tail"></el-input>
    </el-form-item>
    <el-form-item label="买家名称">
      <el-input v-model="form.buyer_name"></el-input>
    </el-form-item>
    <el-form-item label="买家地址">
      <el-input v-model="form.buyer_address"></el-input>
    </el-form-item>
    <el-form-item label="买家注释">
      <el-input v-model="form.buyer_annotation"></el-input>
    </el-form-item>
    <el-form-item label="订单状态">
      <el-select v-model="form.state" placeholder="请选择状态">
        <el-option label="创建" value="1"></el-option>
        <el-option label="付款" value="2"></el-option>
        <el-option label="发货" value="3"></el-option>
        <el-option label="取消" value="4"></el-option>
        <el-option label="退货" value="5"></el-option>
        <el-option label="成功" value="6"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
    import router from "../../router";
    export default {
        data() {
          return {
            form: {
              brand: '三叶草',
              name:'限量版贝壳头板鞋',
              intro:'很贵重的一批产品',
              inl_logistics:'上海 xxxxx基地出库-前往武汉xxx中心-运送往xxx港口',
              feg_logistics:'美国 xxxxx基地出库-前往洛杉矶xxx中心-运送往xxx店',
              logistics_tail:'物流跟踪我也不知要干什么',
              buyer_name:'老柴',
              buyer_address: '上海杨浦区仁德路102弄15单元302',
              buyer_annotation:'给我弄得好好 不要损坏了货物',
              state:'成功'
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.form.dialogVisible = true;
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