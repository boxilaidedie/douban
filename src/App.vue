<template>
  <div id="app">
    <div class="nav">
			<div class="nav-left">
				<ul class="nav-items">
					<a href="" v-for="item in navContent" :key="item"><li>{{item}}</li></a>
				</ul>
			</div>
		
			<div class="nav-right">
				<ul class="nav-items">
					<a href=""><li>下载客户端</li></a>
					<a href=""><li>登录注册</li></a>
				</ul>
			</div>
		</div>
		
		<div class="header">
			<div class="header-book">
				<div class="header-logo">
					<a href=""></a>
				</div>
				<div class="header-serach">
					 <input type="text" placeholder="请输入书名">
					 <button type="button" class="search-btn"><icon-svg icon-class="search" :color="searchIcon.color"></icon-svg></button>
				</div>
			</div>
			<div class="header-footer">
				<ul class="header-footer-nav">
					<a href="#"><li>购书单</li></a>
					<a href=""><li>电子图书</li></a>
					<a href=""><li>豆瓣书店</li></a>
					<a href=""><li>2018年度榜单</li></a>
					<a href=""><li>2018书影音报告</li></a>
					<a href=""><li><icon-svg icon-class="collection" :color="collectionIcon.color" :iconSize="collectionIcon.size" style="float:left;margin-top:2px"></icon-svg><span style="padding-left:5px">购物车</span><span class="shopcarCount">({{shopcarCount.default}})</span></li></a>
				</ul>
			</div>
		</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return {
			navContent:['豆瓣','读书','电影','阅读','时间','豆品','更多'],
			logo:'豆瓣读书',
			searchData: '',
			shopcarCount:{
				default: 0,
				type: Number
			},
			searchIcon:{
				color:'#fff',
			},
			collectionIcon:{
				size:'20px',
				color:'orange',
			}
		}
	},
	methods:{
		search(){
			console.log(this.searchData)
			this.searchData = ''
		}
	}
}
</script>

<style lang="stylus" scoped>
$fontColor = #614e3c
	.nav
		height 30px
		width 100%
		background grey
		.nav-left
			float left
			height 30px
			.nav-items 
				padding 0
				height 30px
				margin 0
				line-height 30px
				a
					display inline-block
					float left
					text-decoration none
					font-size 12px
					color white
					a:hover
						color black
					li
						list-style none
						margin 0 10px
					li:hover
						color black
		.nav-right
			float right
			height 30px
			line-height 30px
			.nav-items 
				padding 0
				height 30px
				margin 0
				line-height 30px
				a
					float left
					display inline-block
					font-size 12px
					text-decoration none
					color #fff
					li
						list-style none
						margin 0 10px
					li:hover
						color black
	.header
		background #f6f6f1
		
		.header-book
			height 90px
			width 1040px
			margin:0 auto
		
			.header-logo
				float left
				line-height 30px
				margin-right 100px
				width 115px
				height 27px
				margin-top 30px
				margin-left 10px
				background-image url(http://img3.doubanio.com/dae/accounts/resources/0246c88/book/assets/lg_book_a11_1.png?s=1)
				a
					color #614e3c
					font-size 35px
					text-decoration none
			.header-serach
				margin-top 26px
				width 600px
				float left
				input
					width 400px
					height 30px
					padding 0 10px
				input::-webkit-input-placeholder 
					color #aab2bd
					font-size 14px
				.search-btn
					height 34px
					width 50px
					margin-left -5px
					margin-top 1px
					background #a09e95
					outline-color:#000
					outline-style none
					outline-width 0
					border none
					border-radius 0 3px 3px 0
					cursor pointer
		.header-footer
			width 100%
			height 40px
			background #f6f6f1
			border-top 1px solid rgba(200,200,200,0.4)
			line-height 30px
			.header-footer-nav
				width 1040px
				margin 0 auto
				padding 0
				a
					float left
					display inline-block
					margin 5px 10px
					text-decoration none
					color $fontColor
					font-size 14px
					li
						list-style none
						&:hover
							background #eee
</style>
