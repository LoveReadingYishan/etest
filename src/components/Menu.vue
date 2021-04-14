<template>
  <div class="hello" >
  
   
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height:100%;width:100%"
      :router="true">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span >导航一</span>
           
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="/userlist"> 
            用户列表
          </el-menu-item>
           
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2">
          <template slot="title">选项4</template>
          <el-menu-item index="/user">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index='/quanxian'>
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  

   
   

  



  </div>
</template>


<style scoped>
 .hello{
   
    overflow: hidden;
    
    height: 100vh;
    
    width:15%
 }

 .navi{
   text-decoration: red;
 }

 .el-col-12{
    width:100%;
 }


</style>

<script>


export default {
  name: 'Menu',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}


</script>
