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

    <section class="business">
      <p class="title">企业动态</p>
      <p class="desc">这里放企业动态的简要描述详情</p>
      <div class=""></div>
    </section>

    <section class="news">
      <p class="title">格鲁吉亚动态</p>
      <p class="desc">这里放企业动态的简要描述详情</p>
      <img src="@/assets/images/payment-process2.png" alt="">
    </section>



  </div>
</template>
  
<script setup>  
import { ref,inject } from 'vue'    
const isMobile = inject('isMobile')  

const baseList = [
{
  title: 'invitro clinic',
},
{
  title: 'invitro clinic',
},{
  title: 'invitro clinic',
},{
  title: 'invitro clinic',
},{
  title: 'invitro clinic',
},
  
];

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
  background-size: cover;
  width:rem(1920);
  display: flex;
  justify-content: center;
  position: relative;
  height: rem(556);

  @media(max-width: $mobile-breakpoint){
    height: rem(400);
  }  
  
  .banner-container{
    width:rem(1280);
  }
  .banner-content {
    width:rem(1280);    
    display: flex;
    align-items: center;
    @media (max-width: $mobile-breakpoint) {
      width: 100vw;
    }
    .banner-content-1{
      display: flex;
      flex-direction: column;
      @media(max-width: $mobile-breakpoint){
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

.title{
  color:#050F3F;
  font-size: $f30;
}
.desc{
  color: #A7A8B8;
  font-size: rem(16);
  margin: rem(14) 0 rem(31);  
}

.business,.news{
  padding-top: rem(67);
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.business{

}

.news{
  
}

  
</style>