<!--
**************************************
*   名称：一个demo
*   作用：展示如何把页面嵌入框架
*   作者：
**************************************
-->
<template>
    <div>
        <div style="margin-bottom:20px">
            <el-button type="primary" @click="addNew">添加 </el-button>
        </div>
        
        <el-tag
          @click="handEdit()"
          v-for="(tag,index) in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
          class="tag-item"
          >
          <span @click="handEdit(index)">{{tag}}</span>
        </el-tag>
        </el-input>
        <!-- 弹窗区域 -->
        <el-dialog title="编辑标签" :visible.sync="dialogFormVisible">
          <el-form>
            <el-form-item label="标签内容">
              <el-input v-model="tagName" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="editPre">确 定</el-button>
          </div>
        </el-dialog>

    </div>
</template>

<script>
  export default {
    data() {
      return {
           dynamicTags: [],
           inputValue: '' ,
           tagName:'新标签',
           dialogFormVisible:false,
           tagIndex:0
      };
    },
    methods: {
      addNew(){
        this.dynamicTags.push('新标签','新标签','新标签','新标签','新标签');
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handEdit(index){
        console.log(this.dynamicTags);
        this.dialogFormVisible = true;
        this.tagIndex = index;
      },
      editPre(){
        if(this.tagName){
          this.dynamicTags.splice(this.tagIndex, 1,this.tagName);
          console.log(this.dynamicTags);
          this.dialogFormVisible=false;
        }
      },

    }
  }
</script>
<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .tag-item{
    cursor: pointer;
  }
</style>