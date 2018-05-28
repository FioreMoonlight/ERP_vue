<template>
  <div>
    <el-row>
      <el-col :span="12">
          <div class="expand">
            <div>
                <!-- <el-button @click="handleAddTop">添加顶级节点</el-button> -->
                <el-tree ref="expandMenuList" class="expand-tree"
                v-if="isLoadingTree"
                :data="setTree"
                node-key="id"
                highlight-current
                :props="defaultProps"
                :expand-on-click-node="false"
                :render-content="renderContent"
                :default-expanded-keys="defaultExpandKeys"
                @node-click="handleNodeClick"></el-tree>
              </div>
          </div>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
              <span>权限管理</span>

              <!-- <el-button style="float: right; padding: 3px 0" type="text">取消关联</el-button> -->
              <!-- <el-button style="float: right; padding: 3px 0;margin-right:20px" type="text">关联账户</el-button> -->
            </div>
            <div  class="text item" v-show="ifclick">
              <el-form v-show="!ifns" ref="form" :model="form" label-width="80px"  size="mini">
                <el-form-item label="账户:">
                  {{this.sf_name}}({{this.sf_username}})
                </el-form-item>
                <!-- <el-form-item label="状态:">
                  等待账户确认
                </el-form-item> -->
                <div class="line"></div>
                <el-form-item label="店铺:">
                  <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
                  <!-- <div style="margin: 15px 0;"></div> -->
                  <el-checkbox-group v-model="checked1" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in Option1" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="产品:">
                  <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <div style="margin: 15px 0;"></div> -->
                  <el-checkbox-group v-model="checked2" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in Option2" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="订单:">
                  <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <div style="margin: 15px 0;"></div> -->
                  <el-checkbox-group v-model="checked3" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in Option3" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="财务:">
                  <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                  <div style="margin: 15px 0;"></div> -->
                  <el-checkbox-group v-model="checked4" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in Option4" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-form>
                <!-- <div class="search-result-text">
                    状态: <span>等待账户确认</span>
                </div> -->
                <!-- <div class="line"></div> -->
              <div v-show="ifns">
                <!-- <div class="line"></div> -->
                <el-form ref="form" :model="form" label-width="110px">
                  <el-form-item label="绑定用户名">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>

            </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<!-- VUE饿了么树形控件添加增删改功能按钮 -->
