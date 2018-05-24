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
    <h1 class="left">添加产品</h1>
    <a href="javascript:history.go(-1)" >
      <el-button type="text" class="right">返回</el-button>
    </a>
  </div>

  <div class="line"></div>
  <el-form ref="form" :model="form" label-width="130px">
    <el-form-item label="商品名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="分类">
      <el-input v-model="form.class"></el-input>
    </el-form-item>
    <el-form-item label="品牌">
      <el-input v-model="form.brand"></el-input>
    </el-form-item>
    <el-form-item label="重量/kg">
      <el-input v-model="form.weight"></el-input>
    </el-form-item>
    <el-form-item label="体积/m³">
      <el-input v-model="form.bulk"></el-input>
    </el-form-item>
    
    <el-form-item label="关键字">
      <el-input v-model="form.keyword"></el-input>
    </el-form-item>
    <el-form-item label="简介">
      <el-input v-model="form.intro"></el-input>
    </el-form-item>
    <!-- <el-form-item label="商品条码EAN">
      <el-input v-model="form.EAN"></el-input>
    </el-form-item>
    <el-form-item label="商品统一代码UPC">
      <el-input v-model="form.UPC"></el-input>
    </el-form-item> -->
    <el-form-item label="商品编码SKU">
      <el-input v-model="form.SKU"></el-input>
    </el-form-item>

    <el-form-item label="添加变体">
      <el-input v-model="form.variant"></el-input>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="addVariant">添加</el-button>
    </el-form-item>
    <div v-for="( value, key) in variants">
      <el-form-item :label="value.infor">
        <el-tag
          :key="tag"
          v-for="tag in value.dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag,key)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="value.inputVisible"
          v-model="value.inputValue"
          ref="saveTagInput"
          size="small"
          
          @blur="handleInputConfirm(key)"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput(key)">+ New Tag</el-button>
      </el-form-item>
    </div>
    <el-form-item label="商品图片">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="form.dialogVisible">
        <img width="100%" :src="form.dialogImageUrl" alt="">
      </el-dialog>
    </el-form-item>

    <el-form-item label="公司" v-show="ifboos">
      <el-select 
        v-model="value" 
        placeholder="请选择公司"
        v-on:change="change(value)">
        <el-option
            v-for ="item in form.company"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
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
              name: '',
              class: '',
              brand: '',
              weight: '',
              bulk: '',
              keyword: '',
              intro: '',
              EAN: '',
              UPC: '',
              SKU: '',
              dialogImageUrl: '',
              dialogVisible: false,
              company: []
            },
            dynamicTags: [],
            inputVisible: false,
            inputValue: '',
            cid:'',
            staffid:'',
            value: '',
            ifboos:false,
            variants:[]
          }
        },
        mounted(){
          this.getInfor();
        },
        methods: {
          addVariant(){
            if(this.form.variant == "" || this.form.variant == null){
              this.$message.error('变体名不能为空！');
              return
            }else{
              this.variants.push(
                {"infor":this.form.variant,"dynamicTags":[],"inputVisible":false,"inputValue":''}
              );
              this.form.variant = "";
            }
            
          },
          change(val){
            this.cid = val;
          },
          getInfor(){
            var tk = localStorage.getItem("token");
            var uid = localStorage.getItem("uid");

            if(localStorage.getItem("status") == "staff"){

              this.$http.post(this.api.link_list_company_staff_to_user,{
                user_token:tk,
                user_query:"user_id=='"+uid+"'"
              }).then((res)=>{
                // console.log(res.values[0])
                     
                //获取员工用户的对应公司id
                this.cid = res.values[0].company_id;
                //获取员工用户的对应公司的对应员工id
                this.staffid = res.values[0].staff_id;
              })
            }else{
              this.ifboos = true;
              //加载用户公司信息
              this.$http.post(this.api.user_company_list,{
                user_token:tk,
                user_query:"user_id=='"+uid+"'"
              }).then((res)=>{
                // console.log(res);
                //判断用户是否有公司
                if(res.values.length > 0){
                  for(var i = 0;i < res.values.length;i++){
                    this.form.company.push({
                      "value":res.values[i].company_id,
                      "label":res.values[i].name
                    });
                  }
                  this.value = res.values[0].company_id;//下拉框显示公司名字
                  this.cid = res.values[0].company_id;//把当前公司id
                  this.staffid = 1;//老板的员工id都是1?
                }
              })
            }
          },
          handleClose(tag,key) {
           this.variants[key].dynamicTags.splice(this.variants[key].dynamicTags.indexOf(tag), 1);
          },
          showInput(key) {
            // console.log(index, key,value)
           // this.inputVisible = true;
           this.variants[key].inputVisible = true;
           this.$nextTick(_ => {
            // console.log(this)
             // this.$refs.saveTagInput.focus();
             this.$refs.saveTagInput[0].$refs.input.focus();
           });
          },
          handleInputConfirm(key) {
           // let inputValue = this.inputValue;

           // if (inputValue) {
          if(this.variants[key].dynamicTags.indexOf(this.variants[key].inputValue) >= 0){
            this.$message.error('变体 标签重复！');
            return
          }
           this.variants[key].dynamicTags.push(this.variants[key].inputValue);
           // }
           // this.inputVisible = false;
           this.variants[key].inputVisible = false;
           this.variants[key].inputValue = '';
          },
          onSubmit() {
            var tk = localStorage.getItem("token");
            var uid = localStorage.getItem("uid");
            //往公司里添加产品
            this.$http.post('/restful/add/company.'+this.cid+'/product',{
              // user_token:tk,
              user_id:uid,
              company_id:this.cid,
              staff_id:this.staffid,

              name:this.form.name,
              class:this.form.class,
              brand:this.form.brand,
              weight:this.form.weight,
              bulk:this.form.bulk,
              keyword:this.form.keyword,
              intro:this.form.intro,
              SKU:this.form.SKU,
            }).then((res)=>{
              // console.log(res);
              router.push({
                path:'/main/Cd_product_list'
              })
            })
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

    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
</style>