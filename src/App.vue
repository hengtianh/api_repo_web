<template>
  <div id="app" style="height: 610px">
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-container style="height: 549px">
				<el-aside width="300px" style="background-color: #545c64">
					<Aside></Aside>
				</el-aside>
				<el-container>
					<el-main>
						<BreadCrumb />
						<router-view />
					</el-main>
					<el-footer style="padding-left: 0px">
						<Footer></Footer>
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
  </div>
</template>

<script>
import Header from './components/common/header'
import Aside from './components/common/aside'
import Footer from './components/common/footer'
import BreadCrumb from './components/common/breadCrumb'
export default {
  name: 'App',
  components: {
  	Header,
  	Aside,
  	Footer,
  	BreadCrumb
  }
}
</script>

<style>
#app el-container {
  width: 550px;
}
.line {
	height: 1px;
}
</style>