<script>
import TreeRender from '@/components/tree_render'
import api from '@/resource/api'
import Qs from 'qs';

  const Option1 = ['店铺1', '店铺2', '店铺3', '店铺4'];
  const Option2 = ['产品采集', '产品编辑', '产品跟卖', '产品上传','产品同步','产品分享'];
  const Option3 = ['接收订单', '处理订单'];
  const Option4 = ['财务管理'];
  export default{
    name: 'tree',
    data(){
      return{
        checkAll: false,
        checked1: ['店铺1', '店铺2', '店铺3', '店铺4'],
        checked2: ['产品采集', '产品编辑', '产品跟卖', '产品上传','产品同步','产品分享'],
        checked3: ['接收订单', '处理订单'],
        checked4: ['财务管理'],
        Option1: Option1,
        Option2: Option2,
        Option3: Option3,
        Option4: Option4,
        isIndeterminate: true,
        form: {
          name:''
        },
        maxexpandId: api.maxexpandId,//新增节点开始id
        non_maxexpandId: api.maxexpandId,//新增节点开始id(不更改)
        isLoadingTree: false,//是否加载节点树
        //setTree: api.treelist,//节点树数据
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        defaultExpandKeys: [],//默认展开节点列表
        sf_name:'',
        sf_username:'',
        staff_id:'',
        suid:'',
        ifns:false,
        ifclick:false
      }
    },
    props:{
      companyname:{
        type:String,
        required:true
      },
      setTree:{
        type:Array,
        required:true
      },
      ifnsary:{
        type:Array,
        required:true
      },
      cid:{
        type:String,
        required:true
      }
    },
    mounted(){
      // console.log(api)
      this.initExpand()
    },    

    methods: {
      // handleCheckAllChange(val) {
      //   this.checkedCities = val ? cityOptions : [];
      //   this.isIndeterminate = false;
      // },
      handleCheckedCitiesChange(value) {
        this.$message.error("权限接口尚未完善")
        return
        // let checkedCount = value.length;
        // this.checkAll = checkedCount === this.cities.length;
        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      onSubmit() {
        var uid = localStorage.getItem("uid");
        var tk = localStorage.getItem("token");

         
        this.$http.post(this.api.user_list,{
          user_token:tk,
          user_query:"username=='"+this.form.name+"'"
        }).then((res)=>{
          this.suid = res.values[0].id;
          //判断是否存在用户
          if(res.values.length > 0){
            //判断该账户是不是员工
            if(res.values[0].status == "staff"){
              this.$http.post(this.api.link_list_user_to_company_staff,{
                user_token:tk,
                user_query:"user_id=='"+res.values[0].id+"'"
              }).then((res)=>{
                //判断是否已经被绑定
                if(res.values.length > 0){
                  this.$message.error("该用户已被其他公司绑定")
                }else{
                  
                  if(this.staff_id){
                    //往link表里加信息
                    this.$http.post(this.api.link_company_staff_to_user,{
                      user_id:this.suid,
                      company_id:this.cid,
                      staff_id:this.staff_id
                    }).then((res)=>{
                      //往信息表里加信息
                      this.$http.post(this.api.message_company_staff_link,{
                        user_id:this.suid,
                        company_id:this.cid,
                        staff_id:this.staff_id,
                        status:"wait"
                      }).then((res)=>{
                        // this.ifnsary.push(this.staff_id);
                        this.$message.success('请求已经发出,等待该账户确认');
                        this.form.name = '';
                      })
                    })
                  }else{
                    this.$message.error("请点击要绑定的员工")
                  }
                }
              })
              
            }else{
                this.$message.error("该用户不是员工")
            }
            
          }else{
            this.$message.error("该用户不存在");
          }

        })
      },
      initExpand(){

        this.setTree.map((a) => {
          this.defaultExpandKeys.push(a.id)
        });
        this.isLoadingTree = true;
      },
      handleNodeClick(d,n,s){//点击节点
        // console.log(d)
        this.ifclick = true;
        d.isEdit = false;//放弃编辑状态
        this.sf_name = d.name;
        this.staff_id = d.id;
        if(this.ifnsary.indexOf(this.staff_id.toString()) >= 0){
          this.ifns = false;
        }else{
          this.ifns = true;
        }
          
        this.$http.post(this.api.company_set_infor+'('+this.cid+')',{
          ctree:JSON.stringify(this.setTree)
        }).then((res)=>{
        })
      },
      renderContent(h,{node,data,store}){//加载节点
        let that = this;
        return h(TreeRender,{
          props: {
            DATA: data,
            NODE: node,
            STORE: store,
            maxexpandId: that.non_maxexpandId
          },
          on: {
            nodeAdd: ((s,d,n) => that.handleAdd(s,d,n)),
            nodeEdit: ((s,d,n) => that.handleEdit(s,d,n)),
            nodeDel: ((s,d,n) => that.handleDelete(s,d,n)),
            nodeEditPass: ((s,d,n) => that.handleEditPass(s,d,n))
          }
        });
      },
      // handleAddTop(){
      //   this.setTree.push({
      //     id: 0,
      //     name: '领导',
      //     pid: '',
      //     isEdit: false,
      //     children: []
      //   })
      // },
      handleAdd(s,d,n){//增加节点
        var tk = localStorage.getItem("token");
        var uid = localStorage.getItem("uid");
        
        // console.log(this.setTree);
        if(n.level >=2){
          this.$message.error("目前只支持两级！")
          return false;
        }
        
        this.$http.post('http://39.106.9.139/apis/restful/add/company_'+this.cid+'/staff',{
          staff_name:"",
          staff_info:"1"
        }).then((res)=>{
          console.log(res);
          //添加数据
          d.children.push({
            id: res.value.id,
            name: '员工',
            pid: d.id,
            isEdit: false,
            children: []
          });
          //展开节点
          if(!n.expanded){ 
            n.expanded = true;
          }
          //修改公司树
          this.$http.post(this.api.company_set_infor+'('+this.cid+')',{
            ctree:JSON.stringify(this.setTree)
          }).then((res)=>{
          })
        }) 
      },
      handleEdit(s,d,n){//编辑节点
        var tk = localStorage.getItem("token");
              
        //修改公司树
        this.$http.post(this.api.company_set_infor+'('+this.cid+')',{
          ctree:JSON.stringify(this.setTree)
        }).then((res)=>{
        })
      },
      handleDelete(s,d,n){//删除节点
        // console.log(s,d,n)
        let that = this;
        //有子级不删除
        if(d.children && d.children.length !== 0){
          this.$message.error("此节点有子级，不可删除！")
          return false;
        }else{
          //新增节点直接删除，否则要询问是否删除
          let delNode = () => {
            let list = n.parent.data.children || n.parent.data,//节点同级数据
              _index = 99999;//要删除的index
            /*if(!n.parent.data.children){//删除顶级节点，无children
              list = n.parent.data
            }*/
            list.map((c,i) => {
              if(d.id == c.id){
                _index = i;
              }
            })
            let k = list.splice(_index,1);
            //console.log(_index,k)
            this.$message.success("删除成功！")
          }
          let isDel = () => {
            that.$confirm("是否删除此节点？","提示",{
              confirmButtonText: "确认",
              cancelButtonText: "取消",
              type: "warning"
            }).then(() => {
              delNode()
            }).catch(() => {
              return false;
            })
          }
          //判断是否新增
          d.id > this.non_maxexpandId ? delNode() : isDel() 
        }              
        //修改公司树
        this.$http.post(this.api.company_set_infor+'('+this.cid+')',{
          ctree:JSON.stringify(this.setTree)
        }).then((res)=>{
        })
      },
      handleEditPass(s,d,n){//编辑完成
        console.log(1)
        d.isEdit = false;
      }
    }
    
  }
</script>

<style>
.search-result-text{
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
}
.line{
  margin: 20px 0;
  border-top: 1px solid #dcdfe6;
}
.expand{
  width:100%;
  height:100%;
  overflow:hidden;
}
.expand>div{
  height:85%;
  /*padding-top:20px;*/
  /*width:50%;*/
  /*margin:20px auto;*/
  max-width:400px;
  overflow-y:auto;
}
.expand>div::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  border-radius:5px;
}
.expand>div::-webkit-scrollbar-thumb{
  background-color:rgba(50, 65, 87, 0.5);
  outline:1px solid slategrey;
  border-radius:5px;
}
.expand>div::-webkit-scrollbar{
  width:10px;
}
.expand-tree{
  border:none;
  margin-top:10px;
}
.expand-tree .el-tree-node.is-current,
.expand-tree .el-tree-node:hover{
  overflow:hidden;
}
.expand-tree .is-current>.el-tree-node__content .tree-btn,
.expand-tree .el-tree-node__content:hover .tree-btn{
  display:inline-block;
}
.expand-tree .is-current>.el-tree-node__content .tree-label{
  font-weight:600;
  white-space:normal;
}
</style>