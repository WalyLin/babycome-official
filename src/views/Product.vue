<!-- src/views/HomePage.vue -->
<template>
  <div class="page-wrap">
         
    <!-- 主图Banner -->
    <section class="top-banner">      
      <div class="banner-content">
          <div class="banner-content-1">
            <img src="@/assets/images/Georgian.png" alt="banner" class="content-image">  
            <div class="consult-btn-container">
              立即咨询服务
              <img src="" alt="">
            </div>
          </div>          
        </div>                        
    </section>   

     <section class="service">
       <p class="title">基础服务套餐</p>
       <p class="desc">这里放基础服务的简要描述详情</p>
       
        <div class="service-content-1">
          <p class="service-content-1-title"><b>$8000</b>(美金)</p>
          <p class="service-content-1-desc">套餐涵盖整个项目过程中与医院对接服务及项目手续文件流程服务，客户可以自由选择自己心仪的医院，费用客户与医院直接交
            付我们从旁协助，项目全程跟踪汇报。</p>
        </div>
        <div class="service-content-2">
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
          <div class="service-content-2-item">
            <img src="@/assets/images/product/duihao-da.png" alt="" class="service-content-2-item-icon">
            <p class="service-content-2-item-title">海牙认证办理</p>
          </div>
        </div>       
     </section>

     <section class="base">
      <p class="title">基础服务套餐</p>
      <p class="desc">这里放基础服务的简要描述详情</p>
      <div class="base-content-1">
        <p class="base-content-1-title"><b>$8000</b>(美金)</p>
        <p class="base-content-1-desc">套餐涵盖整个项目过程中与医院对接服务及项目手续文件流程服务，客户可以自由选择自己心仪的医院，费用客户与医院直接交
          付我们从旁协助，项目全程跟踪汇报。</p>
      </div>
      <div class="base-content-2">
        <div v-for="item in baseList" class="base-content-2-item">
          <div class="base-content-2-item-title">孕母板块</div>
          <div class="base-content-2-item-desc">
            <img src="@/assets/images/product/duihao-sm.png" alt="">
            <p>包含一下全部</p>
          </div>
          <div class="base-content-2-item-list">
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>爱心妈妈提供（18-38岁）</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>爱心妈妈提供（18-38岁）</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>全流程进度表格化每10天更新
                主动发送</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>全流程进度表格化每10天更新
                主动发送</p>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section class="base success">
      <p class="title">包成功套餐</p>
      <p class="desc">这里放基础服务的简要描述详情</p>
      <div class="base-content-1">
        <p class="base-content-1-title"><b>$69000</b>(美金)</p>
        <p class="base-content-1-desc">套餐涵盖客户、供体、孕母、手续、保障五大板块，全项目流程费用，无限次促排，无限次移植，直至生下健康的宝宝。</p>
      </div>
      <div class="base-content-2">
        <div v-for="item in baseList" class="base-content-2-item">
          <div class="base-content-2-item-title">孕母板块</div>
          <div class="base-content-2-item-desc">
            <img src="@/assets/images/product/duihao-sm.png" alt="">
            <p>包含一下全部</p>
          </div>
          <div class="base-content-2-item-list">
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>爱心妈妈提供（18-38岁）</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>爱心妈妈提供（18-38岁）</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>全流程进度表格化每10天更新
                主动发送</p>
            </div>
            <div class="base-content-2-item-list-item">
              <span></span>
              <p>全流程进度表格化每10天更新
                主动发送</p>
            </div>
          </div>
        </div>
      </div>
     </section>

     
     <section class="addservice">
      <p class="title">增值服务价格</p>
      <p class="desc">这里放基础服务的简要描述详情</p>
      <div class="addservice-content">
        <div class="addservice-content-item">
          <div class="addservice-content-item-info">
            <p class="addservice-content-item-info-dot"></p>            
            <p class="addservice-content-item-info-desc">
              【<span class="addservice-content-item-info-price">$600</span>】
            供精供卵者信息材料核查分析（核查卵m之前取卵数量以及胚胎合成情况着床情况）
            </p>
          </div>
        </div>
      </div>
     </section>
     <section class="pay"></section>



  </div>
  </template>
  
  <script setup>  
  import { ref } from 'vue'
  import { inject } from 'vue'
  
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
  background: url('@/assets/images/banner4.png') no-repeat;
  background-size: cover;
  width:rem(1920);
  display: flex;
  justify-content: center;
  position: relative;
  height: rem(700);

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
    }

    .content-image{
      width:rem(660);
      @media(max-width: $mobile-breakpoint){
        width: 80%;
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

.service,.success,.base{
  padding-top: rem(67);
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-content-1{
    border-radius: 20px 20px 0px 0px;
    padding: rem(41) rem(116);
    color:#FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    max-height:207px;
    @media(max-width: $mobile-breakpoint){
      padding: rem(41) rem(20);      
    }
    &-title{    
      font-size: rem(42);    
      margin-bottom: rem(27);
    }
    &-desc{
      font-size: rem(18);
      text-align: center;
    }
  }
}


.service{
  &-content-1{
    background: linear-gradient(90deg, #5398DF 0%, #10459C 100%);   
  }

  .service-content-2{
    max-width: 1280px;
    width: 100%;    
    padding-bottom: rem(44);
    background: #FFFFFF;
    border-radius: 0 0 rem(20) rem(20);
    display: flex;
    align-items: center;
    justify-self: start;
    flex-wrap: wrap;

    &-item{
      display: flex;      
      align-items: center;
      justify-content: center;
      width: 25%;
      padding-top: rem(39);
      @media(max-width: $mobile-breakpoint){
        width: 33%;
      }

      &-icon{
        width: rem(27);
      }
      &-title{
        margin-left:9px;
      }
    }
  }
}

.base{
  &-content-1{
    background: linear-gradient(90deg, #C6A04E 0%, #784A1D 100%);        
  }
  &-content-2{
    max-width: 1280px;
    width: 100%;
    margin-top: rem(19);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: rem(477);
    @media(max-width: $mobile-breakpoint){
      justify-content: center;
    }

   &-item {
    width: 19%;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    border-radius: rem(10);
  
    @media(max-width: $mobile-breakpoint){
      width: 90%;      
    }

    &-title{
      width: 100%;
      font-weight: bold;
      color: #FFFFFF;
      background: linear-gradient(90deg, #AFB2BE 0%, #7B7E92 100%);
      height: rem(115);
      border-radius: rem(10) rem(10) 0 0 ;
      display: flex;
      justify-content: center;
      align-items: center;      
      font-size: rem(16);
      @media(max-width: $mobile-breakpoint){
        font-size: 13px;
        height: 56px;
        width: 80%;
      
      }
    }

    &-desc{
      padding: rem(20);
      margin: 0 rem(14);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #23BE47;
      font-size: rem(14);
      border-bottom: 2px solid #EDEEF2;
      img {
        width: 21px;
        margin-right: 3px;
      }
      p{
        font-weight: bold;
      }
    }
    &-list{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: start;
      padding: 0 rem(18);
      flex-wrap: wrap;
    
      &-item{
        font-size: rem(14);
        margin-top: 10px;
        color: #80808C;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #23BE47;
          margin-right: 4px;
        }       
      }
    }
   }
  }

}

.success{
  .base-content-1{
    background: linear-gradient(90deg, #B575E2 0%, #501D78 100%);
  }
}
  
  </style>