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
  <!-- 公司优势 -->
  <section class="advantage-carousel">
    <h3>公司优势</h3>
    
    <div class="swiper-container">
      <p>这里放公司优势的简要描述详情</p>

      <swiper
        :modules="modules"
        v-bind="swiperOptions"
        class="custom-swiper"
        @swiper="onSwiper"
        @mouseenter="pauseAutoplay"
        @mouseleave="resumeAutoplay"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-content">
            <div class="advantage-cards">
              <div
                v-for="(card, cardIndex) in slide.cards"
                :key="cardIndex"
                :class="{ 'advantage-card': true, 'advantage-card-main': cardIndex === currentSlideIndex }"
              >
                <div class="main-detail" v-show="cardIndex === currentSlideIndex">
                  <div class="main-detail-content">
                    
                    <h3><img :src="card.icon" alt=""> {{ card.title }}</h3>
                    <p>{{ card.desc }}</p>
                  </div>
                  <div class="main-detail-image"><img src="@/assets/images/advantage/ys-main-1-ph.png" alt=""></div>
                </div>
                <div class="other-detail" v-show="cardIndex !== currentSlideIndex">
                  <h3 class="other-detail-title">{{ card.title }}</h3>
                  <p class="other-detail-bar"></p>
                </div>
                
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </swiper>
    </div>

  </section>

  <section class="hospital">
    <h3 class="hospital-title">合作医院</h3>
    <p class="hospital-desc">这里放公司优势的简要描述详情</p>
    <div class="hospital-content-1">
      <div v-for="(item,index) in list" :key="index" class="hospital-content-1-item">
        <img :src="item.icon" alt="" class="hospital-content-1-item-icon">
        <p class="hospital-content-1-item-title">{{ item.title }}</p>
        <p class="hospital-content-1-item-desc">{{ item.desc }}</p>
        <p v-for="text in item.tags" class="hospital-content-1-item-tags">{{ text }}</p>
      </div>
    </div>
    <div class="hospital-content-2">
      <div class="hospital-content-2-item">
        <p class="hospital-content-2-item-title"><span class="hospital-content-2-item-title-1">21</span> <span class="hospital-content-2-item-title-2">年</span></p>
        <p class="hospital-content-2-item-subtitle">深耕辅助生殖行业</p>
        <p class="hospital-content-2-item-desc">我是一个详情介绍，我是一个详情介我是一个详情介绍绍</p>
      </div>
      <div class="hospital-content-2-item-sep"></div>
      <div class="hospital-content-2-item">
        <p class="hospital-content-2-item-title"><span class="hospital-content-2-item-title-1">600</span> <span class="hospital-content-2-item-title-2">家</span></p>
        <p class="hospital-content-2-item-subtitle">深耕辅助生殖行业</p>
        <p class="hospital-content-2-item-desc">我是一个详情介绍，我是一个详情介我是一个详情介绍绍</p>
      </div>
      <div class="hospital-content-2-item-sep"></div>
      <div class="hospital-content-2-item">
        <p class="hospital-content-2-item-title"><span class="hospital-content-2-item-title-1">0</span> <span class="hospital-content-2-item-title-2">%</span></p>
        <p class="hospital-content-2-item-subtitle">深耕辅助生殖行业</p>
        <p class="hospital-content-2-item-desc">我是一个详情介绍，我是一个详情介我是一个详情介绍绍</p>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { ref } from 'vue'
import { inject } from 'vue'

const isMobile = inject('isMobile')
const modules = [Autoplay,Pagination];


