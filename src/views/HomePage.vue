<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
       
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
  <!-- 日常专栏 -->
    <section class="top-daily-news">
      <div class="top-daily-news-item">
        <img src="@/assets/images/3btn_1.png" alt="爱心妈妈"></img>
        <div>
          <h3>爱心妈妈专栏</h3>
          <p>专栏详情，自己补充，文字控制在一行</p>
        </div>
      </div>

      <div class="top-daily-news-item">
        <img src="@/assets/images/3btn_2.png" alt="爱心妈妈"></img>
        <div>
          <h3>贝康日常</h3>
          <p>专栏详情，自己补充，文字控制在一行</p>
        </div>
      </div>

      <div class="top-daily-news-item">
        <img src="@/assets/images/3btn_3.png" alt="爱心妈妈"></img>
        <div>
          <h3>奶爸专栏</h3>
          <p>专栏详情，自己补充，文字控制在一行</p>
        </div>
      </div>
    </section>



    <!-- 核心优势 -->
    
    <section class="core-advantages">
      
      <h2>为什么要选择贝康？</h2>
      <p>BabyCome永远保持三个核心高效生产，顺利生产，优质生产</p>
      <CardCarousel />      
      <div class="more">了解更多</div>
    </section>

    <!-- 爱心妈妈 -->
    <section class="love-mama">
      <div class="love-mama-wrap">
        <div class="love-mama-head">
          <h3>爱心妈妈专栏</h3>
          <p>爱心妈妈专栏简介，文字自己替换</p>
        </div>
        <div class="love-mama-content">
          <div class="mama-card">
          
            <div v-for="item in mamaList" :class="{'mama-card-item':true , 'mama-card-item-active':item.name_en == currentMama.name_en  }" @click="currentMama = item">
              <h3>{{ item.name_en }}</h3>
              <p>({{ item.name_cn }})</p>
            </div>
            
          </div>
          <div class="mama-card-tiao">
            <div v-for="item in mamaList" :class="item.name_en == currentMama.name_en?'active':'' ">            
            </div>
          </div>
          <div class="mama-detail">
            <h3 class="mama-detail-title"><span>{{ currentMama.name_en }}</span>-爱心妈妈简介</h3>
            <p class="mama-detail-desc">{{ currentMama.desc }}</p>
            <div class="mama-win">
              <p class="mama-win-item">爱心妈妈获得的荣誉</p>
              <p class="mama-win-item">爱心妈妈获得的荣誉</p>
              <p class="mama-win-item">爱心妈妈获得的荣誉</p>
            </div>
            <div class="mama-detail-comment">
              <div>
                <p><span>{{ currentMama.age }}</span>岁</p>
                <p>年龄</p>
              </div>
              <p v-if="!isMobile" class="sep"></p>
              <div>
                <p><span>{{ currentMama.service_times }}</span>次</p>
                <p>服务过家庭数</p>
              </div>
              <p v-if="!isMobile" class="sep"></p>
              <div>
                <p><span>{{ currentMama.comment_rate }}</span>%</p>
                <p>至今为止差评率</p>
              </div>
            </div>
          </div>
        </div>
        <div class="more">了解更多</div>
      </div>
      
    </section>
   
    <!-- 付款流程 -->
    <section class="payment-process">
      <h3>付款流程</h3>
      <p class="desc">付款流程透明，无隐藏消费，一站式费用</p>      
      <img src="@/assets/images/payment-process2.png" alt="">
      <div class="more">查看套餐</div>
    </section>

   
  </div>
</template>

<script setup>
import CardCarousel from '@/components/CardCarousel.vue';
import { ref } from 'vue'
import { inject } from 'vue'
const isMobile = inject('isMobile')

const mamaList = [{
  id:1,
  name_en: 'Nino Ninidze',
  name_cn: '苏珊',
  desc:'年龄: 在21岁之间，身体健康。身体和心理评估合格，已经生育x个宝宝，经验丰富。',
  age:21,
  service_times:2,
  comment_rate:0
},{
  id:2,
  name_en: 'Ia Sukhitashvili',
  name_cn: '迪丽雅',
  desc:'年龄: 在33岁之间，身体健康。身体和心理评估合格，已经生育x个宝宝，经验丰富。',
  age:33,
  service_times:11,
  comment_rate:0
},{
  id:3,
  name_en: 'Tamar Skhirtladze',
  name_cn: '贝丝',
  desc:'年龄: 在27岁之间，身体健康。身体和心理评估合格，已经生育x个宝宝，经验丰富。',
  age:27,
  service_times:4,
  comment_rate:0
}]

const currentMama = ref({});
currentMama.value=mamaList[0]

</script>

<style lang="scss" scoped>

