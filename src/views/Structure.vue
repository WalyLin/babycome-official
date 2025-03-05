<!-- src/views/HomePage.vue -->
<template>
    <div class="home-page">
         
      <!-- 主图Banner -->
      <section class="top-banner">
        
        <div class="banner-content">
            <div class="">
              <img src="@/assets/images/Georgian.png" alt="banner" class="content-image">  
              <div class="consult-btn-container">
                <span class="consult-btn">立即咨询服务</span>
                <img src="" alt="">
              </div>
            </div>          
          </div>
                            
      </section>
    
      <!-- 公司优势 -->
      <section class="payment-process">
        <h3>公司优势</h3>
        <p class="desc">这里放公司优势的简要描述详情</p>      
        <img src="@/assets/images/payment-process2.png" alt="">
      </section>
  
        <!-- 公司优势 -->
      <section class="payment-process">
        <h3>合作医院</h3>
        <p class="desc">这里放公司优势的简要描述详情 拷贝</p>      
        <img src="@/assets/images/payment-process2.png" alt="">
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  </script>
  
  <style lang="scss" scoped>
  
  .home-page{
    margin: auto;
    width:rem(1920);
    z-index: 0;
    position: relative;
    background: #F4F5FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: rem(39);
  }
  .top-banner {
    background: url('@/assets/images/advantage/banner2.png') no-repeat;
    background-size: cover;
    width:rem(1920);
    display: flex;
    justify-content: center;
    position: relative;
    
    height: rem(700);
      .banner-container{
        width:rem(1280);
      }
    .banner-content {
      width:rem(1280);
      display: flex;
      align-items: center;
  
      .content-image{
        width:rem(660);
        height:(120);
      }
      .consult-btn-container{
        background-image: url('@/assets/images/hom_ljzx.png');
        background-size: cover;
        width: rem(267);
        height:rem(70);
        padding: 12px 30px;
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
  
  
  .payment-process {
    padding-top: rem(66);
    position: relative;
    width: rem(1920);
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: rem(1280);
    }
    h3 {
      text-align: center;
      font-weight: normal;
      margin-bottom: rem(14);
      font-size: $f30;
      color: #050F3F;
    }
    .desc {
      margin-bottom: rem(64);
      text-align: center;
      font-size: $f16;    
      color: #A7A8B8;
    }
    .more{    
      cursor: pointer;
      width:rem(161);
      font-size: $f16;
      color:#FFFFFF;
      padding-left: rem(34);
      line-height: rem(45);
      margin:auto;
      margin-top:rem(28);
      height:rem(45);
      border-radius: rem(22);
      background: url('@/assets/images/axmm-xq.png');
      background-size: cover;
      transition: color 0.2s , transform 0.3s;
        &:hover{
          color: #ddd;
          transform: scale(1.03);
        }
    }  
  }
    
  </style>