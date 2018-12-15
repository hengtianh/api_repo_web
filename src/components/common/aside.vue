<template>
	<el-menu
	  default-active="2"
	  class="el-menu-vertical-demo no-border-right"
	  @open="handleOpen"
	  @close="handleClose"
	  background-color="#545c64"
	  text-color="#fff"
	  active-text-color="#ffd04b"
	  router=true>
	  <el-submenu index="1">
	    <template slot="title">
	      <i class="el-icon-location"></i>
	      <span>接口管理</span>
	    </template>
	    <el-menu-item-group>
	      <template slot="title">后端管理</template>
	      <el-menu-item index="1-3">接口维护</el-menu-item>
	      <el-menu-item index="/api/apiAdd">接口新增</el-menu-item>
	    </el-menu-item-group>
	    <el-menu-item-group title="公共管理">
	      <el-menu-item index="/api/apiList">接口列表</el-menu-item>
	    </el-menu-item-group>
	    <el-submenu index="1-4">
	      <template slot="title">接口变更</template>
	      <el-menu-item index="1-4-1">选项1</el-menu-item>
	    </el-submenu>
	  </el-submenu>
	  <el-menu-item index="2">
	    <i class="el-icon-menu"></i>
	    <span slot="title">导航二</span>
	  </el-menu-item>
	  <el-menu-item index="3" disabled>
	    <i class="el-icon-document"></i>
	    <span slot="title">导航三</span>
	  </el-menu-item>
	  <el-menu-item index="4">
	    <i class="el-icon-setting"></i>
	    <span slot="title">导航四</span>
	  </el-menu-item>
	</el-menu>
</template>

<script>
export default {

}
</script>

<style>
.no-border-right {
	border-right: 0px;
}
</style>
