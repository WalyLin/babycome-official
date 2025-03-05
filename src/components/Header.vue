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
	import {
		ref,
		computed
	} from 'vue'
	import {
		useStore
	} from '@/store/dataStore'

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
		font-size: 16px;
		top: 0;
		z-index: 1000;		
		display: flex;
    	justify-content: center;

		.container {
			position: absolute;
			padding-top:vw(27);
			max-width: 1200px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			height: 83px;
		}

		.logo {
			z-index: 1;
			margin-left:vw(-220);
			img {				
				height: 50px;
				width: auto;
			}
		}

		.desktop-nav {	
			margin-top:vw(-16);
			display: flex;
			gap: vw(60);
			margin-left: vw(100);

			.nav-link {
				color: rgba(255, 255, 255);
				text-decoration: none;
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
		.desktop-nav {
			display: none !important;
		}

		.mobile-menu-btn {
			display: block !important;
		}
	}
</style>