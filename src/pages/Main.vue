<!--
**************************************
*   名称：加盟商管理盒子
*   作用：加盟商管理框架嵌入
*   作者：耿啸
**************************************
-->
<template>
    <div class="box">
        <el-container>
          <el-header class="header">
              <head-top></head-top>
          </el-header>
          <el-container>
            <el-aside width="220px">
                <!-- <aside-nav class="aside"></aside-nav> -->
                <left-Nav></left-Nav>
            </el-aside>
            <el-main>
                 <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
    </div>
</template>

<script>
    import leftNav from '../components/leftNav';
    import asideNav from '../components/asideNav';
    import headTop from '../components/headTop';
    import router from "../router";

    export default {
        components: {
            leftNav,
            // asideNav,
            headTop
        },
        data() {
            return {

            }
        },
    }
</script>
<style scoped>
    .aside{
        /*width:225px;
        float: left;*/
    }
    .box{
        height: 100%;
    }
    .el-container{
        
        height: 100%;
    }
    .el-aside{
        background-color: #222222;
    }
    .header{
        /*height: 8vh;*/
        background-color: #222222;
    }
</style>