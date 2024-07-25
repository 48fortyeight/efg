<template>
	<view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		  <!-- 循环渲染轮播图的 item 项 绑定点击事件并直接跳转 -->
		  <swiper-item v-for="(item, index) in swiperList" :key="index">
			<navigator class="swiper-item" :url="'/subpkg/comment_page/comment_page?comment_id=' + item.comment_id">
			  <!-- 动态绑定图片的 src 属性 -->
			  <image :src="item.image_src"></image>
			</navigator>
		  </swiper-item>
		</swiper>
			
		<!-- 分类导航区域 -->
		<view class="nav-list">
		   <view class="nav-item" v-for="(item, index) in navList" :key="index" @click="navClickHandler(item)">
			 <image :src="item.image_src" class="nav-img"></image>
			 <!-- <text class="nav-text">{{ item.text }}</text> -->
		   </view>
		</view>
		
		  <!-- 帖子区域 -->
		 <view class="Index">
			<!-- 瀑布流布局列表 -->
			<view class="pubuBox">
				<view class="pubuItem">
					<view class="item-masonry" v-for="(item, index) in comList" :key="index">
						<image :src="item.img" mode="widthFix"></image>
						<view class="listtitle"> <!-- 这是没有高度的父盒子（下半部分） -->
							<view class="listtitle1">{{ item.name }}</view>
							<!-- <view class="listtitle2">
								<text class="listtitle2son">￥</text>
								{{ item.commdityPrice }}
							</view> -->
							<view class="listtitle3">
								用户
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图数据列表
				 swiperList: [
				        { image_src: 'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper1.png' ,comment_id:1},
				        { image_src: 'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper2.png' ,comment_id:2},
				        { image_src: 'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/swiper3.png' ,comment_id:3}
				      ],
				// 分类导航的数据列表
				navList: [
					{image_src:'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png',name:'分类'},
					{image_src:'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png',name:'分类'},
					{image_src:'https://mp-8ceddf2a-d6f2-42b9-be7d-a6fbc44ed077.cdn.bspapp.com/doahang.png',name:'分类'}
				],
				
				comList: [{
										img:"../../static/1.png",
										name: '商品的名称，可以很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
										commdityPrice: 100
									}, {
										img: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg',
										name: '商品名称会在超出两行时候自动折叠',
										commdityPrice: 100
									},
									{
										img: '../../static/tab_icons/home.png',
										name: '只有一行标题时高度为39',
										commdityPrice: 100
									}, {
										img: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg',
										name: '具体样式您可以自定义',
										commdityPrice: 100
									}, {
										img: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
										name: 'vue的H5页面也是如此使用',
										commdityPrice: 100
									}
								] //商品列表
			};
		},
		onLoad() {
			
		},
		methods:{
			// nav-item 项被点击时候的事件处理函数
			navClickHandler(item) {
			  // 判断点击的是哪个 nav
			  if (item.name === '分类') {
			    uni.switchTab({
			      url: '/pages/cate/cate'
			    })
			  }
			}
		}
	}
</script>

<style lang="scss">
	swiper {
	 height: 330rpx;
	
	 .swiper-item,
	 image {
	   width: 100%;
	   height: 100%;
	 }
	}
	
	.nav-list {
	  display: flex;
	  justify-content: space-around;
	  margin: 15px 0;
	
	  .nav-img {
	    width: 128rpx;
	    height: 140rpx;
	  }
	}
	
	//瀑布流
	.pubuBox {
			padding: 22rpx;
		}
	
		.pubuItem {
			column-count: 2;
			column-gap: 20rpx;
		}
	
		.item-masonry {
			box-sizing: border-box;
			border-radius: 15rpx;
			overflow: hidden;
			background-color: #fff;
			break-inside: avoid;
			/*避免在元素内部插入分页符*/
			box-sizing: border-box;
			margin-bottom: 20rpx;
			box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
		}
	
		.item-masonry image {
			width: 100%;
		}
	
		.listtitle {
			padding-left: 22rpx;
			font-size: 24rpx;
			padding-bottom: 22rpx;
	
			.listtitle1 {
				line-height: 39rpx;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				min-height: 39rpx;
				max-height: 78rpx;
			}
	
	// 		.listtitle2 {
	// 			color: #ff0000;
	// 			font-size: 32rpx;
	// 			line-height: 32rpx;
	// 			font-weight: bold;
	// 			padding-top: 22rpx;
	
	// 			.listtitle2son {
	// 				font-size: 32rpx;
	// 			}
	// 		}
	
			.listtitle3 {
				font-size: 28rpx;
				color: #909399;
				line-height: 32rpx;
				padding-top: 22rpx;
			}
		}
	
		.Index {
			width: 100%;
			height: 100%;
		}
</style>