const slides = [
  {
    title: '公司优势',
    desc: '这里放公司优势的简要描述详情',
    cards: [
      {
        title: '保障合法权益',
        desc: '双律师坐镇，海外求子保障合法权益，规避不良机构，降低双国家政策变导致诉讼纠纷子不归家。',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '稳定爱心妈妈',
        desc: '常年上百优质爱心妈妈储备常驻第比利斯，移植等待零延迟',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '孕期无忧',
        desc: '专业医疗团队全程监护，爱心妈妈统一科学管理',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '双院区独立办公',
        desc: '全格鲁吉亚唯一双院区独立办公室机构，医疗资源有保障',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      }
    ]
  },
  {
    title: '公司优势',
    desc: '这里放公司优势的简要描述详情',
    cards: [
      {
        title: '保障合法权益',
        desc: '双律师坐镇，海外求子保障合法权益，规避不良机构，降低双国家政策变导致诉讼纠纷子不归家。',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '稳定爱心妈妈',
        desc: '常年上百优质爱心妈妈储备常驻第比利斯，移植等待零延迟',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '孕期无忧',
        desc: '专业医疗团队全程监护，爱心妈妈统一科学管理',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '双院区独立办公',
        desc: '全格鲁吉亚唯一双院区独立办公室机构，医疗资源有保障',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      }
    ]
  },
  {
    title: '公司优势',
    desc: '这里放公司优势的简要描述详情',
    cards: [
      {
        title: '保障合法权益',
        desc: '双律师坐镇，海外求子保障合法权益，规避不良机构，降低双国家政策变导致诉讼纠纷子不归家。',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '稳定爱心妈妈',
        desc: '常年上百优质爱心妈妈储备常驻第比利斯，移植等待零延迟',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '孕期无忧',
        desc: '专业医疗团队全程监护，爱心妈妈统一科学管理',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '双院区独立办公',
        desc: '全格鲁吉亚唯一双院区独立办公室机构，医疗资源有保障',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      }
    ]
  },
  {
    title: '公司优势',
    desc: '这里放公司优势的简要描述详情',
    cards: [
      {
        title: '保障合法权益',
        desc: '双律师坐镇，海外求子保障合法权益，规避不良机构，降低双国家政策变导致诉讼纠纷子不归家。',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '稳定爱心妈妈',
        desc: '常年上百优质爱心妈妈储备常驻第比利斯，移植等待零延迟',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '孕期无忧',
        desc: '专业医疗团队全程监护，爱心妈妈统一科学管理',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      },
      {
        title: '双院区独立办公',
        desc: '全格鲁吉亚唯一双院区独立办公室机构，医疗资源有保障',
        icon:'/src/assets/images/advantage/ys-main-1.png'
      }
    ]
  },
  // 可以添加更多slide...
];
// 当前幻灯片索引
const currentSlideIndex = ref(0);

// Swiper 实例
let swiperInstance;

// Swiper 配置项
const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 11000000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true,
  pagination: {
    clickable: true
  }
};

// Swiper 初始化回调
const onSwiper = (swiper) => {
  swiperInstance = swiper;
  swiper.on('slideChange', () => {
    currentSlideIndex.value = swiper.activeIndex;
  });
};

// 暂停自动播放
const pauseAutoplay = () => {
  if (swiperInstance) {
    swiperInstance.autoplay.pause();
  }
};

// 恢复自动播放
const resumeAutoplay = () => {
  if (swiperInstance) {
    swiperInstance.autoplay.start();
  }
};

