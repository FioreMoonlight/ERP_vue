import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import echarts from 'echarts';

Vue.use(Router);
Vue.prototype.$echarts = echarts 

//require路由按需加载 
const main = r => require.ensure([], () => r(require('../pages/Main')), 'main');
const login = r => require.ensure([], () => r(require('../pages/Login')), 'login');
const registered = r => require.ensure([], () => r(require('../pages/Zhuce')), 'registered');


//global
const G_user_list = r => require.ensure([], () => r(require('../pages/Global/User_list')), 'G_user_list');
const G_user_edit = r => require.ensure([], () => r(require('../pages/Global/User_edit')), 'G_user_edit');
const G_company_list = r => require.ensure([], () => r(require('../pages/Global/Company_list')), 'G_company_list');
const G_company_edit = r => require.ensure([], () => r(require('../pages/Global/Company_edit')), 'G_company_edit');
const G_company_add = r => require.ensure([], () => r(require('../pages/Global/Company_add')), 'G_company_add');
const G_Rechange_list = r => require.ensure([], () => r(require('../pages/Global/Rechange_list')), 'G_Rechange_list');
const G_order_list = r => require.ensure([], () => r(require('../pages/Global/Order_list')), 'G_order_list');
const G_order_edit = r => require.ensure([], () => r(require('../pages/Global/Order_edit')), 'G_order_edit');
const G_warehouse = r => require.ensure([], () => r(require('../pages/Global/Warehouse')), 'G_warehouse');

//company
const C_right_Amazon = r => require.ensure([], () => r(require('../pages/company/Right_Amazon')), 'C_right_Amazon');
const C_rechange = r => require.ensure([], () => r(require('../pages/company/Rechange')), 'C_rechange');
const C_Finance = r => require.ensure([], () => r(require('../pages/company/Finance')), 'C_Finance');
const C_staff = r => require.ensure([], () => r(require('../pages/company/Staff')), 'C_staff');
const C_Creport = r => require.ensure([], () => r(require('../pages/company/Creport')), 'C_Creport');
const C_Preport = r => require.ensure([], () => r(require('../pages/company/Preport')), 'C_Preport');

//commodity
const Cd_product_list = r => require.ensure([], () => r(require('../pages/commodity/Product_list')), 'Cd_product_list');
const Cd_product_list1 = r => require.ensure([], () => r(require('../pages/commodity/Product_list1')), 'Cd_product_list1');
const Cd_product_list2 = r => require.ensure([], () => r(require('../pages/commodity/Product_list2')), 'Cd_product_list2');
const Cd_product_list3 = r => require.ensure([], () => r(require('../pages/commodity/Product_list3')), 'Cd_product_list3');
const Cd_product_list4 = r => require.ensure([], () => r(require('../pages/commodity/Product_list4')), 'Cd_product_list4');
const Cd_product_list5 = r => require.ensure([], () => r(require('../pages/commodity/Product_list5')), 'Cd_product_list5');
const Cd_product_edit = r => require.ensure([], () => r(require('../pages/commodity/Product_edit')), 'Cd_product_edit');
const Cd_product_add = r => require.ensure([], () => r(require('../pages/commodity/Product_add')), 'Cd_product_add');
const Cd_order_list = r => require.ensure([], () => r(require('../pages/commodity/Order_list')), 'Cd_order_list');
const Cd_order_list2 = r => require.ensure([], () => r(require('../pages/commodity/Order_list2')), 'Cd_order_list2');
const Cd_order_list_boss = r => require.ensure([], () => r(require('../pages/commodity/Order_list_boss')), 'Cd_order_list_boss');
const Cd_order_list2_boss = r => require.ensure([], () => r(require('../pages/commodity/Order_list2_boss')), 'Cd_order_list2_boss');
const Cd_order_edit = r => require.ensure([], () => r(require('../pages/commodity/Order_edit')), 'Cd_order_edit');
const Cd_order_add = r => require.ensure([], () => r(require('../pages/commodity/Order_add')), 'Cd_order_add');
const Cd_Creport = r => require.ensure([], () => r(require('../pages/commodity/Creport')), 'Cd_Creport');
const Cd_Creport2 = r => require.ensure([], () => r(require('../pages/commodity/Creport2')), 'Cd_Creport2');
const Cd_Preport = r => require.ensure([], () => r(require('../pages/commodity/Preport')), 'Cd_Preport');
const Cd_Preport2 = r => require.ensure([], () => r(require('../pages/commodity/Preport2')), 'Cd_Preport2');
const Cd_Preport_boss = r => require.ensure([], () => r(require('../pages/commodity/Preport_boss')), 'Cd_Preport_boss');
const Cd_Preport2_boss = r => require.ensure([], () => r(require('../pages/commodity/Preport2_boss')), 'Cd_Preport2_boss');
const Cd_User_edit = r => require.ensure([], () => r(require('../pages/commodity/User_edit')), 'Cd_User_edit');
const Cd_User_edit2 = r => require.ensure([], () => r(require('../pages/commodity/User_edit2')), 'Cd_User_edit2');
const Cd_User_edit3 = r => require.ensure([], () => r(require('../pages/commodity/User_edit3')), 'Cd_User_edit3');

