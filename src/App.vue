<template>
  <div id="app">
    <div class="header">
			<div class="nav-left">
				<ul class="nav-items">
					<a href="" v-for="item in navContent" :key="item"><li>{{item}}</li></a>
				</ul>
			</div>
			<div class="nav-right"></div>
		</div>
    <router-view/>
		<div class="footer">
			
		</div>
  </div>
</template>

<script>
export default {
  name: 'App',
	data(){
		return {
			navContent:['豆瓣','读书','电影','阅读','时间','豆品','更多']
		}
	}
}
</script>

<style lang="stylus" scoped>
	.header
		width 100%
		height 40px
		background grey
		.nav-left
			height 40px
			.nav-items 
				padding 0
				height 40px
				margin 0
				line-height 40px
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
</style>
