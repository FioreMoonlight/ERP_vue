const menuList = [ 
  // {
  //   "routerName": "1",
  //   "name": "全局管理",
  //   "icon": "el-icon-menu",
  //   "list1": [
  //     {
  //       "routerName": "G_user_list",
  //       "name": "用户管理",
  //     },
  //     {
  //       "routerName": "G_company_list",
  //       "name": "公司管理",
  //     },
  //     {
  //       "routerName": "",
  //       "name": "权限管理",
  //     },
  //     {
  //       "routerName": "G_Rechange_list",
  //       "name": "财务管理"
  //     },
  //     {
  //       "routerName": "1-1",
  //       "name": "仓库管理",
  //       "list2": [
  //         {
  //           "routerName": "G_warehouse",
  //           "name": "出库/入库"
  //         },
  //         {
  //           "routerName": "xxx2",
  //           "name": "G_order_list"
  //         },
  //       ]
  //     }
  //   ]
  // },
  // {
  //   "routerName": "2",
  //   "name": "公司管理",
  //   "icon": "el-icon-bell",
  //   "list1": [
  //     {
  //       "routerName": "2-1",
  //       "name": "公司权限",
  //       "list2": [
  //         {
  //           "routerName": "C_right_Amazon",
  //           "name": "亚马逊授权"
  //         }
  //       ]
  //     },
  //     {
  //       "routerName": "2-2",
  //       "name": "公司财务",
  //       "list2": [
  //         {
  //           "routerName": "C_rechange",
  //           "name": "C_Finance"
  //         },
  //         {
  //           "routerName": "",
  //           "name": "查看报表"
  //         }
  //       ]
  //     },
  //     {
  //       "routerName": "C_staff",
  //       "name": "公司员工"
  //     },
  //     {
  //       "routerName": "2-3",
  //       "name": "公司报表",
  //       "list2": [
  //         {
  //           "routerName": "C_Creport",
  //           "name": "公司业绩报表"
  //         },
  //         {
  //           "routerName": "C_Preport",
  //           "name": "员工工作报表"
  //         }
  //       ]
  //     },
  //   ]
  // },
  {
    "routerName": "3",
    "name": "商品管理",
    "icon": "",
    "list1": [
      {
        "routerName": "3-1",
        "name": "我的产品",
        "list2": [
          {
            "routerName": "Cd_product_list",
            "name": "商品总汇",
          },
          {
            "routerName": "Cd_product_list1",
            "name": "待同步产品",
          },
          {
            "routerName": "Cd_product_add",
            "name": "创建新商品"
          },
          {
            "routerName": "Cd_product_list2",
            "name": "产品回收站"
          }
        ]
      },
      {
        "routerName": "3-2",
        "name": "亚马逊商品",
        "list2": [
          {
            "routerName": "Cd_product_list4",
            "name": "在线产品",
          },
          {
            "routerName": "Cd_product_list5",
            "name": "待发布产品",
          },
          // {
          //   "routerName": "Cd_product_list",
          //   "name": "产品跟卖"
          // }
        ]
      },
    ]
  },
  // {
  //   "routerName": "Warehouse",
  //   "name": "仓库管理",
  //   "icon": "",
  //   "list1": []
  // },
  {
    "routerName": "4",
    "name": "订单管理",
    "icon": "",
    "list1": [
      {
        "routerName": "Cd_order_list",
        "name": "FBM订单",
      },
      {
        "routerName": "Cd_order_list2",
        "name": "FBA订单",
      }
    ]
  },
  {
    "routerName": "Message",
    "name": "消息提醒",
    "icon": "",
  },

      {
        "routerName": "7",
        "name": "业绩报表",
        "list1": [
          {
            "routerName": "Cd_Preport",
            "name": "店铺业绩",
          },
          {
            "routerName": "Cd_Preport2",
            "name": "新增产品",
          }
        ],
      },

  {
    "routerName": "6",
    "name": "用户中心",
    "icon": "",
    "list1": [
      {
        "routerName": "Cd_User_edit2",
        "name": "店铺设置",
      },
      {
        "routerName": "Cd_User_edit",
        "name": "个人信息",
      },
      // {
      //   "routerName": "Cd_User_edit3",
      //   "name": "密码修改",
      // },
      // {
      //   "routerName": "",
      //   "name": "用户注销",
      // }

      // {
      //   "routerName": "6-2",
      //   "name": "资产管理",
      //   "list2": [
      //     {
      //       "routerName": "Company_add",
      //       "name": "注册公司",
      //     }
      //   ],
      // }
    ]
  },
];
export default menuList