//admin
const Cd_Logistics = r => require.ensure([], () => r(require('../pages/commodity/Logistics')), 'Cd_Logistics');
const Cd_product_list6 = r => require.ensure([], () => r(require('../pages/commodity/Product_list6')), 'Cd_product_list6');
const Cd_product_list_admin = r => require.ensure([], () => r(require('../pages/commodity/Product_list_admin')), 'Cd_product_list_admin');
const G_user_list1 = r => require.ensure([], () => r(require('../pages/Global/User_list1')), 'G_user_list1');
const G_user_list2 = r => require.ensure([], () => r(require('../pages/Global/User_list2')), 'G_user_list2');
const G_company_list2 = r => require.ensure([], () => r(require('../pages/Global/Company_list2')), 'G_company_list2');
const G_Rechange_list2 = r => require.ensure([], () => r(require('../pages/Global/Rechange_list2')), 'G_Rechange_list2');
const Cd_Preport3 = r => require.ensure([], () => r(require('../pages/commodity/Preport3')), 'Cd_Preport3');

//out
const Warehouse = r => require.ensure([], () => r(require('../pages/Warehouse')), 'Warehouse');
const Company_add = r => require.ensure([], () => r(require('../pages/Company_add')), 'Company_add');
const Message = r => require.ensure([], () => r(require('../pages/Message')), 'Message');

export default new Router({
    routes: [
        {
          path: '/',
          component: login, //登陆
        },
        {
            path: '/registered',
            component: registered, //注册
        },
        {
            path: '/main',
            component: main, //
            children: [
                {
                   path: 'G_user_list', 
                   component: G_user_list, 
                },{
                   path: 'G_user_edit', 
                   component: G_user_edit, 
                },{
                   path: 'G_company_list', 
                   component: G_company_list, 
                },{
                   path: 'G_company_edit', 
                   component: G_company_edit, 
                },{
                   path: 'G_company_add', 
                   component: G_company_add, 
                },{
                   path: 'G_Rechange_list', 
                   component: G_Rechange_list, 
                },{
                   path: 'G_order_list', 
                   component: G_order_list, 
                },{
                   path: 'G_order_edit', 
                   component: G_order_edit, 
                },{
                   path: 'G_warehouse', 
                   component: G_warehouse, 
                },{
                   path: 'C_right_Amazon', 
                   component: C_right_Amazon, 
                },{
                   path: 'C_rechange', 
                   component: C_rechange, 
                },{
                   path: 'C_Finance', 
                   component: C_Finance, 
                },{
                   path: 'C_staff', 
                   component: C_staff, 
                },{
                   path: 'C_Creport', 
                   component: C_Creport, 
                },{
                   path: 'C_Preport', 
                   component: C_Preport, 
                },{
                   path: 'Cd_product_list', 
                   component: Cd_product_list, 
                },{
                   path: 'Cd_product_list1', 
                   component: Cd_product_list1, 
                },{
                   path: 'Cd_product_list2', 
                   component: Cd_product_list2, 
                },{
                   path: 'Cd_product_list3', 
                   component: Cd_product_list3, 
                },{
                   path: 'Cd_product_list4', 
                   component: Cd_product_list4, 
                },{
                   path: 'Cd_product_list5', 
                   component: Cd_product_list5, 
                },{
                   path: 'Cd_product_edit', 
                   component: Cd_product_edit, 
                },{
                   path: 'Cd_product_add', 
                   component: Cd_product_add, 
                },{
                   path: 'Cd_order_list', 
                   component: Cd_order_list, 
                },{
                   path: 'Cd_order_list2', 
                   component: Cd_order_list2, 
                },{
                   path: 'Cd_order_list_boss', 
                   component: Cd_order_list_boss, 
                },{
                   path: 'Cd_order_list2_boss', 
                   component: Cd_order_list2_boss, 
                },{
                   path: 'Cd_order_edit', 
                   component: Cd_order_edit, 
                },{
                   path: 'Cd_order_add', 
                   component: Cd_order_add, 
                },{
                   path: 'Cd_Creport', 
                   component: Cd_Creport, 
                },{
                   path: 'Cd_Creport2', 
                   component: Cd_Creport2, 
                },{
                   path: 'Cd_Preport', 
                   component: Cd_Preport, 
                },{
                   path: 'Cd_Preport2', 
                   component: Cd_Preport2, 
                },{
                   path: 'Cd_Preport_boss', 
                   component: Cd_Preport_boss, 
                },{
                   path: 'Cd_Preport2_boss', 
                   component: Cd_Preport2_boss, 
                },{
                   path: 'Cd_User_edit', 
                   component: Cd_User_edit, 
                },{
                   path: 'Cd_User_edit2', 
                   component: Cd_User_edit2, 
                },{
                   path: 'Cd_User_edit3', 
                   component: Cd_User_edit3, 
                },{
                   path: 'Warehouse', 
                   component: Warehouse, 
                },{
                   path: 'Company_add', 
                   component: Company_add, 
                },{
                   path: 'Message', 
                   component: Message, 
                },{
                   path: 'Cd_Logistics', 
                   component: Cd_Logistics, 
                },{
                   path: 'Cd_product_list6', 
                   component: Cd_product_list6, 
                },{
                   path: 'G_user_list1', 
                   component: G_user_list1, 
                },{
                   path: 'G_user_list2', 
                   component: G_user_list2, 
                },{
                   path: 'G_company_list2', 
                   component: G_company_list2, 
                },{
                   path: 'G_Rechange_list2', 
                   component: G_Rechange_list2, 
                },{
                   path: 'Cd_Preport3', 
                   component: Cd_Preport3, 
                }

            ]
        }
    ]
})
