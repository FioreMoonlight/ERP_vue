<template> 
  <div  class="content">
    <div class="title">
      <h1 class="left">添加产品</h1>
      <el-button class="right" type="primary" @click="open2" >一键翻译</el-button>
      <el-button class="right" type="primary" @click="open" style="margin-right:10px">一键定价</el-button>
    </div>
    
    <div class="line"></div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="产品编号">
        <!-- <el-input v-model="" disabled="disabled"></el-input> -->
        {{form.id}}
      </el-form-item>
      <div class="line"></div>
      <el-form-item label="产品图片">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      
      <el-form-item label="产品分类">
        <!-- <el-input v-model="form.class"></el-input> -->

        <el-select v-model="form.selected" placeholder="请选择">
          <el-option
            v-for="item in form.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

      </el-form-item>
      <!-- <el-form-item label="审核状态">
        <el-radio-group v-model="form.radio">
          <el-radio label="1">通过</el-radio>
          <el-radio label="2">待审核</el-radio>
          <el-radio label="3">失效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上下架">
        <el-radio-group v-model="form.radio1">
          <el-radio label="1">上架</el-radio>
          <el-radio label="2">下架</el-radio>
          <el-radio label="3">过滤</el-radio>
          <el-radio label="4">侵权</el-radio>
          <el-radio label="5">屏蔽</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-radio-group v-model="form.radio2">
          <el-radio label="1">重点</el-radio>
          <el-radio label="2">原创</el-radio>
          <el-radio label="3">海外</el-radio>
          <el-radio label="4">抓取</el-radio>
          <el-radio label="5">其它</el-radio>
          <el-radio label="6">产品库</el-radio>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item label="商家信息">
        <el-button type="primary">产品页</el-button>
      </el-form-item>
      <div class="line"></div>
      <el-form-item label="产品信息">
        <el-col :span="8" class="mt10" >
          <el-input placeholder="厂商名称" v-model="form.detail.input1">
            <template slot="prepend">厂商名称</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="品牌名称" v-model="form.detail.input2">
            <template slot="prepend">品牌名称</template>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="厂商编号" v-model="form.detail.input3">
            <template slot="prepend">厂商编号</template>
          </el-input>
        </el-col>
        <el-input placeholder="内部SKU" class="mt20" v-model="form.detail.input4">
          <template slot="prepend">内部SKU</template>
        </el-input>
        <!-- <el-input placeholder="-" v-model="form.detail.input5">
          <template slot="prepend">SKU修正</template>
          <template slot="append">可不填(建议两位英文字母)</template>
        </el-input> -->
        <el-col :span="6" class="mt20">
          <el-input placeholder="产品来源" v-model="form.detail.input6">
            <template slot="prepend">产品来源</template>
          </el-input>
        </el-col>
        <el-col :span="18">
          <el-input placeholder="来源网址" v-model="form.detail.input7">
            <template slot="prepend">来源网址</template>
          </el-input>
        </el-col>
        <el-input placeholder="备注" v-model="form.detail.input7">
            <template slot="prepend">备注</template>
          </el-input>
      </el-form-item>
      
      <div class="line"></div>
      <el-form-item label="产品码">
        <el-input placeholder="请输入内容" v-model="form.input10" class="input-with-select">
          <el-select v-model="form.select1" slot="prepend" placeholder="请选择">
            <el-option label="EAN" value="1">EAN</el-option>
            <el-option label="UPC" value="2">EAN</el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <div class="line"></div>
      <el-form-item label="成本运费">
        <el-row  class="mt10">
          <el-col :span="8" >
            <el-input placeholder="采购价格" v-model="form.price.input1">
              <template slot="prepend">采购价格</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="销售价格" v-model="form.price.input1">
              <template slot="prepend">销售价格</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="美元销售价格" v-model="form.price.input2">
              <template slot="prepend">美元销售价格</template>
              <template slot="append">$</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="mt10">
          
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input2">
              <template slot="prepend">国内运费</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
          <el-col :span="8">
            <el-input placeholder="0.00" v-model="form.price.input2">
              <template slot="prepend">国际运费</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input1">
              <template slot="prepend">包装毛重</template>
              <template slot="append">Kg</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input2">
              <template slot="prepend">长</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input2">
              <template slot="prepend">宽</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input2">
              <template slot="prepend">高</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
        </el-row>
        <!-- <el-input placeholder="产品来源" v-model="form.price.input6">
          <template slot="prepend">折扣:</template>
          <template slot="append">系数</template>
        </el-input> -->
      </el-form-item>
      <div class="line"></div>
      <!-- <el-form-item label="产品简称">
        <el-input placeholder="英文简称" v-model="form.price.input1">
          <template slot="prepend">英文简称</template>
        </el-input>
      </el-form-item> -->

      
      <!-- <div class="line"></div> -->
      <el-form-item label="原始规格">
        <el-radio-group v-model="form.radio3" size="medium">
          <el-radio-button label="1">XS</el-radio-button>
          <el-radio-button label="2">S</el-radio-button>
          <el-radio-button label="3">M</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <div class="line"></div>
      <el-form-item>
        <el-radio-group v-model="form.radio4" size="medium">
          <el-radio-button label="1">米白波点-预定20个工作日发货</el-radio-button>
          <el-radio-button label="2">藏青波点-预定18个工作日发货</el-radio-button>
          <el-radio-button label="3">黑白波点-预定18个工作日发货</el-radio-button>
          <el-radio-button label="4">红白波点-预定20个工作日发货</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <!--弹窗区域-->
    <el-dialog title="成本运费" :visible.sync="dialogTableVisible" width="90%">
      <!--内部弹窗区域-->
      <table class="el-table__header" cellspacing="0" >
            <thead class="has-gutter">
            <tr>
              <th>#</th>
              <th class="is-leaf" v-for="(item,index) in tableData.city">{{item}}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>运费(¥) 小包</td>
              <td v-for="(item,index) in tableData.freight">{{item}}</td>
            </tr>
            <tr>
              <td>售价(¥)</td>
              <td v-for="(item,index) in tableData.price">{{item}}</td>
            </tr>
            <!-- <tr>
              <td>外币(?)</td>
              <td v-for="(item,index) in tableData.currency">{{item}}{{tableData.x[index]}}</td>
            </tr> -->
            <tr>
              <td>优化</td>
              <td v-for="(item,index) in tableData.currency1">{{item}}{{tableData.x[index]}}</td>
            </tr>
            <tr>
              <td>最终</td>
              <td v-for="(item,index) in tableData.Final">
                <el-input placeholder="" v-model="tableData.Final[index]">
                </el-input>
              </td>
            </tr>
            <tr>
              <td>利润</td>
              <td v-for="(item,index) in tableData.profit">{{item}}</td>
            </tr>
            </tbody>
          </table>

          <el-row class="">
            <el-col :span="8" >
              <el-input placeholder="0"  v-model="form.price.input4">
                <template slot="prepend">库存数量</template>
              </el-input>
            </el-col>
            <el-col :span="8" offset="1">
              <el-input placeholder="1"  v-model="form.price.input5">
                <template slot="prepend">预处理时间</template>
                <template slot="append">天(现货填1)</template>
              </el-input>
            </el-col>
          </el-row>
    </el-dialog>
    <el-dialog title="产品内容" :visible.sync="dialogTableVisible2" width="80%">
      <!--内部弹窗区域-->

      <el-form>
        <el-form-item label="">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="英语" name="1"></el-tab-pane>
            <el-tab-pane label="法语" name="2"></el-tab-pane>
            <el-tab-pane label="德语" name="3"></el-tab-pane>
            <el-tab-pane label="意大利语" name="4"></el-tab-pane>
            <el-tab-pane label="西班牙语" name="5"></el-tab-pane>
            <el-tab-pane label="意大利语" name="6"></el-tab-pane>
            <el-tab-pane label="日语" name="7"></el-tab-pane>
          </el-tabs>
          <template>
            <p>这是一个标题：{{activeLabel}}</p>
          </template>
          <el-input type="textarea" placeholder="" v-model="form.price.input1">
          </el-input>
          <template>
            <p>关键字 不超过5行：({{activeLabel}})</p>
          </template>
          <el-input type="textarea" placeholder="" v-model="form.price.input1">
          </el-input>
          <template>
            <p>要点说明 不超过5行：({{activeLabel}})</p>
          </template>
          <el-input type="textarea" placeholder="" v-model="form.price.input1">
          </el-input>
          <template>
            <p>产品描述：({{activeLabel}})</p>
          </template>
          <el-input type="textarea" placeholder="" v-model="form.price.input1">
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        activeLabel:'中文',
        fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        tableData: {
          x: ['[USD]', '[CAD]', '[MXN]', '[GBP]', '[EUR]', '[EUR]', '[EUR]', '[EUR]', '[JPY]'],
          city: ['美国', '加拿大', '墨西哥', '英国', '法国', '德国', '意大利', '西班牙', '日本'],
          freight: ['48 小包', '40\t小包', '132\t小包', '46\t小包', '70.6\t小包', '56\t小包', '69\t小包', '52\t小包', '0'],
          price: ['643.15', '625.59', '827.54', '638.76', '692.76', '660.71', '689.25', '651.93', '537.79'],
          currency: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          currency1: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          Final: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13'],
          profit: ['349.45(54.4%)', '344.93(54.76%)', '448.63(54.34%)', '346.86(54.38%)', '378.16(54.52%)', '362.59(54.65%)', '379.76(54.75%)', '359.05(54.74%)', '289.61(54.18%)']
        },
        form: {
          name: '',
          id:'00001',
          class:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          options: [{
            value: '1',
            label: '鞋子'
          }, {
            value: '2',
            label: '帽子'
          }, {
            value: '3',
            label: '衣服'
          }, {
            value: '4',
            label: '裤子'
          }],
          selected:'',
          resource: '',
          desc: '',
          radio: '1',
          radio1: '1',
          radio2: '1',
          radio3: '1',
          radio4: '1',
          input10:'',
          select1:'',
          detail:{
            input1:'1',
            input2:'1',
            input3:'1',
            input4:'1',
            input5:'1',
            input6:'1',
            input7:'1',
            input8:'1',
          },
          price:{
            input1:'1',
            input2:'1',
            input3:'1',
            input4:'1',
            input5:'1',
            input6:'1',
            input7:'1',
            input8:'1',
          }
        },
        dialogTableVisible:false,
        dialogTableVisible2:false
      }
    },
    methods: {
      open:function(){
        this.dialogTableVisible = true;
      },
      open2:function(){
        this.dialogTableVisible2 = true;
      },
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleClick(tab, event) {
        this.activeLabel = tab.label;
      }
    }
  }
</script>
<style scoped>
  table{
    margin-bottom: 20px;
  }
  td,th{
    text-align: center;
    border:1px solid #ebeef5;
  }
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
  .mt20{
    margin-bottom: 20px;
  }
  .mt10{
    margin-bottom: 10px;
  }
  .mr10{
    margin-right: 10px;
  }
</style>
