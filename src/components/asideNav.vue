<!-- 
**************************************
*  名称：侧导航组件
*  作用：二级导航，显示\隐藏
*  作者：
**************************************
-->
<template>
    <div class="tac">
        <el-row class="aside">         
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#222222" text-color="#fff" active-text-color="#ffd04b" router>
                <!-- <el-menu-item index="demo">
                    <i class="el-icon-menu"></i>
                    <span slot="title">主界面</span>
                </el-menu-item> -->
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>全局管理</span>
                    </template>
                    <el-menu-item index="G_user_list">用户管理</el-menu-item>
                    <el-menu-item index="G_company_list">公司管理</el-menu-item>
                    <!-- <el-submenu index="2-2">
                        <template slot="title">公司管理</template>
                        <el-menu-item index="G_company_list">公司列表</el-menu-item>
                        <el-menu-item index="G_company_add">添加公司</el-menu-item>
                    </el-submenu> -->
                    <el-menu-item index="">权限管理</el-menu-item>
                    <el-menu-item index="G_Rechange_list">财务管理</el-menu-item>
                    <el-submenu index="2-5">
                        <template slot="title">
                            仓库管理
                        </template>
                        <el-menu-item index="G_warehouse">出库/入库</el-menu-item>
                        <el-menu-item index="G_order_list">订单列表</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-bell"></i>
                        <span>公司管理</span>
                    </template>
                    <el-submenu index="3-1">
                        <template slot="title">公司权限</template>
                        <el-menu-item index="C_right_Amazon">亚马逊授权</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3-2">
                        <template slot="title">
                            公司财务
                        </template>
                        <el-menu-item index="C_rechange">充值</el-menu-item>
                        <el-menu-item index="C_Finance">查看报表</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="C_staff">公司员工</el-menu-item>
                    <el-submenu index="3-4">
                        <template slot="title">
                            公司报表
                        </template>
                        <el-menu-item index="C_Creport">公司业绩报表</el-menu-item>
                        <el-menu-item index="C_Preport">员工工作报表</el-menu-item>
                    </el-submenu>
                </el-submenu>

                <!-- <el-submenu index="4"> -->
                    <!-- <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span>用户管理</span>
                    </template> -->
                    <el-submenu index="4-1">
                        <template slot="title">
                            商品管理
                        </template>
                        <el-menu-item index="Cd_product_list">商品总汇</el-menu-item>
                        <el-menu-item index="Cd_product_add">添加商品</el-menu-item>
                        <el-submenu index="4-1-1">
                            <template slot="title">
                                亚马逊商品
                            </template>
                            <!-- <el-menu-item index="Cd_product_list">中国站点</el-menu-item>
                            <el-menu-item index="Cd_product_add">添加商品</el-menu-item> -->
                            <!-- <el-menu-item index="Cd_product_list"></el-menu-item> -->
                            <el-submenu index="4-1-1-1">
                                <template slot="title">
                                    站点
                                </template>
                                <el-menu-item index="C_Creport">中国站点</el-menu-item>
                                <el-menu-item index="C_Preport">日本站点</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="Cd_product_list">Mexico</el-menu-item>
                            <el-menu-item index="Cd_product_list">新增商品汇总</el-menu-item>
                            <el-menu-item index="Cd_product_list">变动商品汇总</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="Warehouse">仓库管理</el-menu-item>
                    <el-submenu index="4-2">
                        <template slot="title">
                            订单管理
                        </template>
                        <el-menu-item index="Cd_order_list">订单列表</el-menu-item>
                        <el-menu-item index="Cd_order_add">添加订单</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="Message">消息提醒</el-menu-item>
                    <!-- <el-submenu index="4-3">
                        <template slot="title">
                            消息提醒
                        </template>
                        <el-menu-item index="4-3-1">订单提醒</el-menu-item>
                        <el-menu-item index="4-3-2">买家消息提醒</el-menu-item>
                        <el-menu-item index="4-3-3">声音提醒</el-menu-item>
                        <el-menu-item index="4-3-4">短信提醒</el-menu-item>
                    </el-submenu> -->
                    <el-menu-item index="Cd_Preport">业绩报表</el-menu-item>
                    <el-submenu index="4-4">
                        <template slot="title">
                            用户中心
                        </template>
                        <el-submenu index="4-4-1">
                            <template slot="title">账户</template>
                            <el-menu-item index="Cd_User_edit">修改信息</el-menu-item>
                            <el-menu-item index="4-4-1-2">密码修改</el-menu-item>
                            <el-menu-item index="4-4-1-3">用户注销</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4-4-2">
                            <template slot="title">资产管理</template>
                            <el-menu-item index="Company_add">注册公司</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                <!-- </el-submenu> -->
            </el-menu>
           
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>
<style type="text/css">
    /*这里的样式一旦更改，全局都会变*/
    .el-menu{
        border: none !important;
    }
</style>
<style scoped>
    /*这里的样式更改，只有改页面内的样式会变*/
    /*.tac{
        height:92vh;
        background-color: #222222;
    }*/
</style>