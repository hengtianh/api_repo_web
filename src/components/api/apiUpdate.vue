<template>
<div>
		<h1>adding new apis here!</h1>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="接口名称" prop="apiName">
    <el-input v-model="ruleForm.apiName"></el-input>
  </el-form-item>
  <el-form-item label="返回值类型" prop="returnType">
    <el-select v-model="ruleForm.returnType" placeholder="请选择返回值类型">
      <el-option label="String" value="String"></el-option>
      <el-option label="Double" value="Double"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="发布时间" required>
    <el-col :span="11">
      <el-form-item prop="gmtCreate">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.gmtCreate" style="width: 100%;" disabled></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="启用状态" prop="isEnabled">
    <el-switch v-model="ruleForm.isEnabled" :active-value="1" :inactive-value="0"></el-switch>
  </el-form-item>
  <el-form-item label="接口功能" prop="description">
    <el-input type="textarea" v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
	data () {
		return {
			ruleForm: {},
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
		}
	},
	created () {
		let id = this.$route.params.id
		let url = 'http://localhost:8080/easy-develop/apiDev/api/' + id
		this.$http.get(url).then((res) => {
			this.ruleForm = res.body.ret_data
		}, (err) => {
			console.error(err)
		})
	}
}
</script>

<style>

</style>
