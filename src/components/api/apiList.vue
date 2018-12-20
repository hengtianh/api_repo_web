<template>
	<div>
		<el-table
    :data="tableData.filter(data => !search || data.apiName.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="gmtCreate">
    </el-table-column>
    <el-table-column
      label="Return"
      prop="returnType">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="apiName">
    </el-table-column>
    <el-table-column
      label="Params"
      prop="params">
    </el-table-column>
    <el-table-column
      label="Description"
      prop="description">
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
			tableData: [],
        search: ''
		}
	},
	created () {
		this.$http.get('http://localhost:8080/easy-develop/apiDev/apis').then((data) => {
		  let res = data.body
			if (res.ret_code === '200' && res.ret_msg === 'SUCCESS') {
				this.tableData = res.ret_data
				console.log('tableData:' + this.tableData)
			}
		},
		(res) => {
		  console.error(res)
		})
	},
	methods: {
		handleEdit (index, row) {
			var id = row.id
			this.$router.push({ path: `/api/apiUpdate/${id}` })
		}
	}
}
</script>

<style>

</style>
