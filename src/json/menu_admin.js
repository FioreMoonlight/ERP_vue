const menuList = [ 
  {
    "routerName": "1",
    "name": "全局管理",
    // "icon": "el-icon-menu",
    "list1": [
      {
        "routerName": "G_company_list",
        "name": "公司管理",
      },
      {
        "routerName": "C_staff",
        "name": "员工管理"
      },
      {
        "routerName": "Cd_product_list_admin",
        "name": "商品管理"
      },
      {
        "routerName": "1-4",
        "name": "订单管理",
        "icon": "",
        "list2": [
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
      // {
      //   "routerName": "1-5",
      //   "name": "业绩管理",
      // },
      {
        "routerName": "G_company_list2",
        "name": "店铺管理",
      },
      // {
      //   "routerName": "G_Rechange_list",
      //   "name": "财务管理"
      // },
      // {
      //   "routerName": "1-1",
      //   "name": "仓库管理",
      //   "list2": [
      //     {
      //       "routerName": "G_warehouse",
      //       "name": "出库/入库"
      //     },
      //     {
      //       "routerName": "xxx2",
      //       "name": "G_order_list"
      //     },
      //   ]
      // }
    ]
  },
  {
    "routerName": "2",
    "name": "财务管理",
    "icon": "",
    "list1": [
      {
        "routerName": "G_Rechange_list",
        "name": "财务审批",
      },
      {
        "routerName": "G_Rechange_list2",
        "name": "审批记录",
      },
      {
        "routerName": "Cd_Creport2",
        "name": "扣款明细"
      },
      {
        "routerName": "Cd_Preport3",
        "name": "推销商店业绩",
      },
    ]
  },
  {
    "routerName": "Cd_Logistics",
    "name": "物流管理"
  },
  
  {
    "routerName": "4",
    "name": "系统运维",
    "icon": "",
    "list1": [
      {
        "routerName": "",
        "name": "UPC/EAN码管理",
      },
      {
        "routerName": "",
        "name": "分类维护",
      },
      {
        "routerName": "",
        "name": "服务器信息",
      }
    ]
  },
  {
    "routerName": "5",
    "name": "用户管理",
    "icon": "",
    "list1": [
      {
        "routerName": "G_user_list1",
        "name": "外部用户",
      },
      {
        "routerName": "G_user_list2",
        "name": "内部用户",
      },
      {
        "routerName": "Cd_product_list6",
        "name": "推销商列表",
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
    "name": "帮助"
  }
];
export default menuList
