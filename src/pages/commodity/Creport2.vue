<template>
    <div class="content">
        <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="费用统计" name="first">
              <div style="margin-bottom:5px">
                <el-select v-model="value1" placeholder="选择员工" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                <el-select v-model="value1" placeholder="选择店铺" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                 <el-date-picker v-model="value" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini" style="margin-right:0px"></el-date-picker>
                 <el-button type="primary" size="mini" style="margin-left:20px">查询</el-button>
                 <el-button type="primary" size="mini" style="margin-left:5px">重置</el-button>
              </div>

                <!-- <div class="header" style="margin-bottom:10px">
                    
                </div> -->
                <div class="middle">
                    <div class="middle-top oh">
                        <span class="left search-result-text">店铺账号：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned1" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option1" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="middle-top oh" style="clear:both">
                        <span class="left search-result-text">仓库位置：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned2" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option2" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="line"></div>
                <div class="bottom">
                    <el-table
                      :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                      border
                      style="width: 100%;margin-bottom:20px"
                      :default-sort = "{prop: 'right', order: 'descending'}"
                      fit
                      >
                      <el-table-column
                        prop="name"
                        label="日期"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="username"
                        label="订单量"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="password"
                        label="订单总金额"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        label="退款总费用"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="idcardnum"
                        label="平台总费用"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="status"
                        label="物流总费用" 
                        >
                      </el-table-column>
                      <el-table-column
                        prop="people"
                        label="总计" 
                        >
                      </el-table-column>
                    </el-table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 20, 50, 100]"
                      :page-size="pagesize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalItems"
                      style="clear:both;text-align:center"
                      >
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="物流费用明细" name="second">
              <div style="margin-bottom:5px">
                <el-select v-model="value1" placeholder="选择员工" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                <el-select v-model="value1" placeholder="选择店铺" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                 <el-date-picker v-model="value" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini"></el-date-picker>
                 <el-button type="primary" size="mini" style="margin-left:20px">查询</el-button>
                 <el-button type="primary" size="mini" style="margin-left:5px">重置</el-button>
              </div>
                <!-- <div class="header" style="margin-bottom:10px">
                    
                </div> -->
                <div class="middle">
                    <div class="middle-top">
                        <span class="left search-result-text">店铺账号：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned1" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option1" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="middle-top">
                        <span class="left search-result-text">仓库位置：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned2" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option2" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="line"></div>
                <div class="bottom">
                    <el-table
                      :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                      border
                      style="width: 100%;margin-bottom:20px"
                      :default-sort = "{prop: 'right', order: 'descending'}"
                      fit
                      >
                      <el-table-column
                        prop="name"
                        label="订单ID"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="username"
                        label="物流方式"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="password"
                        label="发货数量"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        label="称重重量"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="idcardnum"
                        label="材积"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="status"
                        label="结算重" 
                        >
                      </el-table-column>
                      <el-table-column
                        prop="people"
                        label="物流费用" 
                        >
                      </el-table-column>
                      <el-table-column
                        prop="people"
                        label="日期" 
                        >
                      </el-table-column>
                    </el-table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 20, 50, 100]"
                      :page-size="pagesize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalItems"
                      style="clear:both;text-align:center">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="平台费用明细" name="third">
              <div style="margin-bottom:5px">
                <el-select v-model="value1" placeholder="选择员工" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                <el-select v-model="value1" placeholder="选择店铺" size="mini">
                   <el-option
                     v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
                   </el-option>
                 </el-select>
                 <el-date-picker v-model="value" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size="mini"></el-date-picker>
                 <el-button type="primary" size="mini" style="margin-left:20px">查询</el-button>
                 <el-button type="primary" size="mini" style="margin-left:5px">重置</el-button>
              </div>
                <!-- <div class="header" style="margin-bottom:10px">
                    
                </div> -->
                <div class="middle">
                    <div class="middle-top">
                        <span class="left search-result-text">店铺账号：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned1" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option1" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="middle-top">
                        <span class="left search-result-text">仓库位置：</span>
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="left" style="margin-right:30px">全选</el-checkbox>
                        <el-checkbox-group v-model="Optioned2" @change="handleCheckedCitiesChange" class="left">
                            <el-checkbox v-for="city in Option2" :label="city" :key="city">{{city}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="line"></div>
                <div class="bottom">
                    <el-table
                      :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                      border
                      style="width: 100%;margin-bottom:20px"
                      :default-sort = "{prop: 'right', order: 'descending'}"
                      fit
                      >
                      <el-table-column
                        prop="name"
                        label="日期"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="username"
                        label="订单ID"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="password"
                        label="订单金额"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="tel"
                        label="退款费用"
                        >
                      </el-table-column>
                      <el-table-column
                        prop="idcardnum"
                        label="平台费用"
                        >
                      </el-table-column>
                      <!-- <el-table-column
                        prop="status"
                        label="物流总费用" 
                        >
                      </el-table-column>
                      <el-table-column
                        prop="people"
                        label="总计" 
                        >
                      </el-table-column> -->
                    </el-table>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[5, 20, 50, 100]"
                      :page-size="pagesize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="totalItems"
                      style="clear:both;text-align:center">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
        <el-button type="primary" class="export-btn" size="mini">导出报表</el-button>
    </div>
</template>

<script>
    import router from "../../router";

    const Option1 = ['全部', '店铺1', '店铺2', '店铺3'];
    const Option2 = ['默认仓库', 'FBA'];
    export default {
        data() {
            return {
                activeName:'first',
                value:'',
                checkAll: false,
                Optioned1: ['全部'],
                Optioned2: ['默认仓库'],
                Option1: Option1,
                Option2: Option2,
                isIndeterminate: true,
                data: [
                    {
                        name:'货款',
                        username:'通过审核',
                        password:'FXE201805120004',
                        tel:'交通银行（深圳）',
                        idcardnum:'1200.00',
                        status:'人民币',
                        people:'KH041006'
                    },
                ],
                totalItems:0,
                currentPage:1,
                pagesize:5,
            }
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            handleSizeChange: function (size) {
                this.pagesize = size;            
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
        },
        mounted() {
            
        }
    }
</script>
<style scoped>
    .search-result-text{
        font-size: 14px;
        color: #606266;
        padding: 0;
    }
    .content{
        position: relative;
    }
    
    .export-btn{
        position:absolute;
        right: 20px;
        top: 0;
    }

    .header{
        /*margin-bottom: 150px;*/
    }

    .middle{
        /*margin-bottom: 50px;*/
    }

    .middle-top{
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
    }
</style>