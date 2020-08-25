<template>
  <div>
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(129, 159, 182)"> 
        <!-- el-menu中打开router跳转，index为跳转路径 -->
        <el-menu router> 
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"></i>用户管理</template>
              <el-menu-item index="/user/queryall" >用户一览</el-menu-item>
              <el-menu-item index="/user/add">添加用户</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>角色管理</template>
              <el-menu-item index="/role/queryall">角色一览</el-menu-item>
              <el-menu-item index="/role/add">添加角色</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-s-check"></i>权限管理</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>张卓毅</span>
        </el-header>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      return {
        username:''
      }
    }
  };
</script>