const menuList = [
  {
    "routerName": "3",
    "name": "商品管理",
    "icon": "",
    "list1": [
      {
        "routerName": "Cd_product_list",
        "name": "商品总汇"
      },
      {
        "routerName": "Cd_product_add",
        "name": "添加商品"
      },
      {
        "routerName": "3-1",
        "name": "亚马逊商品",
        "list2": [
          {
            "routerName": "C_Creport",
            "name": "中国站点",
          },
          {
            "routerName": "C_Preport",
            "name": "日本站点",
          },
          {
            "routerName": "Cd_product_list",
            "name": "Mexico"
          },
          {
            "routerName": "Cd_product_list",
            "name": "新增商品汇总"
          },
          {
            "routerName": "Cd_product_list",
            "name": "变动商品汇总"
          }
        ]
      },
    ]
  },
  {
    "routerName": "Warehouse",
    "name": "仓库管理",
    "icon": "",
    "list1": []
  },
  {
    "routerName": "4",
    "name": "订单管理",
    "icon": "",
    "list1": [
      {
        "routerName": "Cd_order_list",
        "name": "订单列表",
      },
      {
        "routerName": "Cd_order_add",
        "name": "添加订单",
      }
    ]
  },
  {
    "routerName": "Message",
    "name": "消息提醒",
    "icon": "",
  },
  {
    "routerName": "Cd_Preport",
    "name": "业绩报表",
    "icon": "",
  },
  {
    "routerName": "6",
    "name": "用户中心",
    "icon": "",
    "list1": [
      {
        "routerName": "6-1",
        "name": "账户",
        "list2": [
          {
            "routerName": "Cd_User_edit",
            "name": "修改信息",
          },
          {
            "routerName": "",
            "name": "密码修改",
          },
          {
            "routerName": "",
            "name": "用户注销",
          }
        ],
      }
    ]
  },
];
export default menuList
