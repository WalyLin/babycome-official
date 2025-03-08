<template>
	<header class="app-header">				
		<div class="container">
			<!-- Logo -->
			<router-link to="/" class="logo">
				<img src="@/assets/logo.png" alt="BABYCOME">
			</router-link>

			<!-- 桌面导航 -->
			<nav class="desktop-nav">
				<router-link v-for="(link, index) in validLinks" :key="link.path || index" :to="link.path || '/'"
					class="nav-link" :class="{ 'active': $route.path === link.path }">
					{{ link.text || '未命名链接' }}
				</router-link>
			</nav>

			<!-- 移动端菜单按钮 -->
			<button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="切换菜单">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</div>
	</header>
</template>

<script setup>
	import {ref,computed} from 'vue'
	import {useStore} from '@/store/dataStore'

	const store = useStore()
	const navLinks = store.navLinks
	// 添加数据过滤
	const validLinks = computed(() => {
		return (store.navLinks || []).filter(link => {
			return link && typeof link === 'object' && 'path' in link
		})
	})

	const toggleMobileMenu = () => {
		store.toggleMobileMenu()
	}
</script>

<style lang="scss" scoped>
	

	body {
		font-family: "Microsoft YaHei", "微软雅黑", "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
	}

	.app-header {
		position: relative;
		font-family: yahei;
		font-size: $f16;
		top: 0;
		z-index: 1000;		
		display: flex;
    	justify-content: center;

		.container {
			position: absolute;
			padding-top:rem(27);
			width:rem(1280);
			max-width: 1280px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: rem(83);
			@media(max-width: $mobile-breakpoint){
				width: 100vw;
			}
		}

		.logo {
			img {				
				height: rem(50);
				width:rem(166);
				width: auto;
			}
			@media (max-width: $mobile-breakpoint) {
				img{
					margin-left:rem(20);
					height: rem(30);
					width:rem(110);
				}
			}
		}

		.desktop-nav {
			width:rem(900);
			padding-right: rem(200);
			display: flex;
			justify-content: space-around;
			margin-left: rem(40);
			@media(max-width: $mobile-breakpoint){
				padding-right: rem(20);
			}

			.nav-link {
				color: rgba(255, 255, 255);
				text-decoration: none;
				padding: 2px;
				transition: opacity 0.3s;
				position: relative;

				&:hover {
					opacity: 0.8;
				}

				&.active {
					font-weight: bold;
					&::after {
						content: '';
						position: absolute;
						bottom: vw(-10);
						left: 0;
						width: 100%;
						height: 2px;
						background: #4CF0FF;
					}
				}
			}
		}

		.mobile-menu-btn {
			display: none;
			background: none;
			border: none;
			cursor: pointer;
			padding: 5px;

			.bar {
				display: block;
				width: 25px;
				height: 3px;
				margin: 5px 0;
				background: white;
				transition: 0.3s;
			}
		}
	}

	@media (max-width: 768px) {
		
	}
</style>