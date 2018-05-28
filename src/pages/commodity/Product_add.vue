<template>
  <div class="content">
    <template>
      <el-tabs v-model="country" type="card" @tab-click="handleClick">
        <el-tab-pane label="中国" name="1">

          <el-form ref="form" :model="form" label-width="80px">
            <div class="oh">
              <el-button type="primary" class="right ml10">下一个</el-button>
              <el-button type="success" class="right" @click="addProducts">保存至待同步</el-button>
              <el-button type="primary" class="right">一键从英文翻译</el-button>
              <el-button type="primary" class="right">一键从中文翻译</el-button>
            </div>
            <div class="line"></div>
            <el-form-item label="产品编号">
              {{form.id}}
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="产品图片">
              <el-upload
                class="upload-demo"
                action="http://39.106.9.139/upload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :limit="9"
                :file-list="fileList"
                list-type="picture-card"
                :on-success="uploadSuccess">
                <i class="el-icon-plus"></i>
                <!-- <el-button size="small" type="primary">本地图片选取</el-button>
                <el-button size="small" type="primary">图片空间选取</el-button> -->
                <div slot="tip" class="el-upload__tip">
                  支持 jpg/tif 等格式图片，最长边大于500px,不能包含徽标或水印.推荐1000px以上白色背景,图片详细标准请参阅Amazon平台要求
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="标题">
              <el-input  placeholder="标题长度不超过200个字符" maxlength="200" v-model="form.title">
              </el-input>
            </el-form-item>
            <el-form-item label="分类">
              <el-select v-model="form.classification" placeholder="请选择">
                <el-option
                  v-for="item in form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="五大亮点">
              <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.brightSpot[0]" class="mt10"></el-input>
              <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.brightSpot[1]" class="mt10"></el-input>
              <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.brightSpot[2]" class="mt10"></el-input>
              <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.brightSpot[3]" class="mt10"></el-input>
              <el-input placeholder="五大亮点长度现已支持500个字符" maxlength="500" v-model="form.brightSpot[4]"></el-input>
              <span style="color:#F56C6C">5个亮点不需要全部填写,可根据需求填写</span>
            </el-form-item>
            <el-form-item label="关键词">
              <el-input placeholder="请输入关键词" v-model="form.keyWord[0]" class="mt10"></el-input>
              <el-input placeholder="请输入关键词" v-model="form.keyWord[1]" class="mt10"></el-input>
              <el-input placeholder="请输入关键词" v-model="form.keyWord[2]" class="mt10"></el-input>
              <el-input placeholder="请输入关键词" v-model="form.keyWord[3]" class="mt10"></el-input>
              <el-input placeholder="请输入关键词" v-model="form.keyWord[4]"></el-input>
            </el-form-item>
            <el-form-item label="描述">
              <el-input type="textarea" placeholder="请输入描述" v-model="form.describe">
              </el-input>
            </el-form-item>
            <el-form-item label="状态">
              <el-select v-model="form.detail.status" placeholder="请选择">
                <el-option
                  v-for="item in form.options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="产品信息">
              <el-row  class="mt10">
                <el-col :span="11">
                  <el-input placeholder="品牌名称" v-model="form.productInfo.brand">
                    <template slot="prepend">品牌名称</template>
                  </el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                  <el-input placeholder="厂商编号" v-model="form.productInfo.manufacturer">
                    <template slot="prepend">厂商名称</template>
                  </el-input>
                </el-col>
              </el-row>
     
              <el-row  class="mt10">
                <el-col :span="11">
                  <el-input placeholder="内部SKU" v-model="form.productInfo.fatherSku">
                    <template slot="prepend">父SKU</template>
                  </el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                  <el-input placeholder="请输入内容" v-model="form.productInfo.ean" class="input-with-select" >
                    <el-select v-model="form.select1" slot="prepend" placeholder="请选择" style="width:120px">
                      <el-option label="EAN" value="1" ></el-option>
                      <el-option label="UPC" value="2"></el-option>
                    </el-select>
                  </el-input>
                </el-col>
              </el-row>
              
              <el-row  class="mt10">
                <el-col :span="20">
                  <el-input placeholder="来源网址" v-model="form.productInfo.sourceWebsite">
                    <template slot="prepend">来源网址</template>
                  </el-input>
                </el-col>
                <el-col :span="4" >
                  <!-- <el-input placeholder="产品来源" v-model="form.infor.input6">
                    <template slot="prepend">产品来源</template>
                  </el-input> -->
                  <el-button type="primary">访问连接</el-button>
                </el-col>
              </el-row>
              
              <el-row  class="mt10">
                <el-input placeholder="备注" v-model="form.productInfo.remarks">
                  <template slot="prepend">备注</template>
                </el-input>
              </el-row>

              <el-row class="">
                <el-col :span="11" >
                  <el-input placeholder="0"  v-model="form.productInfo.stock">
                    <template slot="prepend">库存数量</template>
                  </el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                  <el-input placeholder="1"  v-model="form.productInfo.preprocessing">
                    <template slot="prepend">预处理时间</template>
                    <template slot="append">天(现货填1)</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="产品定价">
              <el-button type="primary" size="small" @click="open">一键定价</el-button>
            </el-form-item>
            <el-form-item label="审核状态">
              <el-radio-group v-model="form.examine">
                <el-radio label="1" border>通过</el-radio>
                <el-radio label="2" border>待审核</el-radio>
                <el-radio label="3" border>失效</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="上下架">
              <el-radio-group v-model="form.shelf">
                <el-radio label="1" border>上架</el-radio>
                <el-radio label="2" border>下架</el-radio>
                <el-radio label="3" border>过滤</el-radio>
                <el-radio label="4" border>侵权</el-radio>
                <el-radio label="5" border>屏蔽</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="产品类型">
              <el-radio-group v-model="form.projectType">
                <el-radio label="1" border>重点</el-radio>
                <el-radio label="2" border>原创</el-radio>
                <el-radio label="3" border>海外</el-radio>
                <el-radio label="4" border>抓取</el-radio>
                <el-radio label="5" border>其它</el-radio>
                <el-radio label="6" border>产品库</el-radio>
              </el-radio-group>
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="参考价格">
              229.99
            </el-form-item>
            <el-form-item label="尺码">
              <el-radio-group v-model="form.size" size="medium">
                <el-radio-button label="1">XS</el-radio-button>
                <el-radio-button label="2">S</el-radio-button>
                <el-radio-button label="3">M</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="颜色分类">
              <el-radio-group v-model="form.colour" size="medium">
                <el-radio-button label="1">米白波点-预定20个工作日发货</el-radio-button>
                <el-radio-button label="2">藏青波点-预定18个工作日发货</el-radio-button>
                <el-radio-button label="3">黑白波点-预定18个工作日发货</el-radio-button>
                <el-radio-button label="4">红白波点-预定20个工作日发货</el-radio-button>
              </el-radio-group> 
            </el-form-item>
            <div class="line"></div>
            <el-form-item label="变体">
              
              <div>
                <el-button @click="dialogVariantVisible = true" style="margin-bottom:20px">添加变体</el-button>
              </div>
              
              <div class="mt20">
                <template v-for="(tag,index) in variantBtnList">
                  <el-button @click="changeDataList(index)">
                    {{tag}}
                  </el-button>
                  <el-tag
                    closable
                    :key="tag"
                    @close = "closeTag(index)"
                    class="mr10"
                  >
                    {{tag}}

                  </el-tag>
                </template>
              </div>
              
              <el-table
                ref="singleTable"
                :data="tableData1"
                highlight-current-row
                border
                style="width: 100%"
                @selection-change="handleSelectionChange">
                序号
                <el-table-column
                  type="selection"
                  width="50">
                </el-table-column>
                <el-table-column
                  property="variant"
                  label="变体标识"
                  width="120">
                </el-table-column>
                <el-table-column
                  property="priceIncrease"
                  label="加价/¥"
                  width="120">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.priceIncrease"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  property="stock"
                  label="库存">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.stock"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  property="upc"
                  label="UPC/EAN">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.upc"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  property="sonSku"
                  label="子SKU">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.sonSku"></el-input>
                  </template>
                </el-table-column>
                <el-table-column
                  label="选择图片">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="selectImg(scope.$index,dialogFormVisible = true)">选择图片</el-button>
                  </template>
                </el-table-column>
                <el-table-column
                  label="已选图片">
                  <template slot-scope="scope">
                    <ul class="img-list">
                      <li v-for="(item,index) in scope.row.imgList">
                        <img :src="item.imgSrc" alt="">
                      </li>
                    </ul>
                  </template>
                </el-table-column>
                <el-table-column label="标题/关键词/五大亮点">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="variantEdit(scope.row,scope.$index)">编辑</el-button>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="delRow(scope.$index)">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
            <div class="line"></div>
            
            <div class="oh">
              <el-button type="primary" class="right ml10">下一个</el-button>
              <el-button type="success" class="right" @click="addProducts">保存至待同步</el-button>
              <el-button type="primary" class="right">一键从英文翻译</el-button>
              <el-button type="primary" class="right">一键从中文翻译</el-button>
            </div>
            <div style="height:30px"></div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="美国" name="2">
        </el-tab-pane>
        <el-tab-pane label="加拿大" name="3">
        </el-tab-pane>
        <el-tab-pane label="墨西哥" name="4">墨西哥</el-tab-pane>
        <el-tab-pane label="英国" name="5">英国</el-tab-pane>
        <el-tab-pane label="法国" name="6">法国</el-tab-pane>
        <el-tab-pane label="德国" name="7">德国</el-tab-pane>
        <el-tab-pane label="意大利" name="8">意大利</el-tab-pane>
        <el-tab-pane label="西班牙" name="9">西班牙</el-tab-pane>
        <el-tab-pane label="日本" name="10">日本</el-tab-pane>
        <el-tab-pane label="澳洲" name="11">澳洲</el-tab-pane>
      </el-tabs>
    </template>
    


    <!--弹窗区域-->
    <el-dialog title="" :visible.sync="dialogTableVisible" width="90%" >
      <!--内部弹窗区域-->
      <div style="overflow-x:scroll">
        <el-row  class="mt10">
          <el-col :span="8" >
            <el-input placeholder="采购单价" v-model="form.price.input1">
              <template slot="prepend">采购单价</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="产品重量" v-model="form.price.input2">
              <template slot="prepend">产品重量</template>
              <template slot="append">Kg</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input3">
              <template slot="prepend">国内运费</template>
              <template slot="append">¥</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row class="mt10">
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input4">
              <template slot="prepend">长</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input5">
              <template slot="prepend">宽</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
          <el-col :span="8" >
            <el-input placeholder="0.00" v-model="form.price.input6">
              <template slot="prepend">高</template>
              <template slot="append">cm</template>
            </el-input>
          </el-col>
        </el-row>
        
        <table class="el-table__header" border="0" cellpadding="3" cellspacing="0"  >
              <thead class="has-gutter">
              <tr>
                <th></th>
                <th class="is-leaf" v-for="(item,index) in tableData.city">{{item}}</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>运费/¥</td>
                <td v-for="(item,index) in tableData.freight">{{item}}</td>
              </tr>
              <tr>
                <td>成本价/¥</td>
                <td v-for="(item,index) in tableData.price">{{item}}</td>
              </tr>
              <tr>
                <td>利润百分比设定/%</td>
                <td v-for="(item,index) in tableData.Final">
                  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="0" :max="100"></el-input-number>
                </td>
              </tr>
              <tr>
                <td>结果价格/¥</td>
                <td v-for="(item,index) in tableData.currency1">{{item}}{{tableData.x[index]}}</td>
              </tr>
              <tr>
                <td>价格优化(当地价)</td>
                <td v-for="(item,index) in tableData.currency1">{{item}}{{tableData.x[index]}}</td>
              </tr>
              <tr>
                <td>最终定价(当地价)</td>
                <td v-for="(item,index) in tableData.Final">
                  <el-input placeholder="" v-model="tableData.Final[index]">
                  </el-input>
                </td>
              </tr>
              <tr>
                <td>最终利润/¥</td>
                <td v-for="(item,index) in tableData.profit">{{item}}</td>
              </tr>
              <tr>
                <td>利润百分比/%</td>
                <td v-for="(item,index) in tableData.profit">{{item}}</td>
              </tr>
              </tbody>
            </table>
      </div>
    </el-dialog>
    <el-dialog title="选择图片" :visible.sync="dialogFormVisible">
      <ul class="select-img">
        <li v-for="(item,index) in goodsImgList" @click="changeSelectImg(item,index)">
          <div class="img-mask" v-if="item.status"></div>
          <img :src="item.imgSrc" alt="">
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectImg(dialogFormVisible = false)">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="变体设置" :visible.sync="dialogVariantVisible">
      <h3>变体名称:</h3>
      <div>
        <el-select v-model="variantSelectOption" placeholder="请选择活动区域" @change="getVariantSelect()">

          <el-option :label="item.label+(item.name)" :key="item.name" :value="item.value" v-for="(item,index) in variantOptionList">

          </el-option>
        </el-select>
      </div>
      <h3>变体值:(多个值用逗号隔开如:red,white,black)</h3>
      <div>
        <el-input type="texteara" v-model="variantText">

        </el-input>
      </div>
      <div>
        <span>
          推荐
        </span>
        <span style="padding: 0 3px;cursor: pointer" v-for="(item,index) in variantList[variantSelectOption].recommend"
              v-text="item.name" @click="putText(item)">
        </span>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVariantVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectVariant(dialogVariantVisible = false)">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="标题/关键词/五大亮点" :visible.sync="dialogTableVisible4" width="60%">
      <el-form>
        <el-form-item label="标题">
          <el-input  placeholder="标题长度不超过200个字符" v-model="form.variantTitle">
          </el-input>
        </el-form-item>
        <el-form-item label="五大亮点">
          <el-input placeholder="五大亮点长度现已支持500个字符" v-model="form.variantBrightSpot[0]" class="mt10"></el-input>
          <el-input placeholder="五大亮点长度现已支持500个字符" v-model="form.variantBrightSpot[1]" class="mt10"></el-input>
          <el-input placeholder="五大亮点长度现已支持500个字符" v-model="form.variantBrightSpot[2]" class="mt10"></el-input>
          <el-input placeholder="五大亮点长度现已支持500个字符" v-model="form.variantBrightSpot[3]" class="mt10"></el-input>
          <el-input placeholder="五大亮点长度现已支持500个字符" v-model="form.variantBrightSpot[4]"></el-input>
          <span style="color:#F56C6C">五大亮点至少填写一条数据,第一条为必填</span>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input placeholder="请输入标题" v-model="form.variantKeyWord[0]" class="mt10"></el-input>
          <el-input placeholder="请输入标题" v-model="form.variantKeyWord[1]" class="mt10"></el-input>
          <el-input placeholder="请输入标题" v-model="form.variantKeyWord[2]" class="mt10"></el-input>
          <el-input placeholder="请输入标题" v-model="form.variantKeyWord[3]" class="mt10"></el-input>
          <el-input placeholder="请输入标题" v-model="form.variantKeyWord[4]"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible4 = false">取 消</el-button>
        <el-button type="primary" @click="saveSelectVariant(dialogTableVisible4 = false)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  // import router from "../router";

  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        country:'1',
        num8:'1',
        variantOptionList: [
          {
            label:'Color',
            name:'颜色',
            value:'0',
          },
          {
            label:'SizeName',
            value:'1',
            name:'尺寸'
          },
          {
            label:'ItemPackageQuantity',
            value:'2',
            name:'容量'
          },
          {
            label:'Material',
            value:'3',
            name:'材质'
          }
        ],
        variantText: '',
        variantSelectOption: 0,
        variantBtnList: [],
        variantList: [
          {
            recommend: [
              {
                name: '米色',
                english: 'Beige'
              },
              {
                name: '黑色',
                english: 'Black'
              },
              {
                name: '蓝色',
                english: 'Blue'
              },
              {
                name: '青铜',
                english: 'Bronze'
              }
              ,
              {
                name: '棕色',
                english: 'Brown'
              }
              ,
              {
                name: '明确',
                english: 'Clear'
              }
              ,
              {
                name: '铜',
                english: 'Copper'
              }
              ,
              {
                name: '奶油',
                english: 'Cream'
              },
              {
                name: '金',
                english: 'Gold'
              },
              {
                name: '绿色',
                english: 'Green'
              },
              {
                name: '灰色',
                english: 'Grey'
              },
              {
                name: '金属',
                english: 'Metallic'
              },
              {
                name: '多色',
                english: 'Multi-colored'
              },
              {
                name: '橙子',
                english: 'Pink'
              },
              {
                name: '粉',
                english: 'Black'
              },
              {
                name: '黑色',
                english: 'Black'
              },
              {
                name: '黑色',
                english: 'Black'
              },
              {
                name: '黑色',
                english: 'Black'
              },
              {
                name: '黑色',
                english: 'Black'
              },
              {
                name: '单色',
                english: 'OneColor'
              },
              {
                name: 'A - C',
                english: 'A,B,C'
              },
              {
                name: 'A - L',
                english: 'A,B,C,D,E,'
              },
              {
                name: 'A - L',
                english: 'A,B,C,D,E,F,G,H,I,J,K,L'
              },
            ]
          },
          {
            recommend: [
              {
                name: 'OneSize',
                english: 'OneSize'
              },
              {
                name: 'XS',
                english: 'XS'
              },
              {
                name: 'S',
                english: 'S'
              },
              {
                name: 'X',
                english: 'X'
              }
              ,
              {
                name: 'XL',
                english: 'XL'
              }
              ,
              {
                name: 'XXL',
                english: 'XXL'
              }
              ,
              {
                name: 'XXXL',
                english: 'XXXL'
              }
              ,
              {
                name: 'XXXXL',
                english: 'XXXXL'
              },
              {
                name: 'XXXXXL',
                english: 'XXXXXL'
              }
            ]
          },
          {
            recommend: []
          },
          {
            recommend: []
          }
        ],
        variantId: '0',
        variantTagId:'0',
        activeName: '1',
        activeLabel: '',
        dialogFormVisible: false,
        dialogVariantVisible: false,
        fileList: [],
        tableData: {
          x: ['[CNY]', '[USD]', '[CAD]', '[MXN]', '[GBP]', '[EUR]', '[EUR]', '[EUR]', '[EUR]','[JPY]','[AUD]'],
          city: ['中国', '美国', '加拿大', '墨西哥', '英国', '法国', '德国', '意大利', '西班牙','日本','澳洲'],
          freight: ['48 小包', '40\t小包', '132\t小包', '46\t小包', '70.6\t小包', '56\t小包', '69\t小包', '52\t小包', '0','69\t小包', '52\t小包'],
          price: ['643.15', '625.59', '827.54', '638.76', '692.76', '660.71', '689.25', '651.93', '537.79','651.93', '537.79'],
          currency: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13','86.45', '9266.13'],
          currency1: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13','86.45', '9266.13'],
          Final: ['101.11', '126.12', '2546.92', '74.1', '91.86', '87.62', '91.4', '86.45', '9266.13','86.45', '9266.13'],
          profit: ['349.45(54.4%)', '344.93(54.76%)', '448.63(54.34%)', '346.86(54.38%)', '378.16(54.52%)', '362.59(54.65%)', '379.76(54.75%)', '359.05(54.74%)', '289.61(54.18%)','359.05(54.74%)', '289.61(54.18%)']
        },
        goodsImgList: [
          {
            imgSrc: 'http://pic.58pic.com/58pic/15/69/99/55958PICpUx_1024.jpg',
            id: '1',
            status: false,
          },
          {
            imgSrc: 'http://img.zcool.cn/community/018299554245910000019ae998f74d.jpg',
            id: '2',
            status: false,

          },
          {
            imgSrc: 'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
            id: '3',
            status: false,
          },
        ],
        variantArr: [
        ],
        tableData1:[],
        form: {
          id:'0000001',
          productPicUrl:[], //商品图片路径
          title:'', //标题
          classification:'', //分类
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
          brightSpot:[], //五大亮点
          keyWord:[],  //关键词
          describe:'', //描述
          status:'',  //状态
          productInfo:{
            brand:'',//品牌名称
            manufacturer:'',//厂商名称
            fatherSku:'',//父SKU
            ean:'',//EAN
            sourceWebsite:'',//来源网址
            remarks:'',//备注
            stock:'',//库存
            preprocessing:'',//预处理         
          },
          examine:'', //审核状态
          shelf:'', //上下架
          projectType:'', //产品类型
          size:'', //产品尺码
          colour:'', //颜色
          variant:[], //变体数据
          variantTitle:'', //变体title
          variantBrightSpot:[], //变体亮点
          variantKeyWord:[], //变体关键词
          options2: [{
            value: '1',
            label: 'New'
          }, {
            value: '2',
            label: 'UsedLikeNew'
          }, {
            value: '3',
            label: 'UsedVeryGood'
          }, {
            value: '4',
            label: 'UsedGood'
          }, {
            value: '5',
            label: 'UsedAcceptable'
          }, {
            value: '6',
            label: 'CollectibleLikeNew'
          }, {
            value: '7',
            label: 'CollectibleVeryGood'
          }, {
            value: '8',
            label: 'CollectibleGood'
          }, {
            value: '9',
            label: 'CollectibleAcceptable'
          }, {
            value: '10',
            label: 'Refurbished'
          }, {
            value: '11',
            label: 'Club'
          }],
          select1:'1',
          radio: '1',
          radio1: '1',
          radio2: '1',
          radio3: '1',
          radio4: '1',
          detail: {
            inf1: '',
            inf2: '',
            inf3: '',
            inf4: '',
            inf5: '',
            inf6: ''
          },
          infor: {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '1',
          },
          price: {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
          }
        },
        dialogTableVisible:false,
        dialogTableVisible2:false,
        dialogTableVisible3:false,
        dialogTableVisible4:false
      }
    },
    methods: {
      open:function(){
        this.dialogTableVisible = true;
      },
      open2:function(){
        this.dialogTableVisible2 = true;
      },
      open3:function(){
        this.dialogTableVisible3 = true;
      },
      variantEdit:function(row,index){
        this.form.variantTitle = "";
        this.form.variantBrightSpot = [];
        this.form.variantKeyWord = [];
        this.dialogTableVisible4 = true;
        row.variantTitle = this.form.variantTitle;
        row.variantBrightSpot = this.form.variantBrightSpot;
        row.variantKeyWord = this.form.variantKeyWord;
      },
      handleChange(value) {
        console.log(value);
      },
      selectImg(id) {
        this.variantId = id
      },
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleClick(tab, event) {
        this.activeLabel = tab.label;
      },
      changeSelectImg(item, index) {
        this.goodsImgList[index].status = !this.goodsImgList[index].status;
      },
      getVariantSelect() {
        this.variantText = ''
      },
      saveSelectImg() {
        let id = this.variantId;
        this.tableData1[id].imgList = [];
        this.goodsImgList.map((item) => {
          if (item.status) {
            this.tableData1[id].imgList.push({imgSrc: item.imgSrc});
            item.status = false;
          }
          else {

          }
        })
      },
      delRow(index) {
        this.tableData1.splice(index, 1);
      },
      putText(item) {
        this.variantText += item.english + ','
      },
      saveSelectVariant() {
        this.variantTagId = this.variantId;
        if(this.variantBtnList.indexOf(this.variantOptionList[this.variantSelectOption].name)>-1)
        {
          return false;
        }else{
          this.variantBtnList.push(this.variantOptionList[this.variantSelectOption].name);
          let arr = this.variantText.split(',');
          let newArr = arr.slice(0, arr.length - 1);
          let dataArr = [];
          newArr.map((item) => {
            dataArr.push({
              variant: item,
              sku: '',
              stock: '',
              upc: '',
              selectPicture: '',
              selectedPictures: '',
              imgList: []
            });
            return item;
          });
          this.variantArr.push({data:dataArr});
          this.tableData1 = this.variantArr[this.variantBtnList.length-1].data;
        }
      },
      closeTag(index){
        alert(index);
        console.log(this.variantArr);
        this.variantArr.splice(index,1);
        this.variantBtnList.splice(index,1);
        if(this.variantArr<=0)
        {
          this.tableData1 = [];
        }else{
          this.tableData1 = this.variantArr[this.variantBtnList.length-1].data;
        }
      },
      changeDataList(index){
        this.dialogVariantVisible = true;
        this.variantSelectOption = index;
        this.variantTagId = index;
        this.tableData1 = this.variantArr[index].data
      },
      //添加方法
      addProducts(){
        let params = {
            productPicUrl:JSON.stringify(this.form.productPicUrl),
            title:JSON.stringify(this.form.title),
            classification :JSON.stringify(this.form.classification),
            brightSpot:JSON.stringify(this.form.brightSpot),
            keyWord:JSON.stringify(this.form.keyWord),
            status:JSON.stringify(this.form.status),
            productInfo:JSON.stringify(this.form.productInfo),
            examine:JSON.stringify(this.form.examine),
            shelf:JSON.stringify(this.form.shelf),
            projectType:JSON.stringify(this.form.projectType),
            size:JSON.stringify(this.form.size),
            colour:JSON.stringify(this.form.colour),
            variant:JSON.stringify(this.form.variant)
        }
        this.$http.post(`/restful/add/company_company_${localStorage.getItem("companyId")}/product`,
            params
        ).then(res => {
            console.log(res);
        });

      },
      //切换变体表格
      handleSelectionChange(val){
        this.form.variant = val;
      },
      //上传成功钩子函数
      uploadSuccess(response){
        this.form.productPicUrl.push(response);
      }
    },
    mounted(){
    }
  }
</script>
<style scoped >
  table{
    margin-bottom: 20px;
  }
  td,th{
    text-align: center;
    width:100px;
    border:1px solid #ebeef5;
  }
  .select-img {
    overflow: hidden;
  }
  .select-img li {
    float: left;
    height: 200px;
    position: relative;
    margin: 3px;
  }
  .select-img li  .img-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 100;
    background: rgba(0, 0, 0, 0.3);
  }
  .select-img li img {
      height: 100%;
    }

  .img-list {
    overflow: hidden;
  }

  .img-list li {
      float: left;
      height: 50px;
      position: relative;
      margin: 3px;
    }
  .img-list li img {
    height: 100%;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
