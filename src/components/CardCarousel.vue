<template>
  <div class="advantage-cards">
    <div ref="swiperRef" class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="swiper-slide card"
          @click="activeSlide = index"
        >
          <img :src="card.icon" :alt="card.title" :class="{ 'card-icon-sm': 0 === index }" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
      <div class="swiper-button-next"><img src="@/assets/images/hom_rj.png" alt=""></div>
      <div class="swiper-button-prev"><img src="@/assets/images/hom_lj.png" alt=""></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from'swiper';
import { Navigation } from 'swiper/modules'; // 关键修改1：导入Navigation模块
import'swiper/css';


const cards = ref([
  {
    title: '保障海外求子合法权益',
    description: '双律师坐镇，海外求子保障合法权益，规避不良机构，降低双国家政策突变导致诉讼纠纷子不归家。',
    icon: '/src/assets/images/xing1.png'
  },
  {
    title: '爱心妈妈充足',
    description: '常年上百优质爱心妈妈储备常驻第比利斯，无需担心移植等待，移植加收费用等问题。',
    icon: '/src/assets/images/xing2.png'
  },
  {
    title: '孕期无忧',
    description: '爱心妈妈统一管理，营养日常更有保障',
    icon: '/src/assets/images/xing2.png'
  },
  {
    title: '双院区办公机构',
    description: '全格鲁吉亚唯一一家双院区独立办公室办公机构，医院认可更有保障。',
    icon: '/src/assets/images/xing2.png'
  },
  {
    title: '双院区办公机构',
    description: '全格鲁吉亚唯一一家双院区独立办公室办公机构，医院认可更有保障。',
    icon: '/src/assets/images/xing2.png'
  },
  {
    title: '双院区办公机构',
    description: '全格鲁吉亚唯一一家双院区独立办公室办公机构，医院认可更有保障。',
    icon: '/src/assets/images/xing2.png'
  },
  {
    title: '资金实力雄厚',
    description: '八大付款节点，贯穿整个项目，无需担心项目中断或机构跑路风险',
    icon: '/src/assets/images/xing2.png'
  }
]);

const swiperRef = ref(null);
const activeSlide = ref(0);

onMounted(() => {
  const swiperRefValue = swiperRef.value;
  const swiper = new Swiper(swiperRefValue, {
      modules: [Navigation], // 关键修改3：注册模块
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: { // 关键修改4：添加响应式配置
        1024: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25
        }
      },
      on: {
        slideChange: () => {
          activeSlide.value = swiper.activeIndex;          
        }
      }
    });
});
</script>

<style scoped lang="scss">
.advantage-cards {
 .swiper {
  padding: 0 40px; // 给导航按钮留出空间
    width: 100%;
    height: auto;
    position: relative;
  }

 .swiper-wrapper {
    display: flex;
  }

 .swiper-slide {
    box-sizing: border-box;
  }

 .card {
    padding: 10px;
    border: 1px solid #ccc;
    width: 200px;
    box-sizing: border-box;
  }

 .swiper-button-next,
 .swiper-button-prev {
    position: absolute;
    top: 50%;    
    z-index: 10;
    cursor: pointer;
  }

 .swiper-button-next {
    right: 20px;
  }

 .swiper-button-prev {
    left: 10px;
  }
}

.advantage-cards {
    margin-top: rem(46);    
    display: flex;
    justify-content: space-between;    
    overflow: hidden; 
    .card {
      width: 19%;
      background: #FAFAFD;
      padding: rem(21);
      border-radius: rem(25);
      
      text-align: left;
      img{
        width: rem(80);
        height: rem(80);
        @media(max-width: $mobile-breakpoint){
          width: 80%;
          height: auto;
        }
      }
      .card-icon-sm{        
          width:rem(47);
          height:rem(47);                
      }

      h3 {
        margin-top:rem(21);
        color:#050F3F;
        font-size: $f16;
        margin-bottom: rem(17);
      }
      p{
        color: #80808C;
        font-size: $f12;
        text-align:left;
        letter-spacing:0px;
      }
    }
    .swiper-slide-active{
      background-color: #7F7F7F;
      h3{color:#FFFFFF;}
      p{color:#F5F5F5;}
    }

    
  }
  
</style>