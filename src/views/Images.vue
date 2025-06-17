<!-- src/views/HomePage.vue -->
<template>
  <div class="page-wrap">
    <!-- 主图Banner -->
    <section class="top-banner">      
      <div class="banner-content">
          <div class="banner-content-1">
            <div class="banner-title">格鲁吉亚实时资讯</div> 
            <div class="banner-subtitle">Georgia Real Time Information</div>             
            <div class="consult-btn-container">
              立即咨询服务
              <img src="" alt="">
            </div>
          </div>          
        </div>                        
    </section> 
    <section>
        <div class="list">
            <img alt="" v-for="v in list" :src="v">
        </div>
    </section>
    

    
  </div>
</template>
  
<script setup>  
import { ref,inject,computed,onMounted } from 'vue'    
import commonApi from '@/api/common';

import { useRoute } from 'vue-router'

const list = ref([])
const route = useRoute()
const id = route.params.id


commonApi.showImage({'uuid':id}).then(res => {
    list.value=res.data
}).catch(err=>{
    console.error(err)
})

</script>
  

<style lang="scss" scoped>
.page-wrap{
  margin: auto;  
  z-index: 0;
  position: relative;
  background: #F4F5FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: rem(39);    
}

section{
  max-width: 1920px;
  width: 100vw;  
}

@media (max-width: $mobile-breakpoint) {
  .home-page section{
    width: 100vw !important;
  }    
}

.top-banner {
  background: url('@/assets/images/banner5.png') no-repeat;
  background-size: 100% 100%;
  width:100% ;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  position: relative;
  height: rem(556);

  @media(max-width: $tablet-breakpoint){
    height: rem(400);
  }
  @media(max-width: $mobile-breakpoint){
    background-size: 200% 100%;
    background-position: -344px;
    height: rem(400);
  }
  
  .banner-container{
    width:rem(1280);
  }
  .banner-content {
    width:100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    @media (max-width: $tablet-breakpoint) {
      padding-left: 20px;
    }
    @media (max-width: $mobile-breakpoint) {
      padding-left: 0;
    }
    .banner-content-1{
      display: flex;
      flex-direction: column;
      @media(max-width: $tablet-breakpoint){
        align-items: center;
        margin-top:rem(100)
      }

      .banner-title{
        color: #FFF;
        font-weight: bold;
        font-size: rem(68);
        text-shadow: 0px 3px 7px rgba(36,100,173,0.79);
        font-style: italic;
        @media(max-width: $mobile-breakpoint){
          font-size: rem(50);        
        }
      }
      .banner-subtitle{
        color: #FFF;
        font-weight: bold;
        font-size: rem(48);
        text-shadow: 0px 3px 7px rgba(36,100,173,0.79);
        font-style: italic;
        opacity: 0.46;
        margin-bottom: rem(35);
        @media(max-width: $mobile-breakpoint){
          font-size: rem(35);
          text-align: center;
        }

      }
    }

    
    .consult-btn-container{
      background: url('@/assets/images/hom_ljzx.png') no-repeat;
      background-size: cover;
      width: rem(267);
      height:rem(70);      
      font-size: $f22;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: rem(42);
      color:#FFF;
      border-radius: rem(35);
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }

    }
  }  
}

  .list{    
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    img{
        // width: rem(200);
        margin-bottom: 15px;
        margin-left: 2.5%;
    }
  }

</style>