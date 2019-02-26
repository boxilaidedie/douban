<template>
	<div class="main">

			<div class="ad">
				<img :src="ad" alt="">
			</div>
			<div class="main-left">
			<div class="title">
				<h3 style="display:inline-block">新书速递</h3>&nbsp;&nbsp;<a href="#" style="text-decoration: none;color:cornflowerblue;font-size: 12px">更多>></a>
			</div>
			<el-carousel trigger="click" height="480px" style="border-top:1px solid grey">
				<el-carousel-item v-for="item in pageNum" :key="item">
					<ul class="new-books" v-if="item == 1">
						<a href="" v-for="book in bookItem1"  :key="book.id" class="book-item">
							<li>
								<img :src="book.urlImg" alt="">
								<span>{{book.name}}</span>
								<span>{{book.author}}</span>
							</li>
						</a>
					</ul>
					<ul class="new-books" v-if="item == 2">
						<a href="" v-for="book in bookItem2"  :key="book.id" class="book-item">
							<li>
								<img :src="book.urlImg" alt="">
								<span>{{book.name}}</span>
								<span>{{book.author}}</span>
							</li>
						</a>
					</ul>
					<ul class="new-books" v-if="item == 3">
							<a href="" v-for="book in bookItem3"  :key="book.id" class="book-item">
								<li>
									<img :src="book.urlImg" alt="">
									<span>{{book.name}}</span>
									<span>{{book.author}}</span>
								</li>
							</a>
						</ul>
				</el-carousel-item>
			</el-carousel>
			<div class="book-news">
				<div class="title">
					<h3 style="display:inline-block">图书新闻</h3>&nbsp;&nbsp;<a href="#" style="text-decoration: none;color:cornflowerblue;font-size: 12px">更多>></a>
				</div>
				<el-carousel trigger="click" height="180px" style="border:1px solid rgb(230, 229, 229)">
					<el-carousel-item v-for="item in bookNews" :key="item.id" style="padding:0 20px 0 20px">
						<div style="float:left">
							<h3>{{item.name}}</h3>
							<p style="width:500px;font-size:14px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</p>
						</div>
						<div style="float:left;margin:20px 0 0 15px;box-shadow: 2px 2px 2px rgba(255,200,255,0.5)">
							<div><img :src="item.urlImg" alt=""></div>
						</div>
						
					</el-carousel-item>
				</el-carousel>
			</div>
			<div class="new-movie">
				<div class="title">
					<h3 style="display:inline-block">最新电影</h3>&nbsp;&nbsp;<a href="#" style="text-decoration: none;color:cornflowerblue;font-size: 12px">更多>></a>
				</div>
				<div class="movie-list">
					<ul>
						<a href="#" v-for="item in newMovie" :key="item.id">
							<li>
								<img :src="item.images.small" alt="">
								<p style="font-size:14px">{{item.title}}</p>
							</li>
						</a>
					</ul>
				</div>
			</div>
		</div>

		<div class="main-right">
			<div class="ad-right">
				<img :src="ad2" alt="">
			</div>
			<div class="hot-tags">
				<h3 style="display:inline-block">热门标签</h3>&nbsp;&nbsp;<a href="#" style="text-decoration: none;color:cornflowerblue;font-size: 12px">所有热门>></a>
				<hr>
				<div class="tags-content" v-for="tag in tags" :key="tag.id">
					<p class="tags-title" style="font-size:14px;margin-left:5px;height: 8px">{{tag.title}}</p>
					<ul class="tags-item">
						<a href="" v-for="item in tag.category" :key="item.id"><li>{{item}}</li></a>
						<a :href="tag.more">更多>></a>
					</ul>
				</div>
			</div>

			<div class="book-250">
					<h3 style="display:inline-block">豆瓣图书250</h3>&nbsp;&nbsp;<a href="#" style="text-decoration: none;color:cornflowerblue;font-size: 12px">更多>></a>
					<hr>
					<div class="book250-item">
						<ul>
							<a href="#" v-for="item in book250" :key="item.id"><li><img :src="item.urlImg" alt=""></li>
								<span style="display:inline-block">{{item.name}}</span>
							</a>
						</ul>
					</div>
				</div>
			
		</div>
	</div>