const list = [
{
  title: 'invitro clinic',
  desc: 'invitro clinic是格鲁吉亚第一家进行辅助生殖的专门医院。院长 Natalia进行了格鲁吉亚第一次人工移植手术，具有悠久的历史和世界领先的专业辅助生殖技术。',
  icon:'/src/assets/images/advantage/yy1.png',
  tags:['医生数量多，移植速度快','移植成功率非常稳定','拥有超高的移植成功率'],
},
{
  title: 'zhordania clinic',
  desc: 'zhordania clinic 前身是1958年由zhordania教授成立的人类生殖研究所，距今将近70年的历史。同 时 格 鲁 吉 亚 国 家 生 殖 医 学 中 心 也 设 立 在zhordania clinic。',
  icon:'/src/assets/images/advantage/yy2.png',
  tags:['医生数量多，移植速度快','移植成功率非常稳定','拥有超高的移植成功率'],
},
{
  title: 'beta clinic',
  desc: 'invitro clinic是格鲁吉亚第一家进行辅助生殖的专门医院。院长 Natalia进行了格鲁吉亚第一次人工移植手术，具有悠久的历史和世界领先的专业辅助生殖技术。',
  icon:'/src/assets/images/advantage/yy3.png',
  tags:['医生数量多，移植速度快','移植成功率非常稳定','拥有超高的移植成功率'],
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
  background: url('@/assets/images/advantage/banner2.png') no-repeat;
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

.advantage-carousel {
  width: 100%;
  display: flex;
  padding:rem(72) 0 rem(32);
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: #f0f4f8;
  h3{
    font-weight: normal;
    font-size: rem(30);
    color:#050F3F;
    margin-bottom: rem(14);
  }
 

  .swiper-container {
    width: 100%;
    max-width: 1920px;
    background: url('@/assets/images/advantage/yuan.png') no-repeat;
    background-size: cover;    
    display: flex;
    justify-content: center;
    flex-direction: column;    

    p{
      text-align: center;
      font-size: rem(16);
      color: #A7A8B8;
      margin-bottom: rem(38);
    }
  }
  .custom-swiper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px; // 给分页器留出空间    

    // 分页器样式
    :deep(.swiper-pagination) {
      bottom: 10px;
      
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: rgba(#2c3e50, 0.3);
        opacity: 1;
        transition: all 0.3s;                
      }
      .swiper-pagination-bullet-active {
        background: #007af3;
        transform: scale(1.2);
      }
    }



    .slide-content {
      border-radius: 12px;
      transition: transform 0.3s;
      @media(max-width: $mobile-breakpoint) {
        width: 100vw;
      }
      
      .section-title {
        font-size: 28px;
        color: #2c3e50;
        margin-bottom: 15px;
      }

      .section-desc {
        font-size: 16px;
        color: #7f8c8d;
        margin-bottom: 30px;
      }

      .advantage-cards {
        display: flex;
        justify-content: center;

        .advantage-card {
          border-radius: 8px;
          margin: 0 4px;
          width: rem(180);  
          transition: transform 0.3s ease;

          &:hover {
            transform: translateY(-5px);
          }

          .main-detail{
            display: flex;
            &-content{
              flex: 1;
              padding:rem(33) rem(23);
              background-color: #FFF;
              h3 {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;   
                font-size: rem(18);                                         
                img {
                  margin-right: rem(10);
                }
              }
              
              p{
                font-size: rem(16);
              }
            }
            &-image{
              flex: 1;
              img{
                width: 100%;
                height: 100%;
              }
            }

          }
          .other-detail{
            height:100%;
            background: url('@/assets/images/advantage/ys-sq.png');
            background-size: 100% 100%;            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            &-title{
              font-size: rem(18);
              text-align: center;
              color:#FFF;
            }
            &-bar{
              width: rem(32);
              background-color: #FF5B28;
              height: 2px;
            }
          }          
        }
        .advantage-card-main{
          background: #CCC;
          width:rem(692);
        }
      }
    }
  }
}
// 响应式设计
@media (max-width: 768px) {
  .advantage-carousel {
    padding: 40px 15px;
    
    .custom-swiper {
      :deep(.swiper-pagination) {
        bottom: 5px;
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
        }
      }
      .slide-content {
        padding: 20px;
        
        .section-title {
          font-size: 24px;
        }

        .advantage-cards {
          grid-template-columns: 1fr;
          
          .advantage-card {
            padding: 15px;
          }
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .advantage-carousel {
    .custom-swiper {
      .slide-content {
        .advantage-cards {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
}

.hospital{
  width: 100%;
  max-width: 1920px;
  background-color: #F4F5FA;
  padding: rem(63) 0 rem(116);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(max-width: $mobile-breakpoint) {
    width: 100vw;
    
  }  
  &-title{
    color: #050F3F;
    font-size: rem(30);   
    margin-bottom: rem(13); 
    font-weight: normal;
  }
  &-desc{
    font-size: rem(16);
    color: #A7A8B8;
    margin-bottom: rem(52);
  }
  .hospital-content-1{
    max-width: 1280px;
    width:100%;
    display: flex;    
    justify-content: space-between;
    @media(max-width: $mobile-sm-breakpoint){
      flex-direction: column;
      align-items: center;
    }
    @media(max-width: $mobile-breakpoint){
      width: 100%;      
    }

    &-item{
      width: 30%;
      padding:rem(60) rem(30) rem(18);
      margin: 10px;
      border-radius: rem(20);
      flex: 1;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      background-color: #FFF;
      @media(max-width: $mobile-sm-breakpoint){
        width: 80%;
        flex-direction: column;
        align-items: center;
      }
      @media(max-width: $mobile-breakpoint){
        width: 80%;      
      }

      &-icon{
        width: rem(50);
      }
      &-title{
        color: #050F3F;
        font-size: rem(20);
        margin: rem(25) 0;
      }

      &-desc{
        color:#80808C;
        font-size: rem(16);
        margin-bottom: rem(41);
      }

      &-tags{
        background-color: rgba(#4B63FF, 0.8);
        margin: rem(10) auto 0;
        height:rem(45);
        width: 100%;
        line-height: rem(45);
        text-align: center;
        border-radius: rem(22.5);
        color:#FFF;
        font-size:rem(16);
      }
    }    
  }
  .hospital-content-2{
    margin-top: 31px;
    max-width:1280px;
    width: 100%;
    padding: rem(56) rem(12);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFF;

    &-item{
      width: 28%;
      max-width: rem(240);      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      &-title{
        color: #0065FF;
        font-size: rem(55);
        &-2{
          font-size:rem(25)
        }
      }
      &-subtitle{
        font-size: rem(20);
        margin:rem(20);
        color:#050F3F;
      }

      &-desc{
        font-size: rem(14);
        color: #80808C;
        margin-bottom: rem(41);
      }

      &-sep{
        width: 2px;
        height: rem(150);
        background-color: rgba(#80808C,0.2);
        transform: rotate(10deg);
        @media(max-width: $mobile-breakpoint){
          transform: rotate(0deg);
          width: 1px;
        }
      }


    }
  }
}
</style>