.home-page{
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
  background: url('@/assets/images/banner1.png') no-repeat;
  background-size: cover;
  width:rem(1920);
  display: flex;
  justify-content: center;
  position: relative;
  height: rem(700);

  @media(max-width: $mobile-breakpoint){
    background-size: 125% 100%;
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

.top-daily-news{
  border-radius: 20px;  
  width:rem(1280);
  display: flex;  
  padding: rem(45) rem(59);
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  position: relative;
  transform: translate(0, -50%);
  @media(max-width: $mobile-breakpoint){  
    transform:none;
    padding: 22px;
  }

  .top-daily-news-item{    
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: $mobile-breakpoint){  
      flex-direction: column;
    }
    img{
      width:rem(82);
      height: rem(62);
      margin-right: rem(17);
      @media(max-width: $mobile-breakpoint){  
        margin-right: 0;
      }
    }
    h3{
      font-size: $f20;
      color:#050F3F;
      @media(max-width: $mobile-breakpoint){  
        text-align: center;
      }
      
    }
    p{  
      color: #A7A8B8;
      font-size: $f14;
      @media(max-width: $mobile-breakpoint){  
        padding: 5px 22px 0;
      }
    }
  }
}
.core-advantages {
  width: rem(1280);
  margin-top:rem(-6);
  padding-bottom: rem(46);
  @media(max-width: $mobile-breakpoint){
    margin-top: rem(30);
  }

  h2 {
    font-weight: normal;
    color:#050F3F;
    font-size: $f30;
    text-align: center;
    margin-bottom: rem(10);    
  }
  p{
    color:#A7A8B8;
    font-size: $f16;
    text-align: center;
  }

  

  .card-change{
      display: flex;
      justify-content: space-between;
      position: relative;

      a{
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .card-btn-left{
        position: absolute;
        top:rem(-125);
        left:5px;
        img{
          width:rem(21.5);
        }
        
      }
      .card-btn-right{
        position: absolute;
        top:rem(-125);
        right:5px;
        img{
          width:rem(21.5);
        }
      }
    }

  .more{    
    cursor: pointer;
    width:rem(161);
    font-size: $f16;
    color:#FFFFFF;
    padding-left: rem(34);
    line-height: rem(45);
    margin:auto;
    margin-top:rem(18);
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

.love-mama{
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  .love-mama-wrap{
    background: url('@/assets/images/axmm.png') no-repeat;
    background-size: cover;    
    width:100%;
    max-width: 1920px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: rem(22);
    @media(max-width: $mobile-breakpoint){
      width:100vw;
    }
  }

  .love-mama-head{
    text-align: center;
    margin-top:rem(61);
    h3{
      font-size: $f30;
      color:#050F3F;
    }
    p{
      margin-top: rem(14);
      margin-bottom: rem(39);
      font-size: $f16;
      color:#A7A8B8;
    }
  }

  .love-mama-content{
    display: flex;        
    padding-top:rem(5);
    width: rem(1280);
    background: linear-gradient(to right, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 80%)50%, 
        rgba(255, 255, 255, 0) 100%
    );
    border-radius: rem(20);
    @media(max-width: 980px){
      width: 95vw;
    }

    .mama-card{
      width:rem(280);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .mama-card-item{
        height:rem(150);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        cursor: pointer;


        h3{
          color:#050F3F;
          font-size: $f20;
          margin-bottom: rem(3);
          font-weight: normal;
        }
        p{
          color: #A7A8B8;
          font-size: $f16;
        }
      }
      .mama-card-item-active{
        background-image: url('@/assets/images/axmm_btn.png');
        background-size: cover;
        
        h3{color:#FFFFFF;font-weight: bold;}
        p{
          color:#D5E8FF
        }
      }
    }

    .mama-card-tiao {
      display: flex;
      flex-direction: column;
      margin-left: rem(3);
      div{
        flex: 1;
        height:rem(150);
        width:rem(4);
        background-color: #B9DAFF;
      }
      .active{
        background-color: #5884FC;
      }
    }

    .mama-detail{
      display: flex;
      flex-direction: column;      
      @media(max-width: 980px){
        
        overflow: hidden;
        padding-right: 13px;
      }

      .mama-detail-title{
        padding-top: rem(59);        
        padding-left:rem(31);
        white-space: nowrap;
        font-weight: bold;
        font-size: $f22;
        color: #050F3F;        
      }
      .mama-detail-title::after{
        content: '';
        display: block;
        width: rem(51);
        height: 4px;
        border-radius: 2px;
        background-color: #FF5B28;
        margin-top: rem(36);
      }
      .mama-detail-desc{
        padding-left:rem(31);
        color:#646A89;
        margin-top:rem(27);
        margin-bottom: rem(51);
        font-size: $f16;
      }
      .mama-win{
        padding-left:rem(31);
        padding-bottom: rem(91);
        @media(max-width: 980px){
          padding-bottom: 6px;
        }
        .mama-win-item{
          padding:rem(2) rem(15);
          height:rem(45);          
          line-height: rem(45);
          text-align: center;
          font-size: $f16;
          float: left;
          margin-right: rem(21);
          color:#FFFFFF;
          background-color: #4B63FF;
          border-radius: rem(22);
          margin-bottom:2px;
        }
      }
      .mama-detail-comment{
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        padding-left:rem(31);        
        div{
          height:rem(58);
          margin-left:rem(78);
          @media(max-width: $mobile-breakpoint){
            display: flex;
            align-items: baseline;
            margin-left:rem(38);
          }
          p{
            color:#646A89;
            font-size: $f16;
            span{
              font-family: 'Square721BT-Bold';
              font-weight: bold;
              font-size: $f30;
              color: #00CCFF;
              letter-spacing: 3px;
            }
          };
        }
        .sep{
          width: 1px;
          margin-left:rem(78);
          height:rem(58);
          background-color: #646A89;
          opacity: .3;
          transform: rotate(18deg);
        }
      }
    }
    
  }

  .more{    
      cursor: pointer;
      width:rem(161);
      font-size: $f16;
      color:#FFFFFF;
      padding-left: rem(34);
      line-height: rem(45);
      margin:auto;
      margin-top:rem(31);
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
.service-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem 5%;

  .feature-card {
    text-align: center;
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    h3 {
      color: $primary-blue;
      margin-bottom: 1rem;
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
    @media(max-width: $mobile-breakpoint){
      width: 90vw;
    }
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