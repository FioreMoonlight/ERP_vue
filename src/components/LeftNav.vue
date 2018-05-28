<template>
  <div class="tac">
    <el-row class="aside">
      <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#222222" text-color="#fff" active-text-color="#ffd04b" router>
        <template v-for="(item1, index1) in menuList">
          <template v-if="item1.list1 && item1.list1.length > 0">
            <el-submenu :index="item1.routerName" :default-active="$route.path" unique-opened="true">
              <template slot="title">
                <i :class="item1.icon"></i>
                <span>{{item1.name}}</span>
              </template>
              <template v-for="(item2, index2) in item1.list1">
                <template v-if="item2.list2 && item2.list2.length > 0">
                  <el-submenu :index="item2.routerName" :default-active="$route.path">
                    <template slot="title">{{item2.name}}</template>
                    <el-menu-item :index="item3.routerName" v-for="(item3,index3) in item2.list2" :key="index3">{{item3.name}}</el-menu-item>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index="item2.routerName" :default-active="$route.path">{{item2.name}}</el-menu-item>
                </template>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item1.routerName" >{{item1.name}}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-row>
  </div>
</template>
<script>
  import menuList_staff_u from '@/json/menu_staff_uncompany';
  import menuList_staff from '@/json/menu_staff_company';
  import menuList_boss from '@/json/menu_boss';
  import menuList_boss_u from '@/json/menu_boss_uncompany';
  import menuList_admin from '@/json/menu_admin';

  export default {
    data() {
      return {
        menuList:menuList_boss
      }
    },
    mounted(){
      if(localStorage.getItem("status") == 'boss'){
        
        if(localStorage.getItem("bossc") == 'ok'){
          
          this.menuList = menuList_boss;
        }else{
          this.menuList = menuList_boss_u;
        }
        
      }else if(localStorage.getItem("status") == 'staff'){
        if(localStorage.getItem("staffc") == 'ok'){
          this.menuList = menuList_staff;
        }else{
          this.menuList = menuList_staff_u;
        }
      }else if(localStorage.getItem("status") == 'admin'){
        this.menuList = menuList_admin;
      }
    }
  }
</script>
<style scoped>
  .el-menu{
    border: none !important;
  }
</style>
