<template>
	<div class="main">
		<div class="ad">
			<img :src="ad" alt="">
		</div>

		<el-carousel trigger="click" height="480px" style="border:1px solid red">
			<el-carousel-item v-for="item in bookItem" :key="item">
				<h3>{{ item }}</h3>
			</el-carousel-item>
		</el-carousel>

	</div>
</template>

<script>
import { getBook } from '@/api/getBook.js'
export default {
	name: 'Home',
	data(){
		return {
			ad:require('./images/ad.jpg'),
			bookList:[]
		}
	},
	created(){
		let query = 'pageSize=20'
		getBook(query).then(rs=>{
			console.log(rs)
		})
	},
	computed: {
		bookItem(){
			return this.bookList.slice(0,10)
		}
	},
}
</script>

<style lang="stylus" scoped>
	.main
		width 1040px
		margin 0 auto
		height: 1000px
		border 1px solid red
		.el-carousel
			width 680px
</style>