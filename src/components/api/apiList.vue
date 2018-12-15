<template>
	<div>
		<el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Return"
      prop="return">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Params"
      prop="params">
    </el-table-column>
    <el-table-column
      label="Description"
      prop="desc">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  	</el-table>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tableData: [{
          date: '2018-12-07',
          return: 'Array',
          name: 'apiList.getBreadList',
          params: 'Array:array',
          desc: '移除数组中的空白元素'
        }, {
          date: '2018-12-07',
          return: '-_-',
          name: 'getBreadList',
          params: '-_-',
          desc: '获得路由变化，生成面包屑导航数据'
        }, {
          date: '2018-12-07',
          return: '-_-',
          name: 'Array.splice',
          params: 'int: index, int: step',
          desc: '删除数组中指定位置后指定数量的元素'
        }, {
          date: '2018-12-07',
          return: 'Array[]',
          name: 'String.split',
          params: 'char:symbol',
          desc: '根据指定标识分割字符串得到分割后的数组'
        }],
        search: ''
		}
	}
}
</script>

<style>

</style>
