<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item v-show="item.node" v-for="item in breadList" :key="item.id" :to="item.path">{{ item.name }}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
export default {
	data () {
		return {
			breadList: []
		}
	},
	created () {
		/**
		 *  {path: {path: '/'}, name: '首页', node: true},
		 *	{path: {path: '/api'}, name: '接口管理', node: false},
		 *	{path: {path: '/api/apiList'}, name: '接口列表', node: true}
		 */
		 this.getBreadList()
	},
	watch: {
		$route () {
			this.getBreadList()
		}
	},
	methods: {
		getBreadList () {
			let breadList = this.$route.path
			let paths = breadList.split('/')
			// console.log(this.$route)
			// console.log(paths)
			this.breadList = [{path: {path: '/'}, name: '首页', node: true}]
			var node = false
			paths = this.removeBlankArrItem(paths)
			// console.log(paths)
			for (var i = 1; i < paths.length; i++) {
			  if (i === paths.length - 1) {
			    node = true
			  }
				var obj = {path: {path: paths[i]}, name: this.$route.name, node: node}
				this.breadList.push(obj)
			}
			// console.log(breadList)
		},
		/**
		 * 移除数组中的空白元素
		 */
		removeBlankArrItem (array) {
			if (typeof (array) === 'undefined') {
			  return
			}
			for (var i = 0; i < array.length; i++) {
			  let str = array[i]
			  if (str === '' || str === ' ') {
			    array.splice(i, 1)
			  }
			}
			return array
		}
	}
}
</script>

<style>

</style>