</template>

<script>
import { getBook,doubanBook } from '@/api/getBook.js'
import { getArticle } from '@/api/getArticle.js'
import request from '../../api/request'
var ad1 = require('./images/ad1.jpg')
export default {
	name: 'Home',
	data(){
		return {
			ad: require('./images/ad1.jpg'),
			ad2: require('./images/ad2.png'),
			bookList:[],
			tags:[
				{title:'文学',category:['小说','随笔','日本文学','小说','通话','名著','散文','诗歌','港台'],more:''},
				{title:'流行',category:['漫画','推理','日本文学','小说','通话','名著','散文','诗歌','武侠']},
				{title:'文化',category:['历史','随笔','传记','小说','通话','名著','散文','诗歌','音乐'],more:''},
				{title:'生活',category:['旅行','随笔','设计','小说','通话','名著','散文','诗歌','美食'],more:''},
				{title:'经管',category:['经济学','随笔','家具','小说','通话','名著','健康','诗歌','营销'],more:''},
				{title:'科技',category:['理财','随笔','股票','小说','通话','名著','算法','通信','网络神经'],more:''}
			],
			article:[],
			newMovies:[]
		}
	},
	created(){
		let query = {'pageSize':30}
		getBook(query).then((rs) => {
			this.bookList = rs.data.data
			console.log(rs.data.data)
		})
		getArticle(query).then((rs)=>{
			this.article = rs.data.data
			console.log(this.article)
		})
		doubanBook({}).then(rs=>{
			console.log(rs.data.subjects)
			let _idUrl =[]
			
			for(var index in rs.data.subjects){
				_idUrl.push('/api/movie/subject/' + rs.data.subjects[index].id)
			}
			console.log(_idUrl)
			for(let index in _idUrl){
				request({
					url:_idUrl[index],
					method: 'get',
				}).then(rs=>{
					
				})
			}
		})
	},
	computed: {
		pageNum(){
			let swipePageNum = Math.ceil(this.bookList.slice(0,30).length/10)
			console.log(swipePageNum)
			return swipePageNum    //展示区域页数
		},
		bookItem1(){
			return this.bookList.slice(0,10)
		},
		bookItem2(){
			return this.bookList.slice(10,20)
		},
		bookItem3(){
			return this.bookList.slice(20,30)
		},
		book250(){
			return this.bookList.slice(0,11)
		},
		bookNews(){
			return this.article.slice(0,3)
		},
		newMovie(){
			return this.newMovies.slice(0,10)
		}
	},
}
</script>

<style lang="stylus" scoped>
	.main
		width 1040px
		margin 0 auto
		height: 1000px
		.main-left
			float left
			.el-carousel
				width 710px
				.new-books
					padding 0
					margin 0
					.book-item
						display block
						width 120px
						height 180px
						overflow hidden
						float left
						margin 10px
						padding-bottom 24px
						margin-top 24px
						text-decoration none
						img
							width 100%
						span
							display block
							margin-top 5px
							font-size 11px

			.movie-list
				width 710px
				border 1px solid red
				ul
					padding 0
					margin 0
					display flex
					flex-wrap wrap
					margin-left 35px
					a
						text-decoration none
						display inline-block
						li
							list-style none
							padding 10px
							padding-bottom 60px
							img 
								width 128px
					

		.main-right
			float left
			margin-top 59px
			margin-left 48px
			width 280px
			.ad-right
				background #eeeeee
			.hot-tags
				.tags-content
					border-bottom 1px dotted red
					padding-bottom 20px
					display block
					.tags-item
						padding 0
						margin 0
						a
							display inline-block
							text-decoration none
							font-size 12px
					
							li
								list-style none
								padding 5px
			.book250-item
				ul
					padding 0 
					margin 0
					a
						float left 
						text-decoration none
						padding 12px
						padding-bottom 25px
						li
							list-style none
						span
							font-size 12px
							color #3377aa
							margin-left 30px
</style>