<!-- src/views/HomePage.vue -->
<template>
<div class="page-wrap">
        
  <!-- 主图Banner -->
  <section class="top-banner">
  </section>

  <section class="leader">    
    <div class="leader-content">
      <img class="leader-content-photo" src="@/assets/images/about/leader.png" alt="">
      
      <div class="leader-content-info">
        <p class="leader-content-info-title">公司创始人 谭曙</p>
        <p class="leader-content-info-desc">毕业于加拿大蒙特利大学，英属哥伦比亚大学和多伦多大学，获得国际商法硕士和美法硕士学位，同时也是加拿大安大略省执业律师和公证员。</p>
        
        <div class="leader-content-info-show">
          <div class="leader-content-info-show-item">            
            <img src="@/assets/images/about/show1.png" alt="">
            <p>加拿大律师资格</p>
          </div>
          <div class="leader-content-info-show-item">            
            <img src="@/assets/images/about/show2.png" alt="">
            <p>中国法律职业资格</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>

<section class="development">
  <p class="title">公司发展历史</p>
  <p class="desc">BabyCome永远保持三个核心高效生产，顺利生产，优质生产</p>
  <div class="development-content">
    <div class="development-content-item">
      <img src="@/assets/images/about/fzs1.png" alt="">
      <p class="development-content-item-title">高效生产</p>
      <p class="development-content-item-desc">孕期十几次专业孕检全周期检测孕育情况，药物补给，日常全天候检察爱心妈妈抽烟，喝酒，日常高危行为，确保在整个孕期避免流产，降低流
产率。所有爱心妈妈定期举办活动，让她们在舒适，安心的环境中愉悦的完成生产工作。高质量团队才能带来更加可靠的全方位保障，每年服务
300家庭，诞下近200健康宝宝。</p>
    </div>
    <div class="development-content-item">
      <img src="@/assets/images/about/fzs2.png" alt="">
      <p class="development-content-item-title">顺利生产</p>
      <p class="development-content-item-desc">机构拥有近200位年龄18—35岁的优质现成爱心妈妈资源，每月持续稳定新增30位爱心妈妈涵盖菲律宾，泰国，格鲁吉亚本地多区域人选适合各种妊辰需求。机构所有爱心妈妈皆采用统一管理模式，有专门的工作人员进行食宿管理，统一安排每日规律三餐饮食，水果，并且定期进行全方位的身体检查，确保爱心妈妈们有最具实效性的身体数据便于安排调理移植。</p>
    </div>
    <div class="development-content-item">
      <img src="@/assets/images/about/fzs3.png" alt="">
      <p class="development-content-item-title">优质生产</p>
      <p class="development-content-item-desc">2019年，谭律师赴格鲁吉亚，开启了对辅助生殖行业的深入了解，积极开发资源，建立人脉，从个人代理逐步发展成格鲁吉亚上百人全产业链完整度最高，规格最高的工作团队。</p>
    </div>
  </div>
</section>

<section class="case">
  <p class="title">特殊案例展示</p>
  <p class="desc">这里放企业动态的简要描述详情</p>
  <div class="case-content">
    <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="中介欺骗事件" name="first">
        <img src="@/assets/images/about/case-tab1.png" alt="">
      </el-tab-pane>
      <el-tab-pane label="案例2" name="second">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="4">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="5">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="7">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="8">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="9">Config</el-tab-pane>
      <el-tab-pane label="案例2" name="f">Config</el-tab-pane>            
    </el-tabs>
  </div>
</section>

<section class="speed">
  <p class="title">机构移植速度展示</p>
  <p class="desc">这里放企业动态的简要描述详情</p>
  <div class="speed-wrap">
    <p class="speed-desc">怀孕诊断证明书模板怀孕诊断证明书模板篇-:医院诊断证明书模板篇二:诊断证明书样xxxxxxxxx民医院篇三:长春怀孕证明_长春诊断证明 长春上环证明,长春医学证明马化腾Q 编号:长春医院诊断单据姓名:姓别:年龄:诊断科室:诊断类别:光检测:建议病假休假天数:长春医院怀孕单据姓名:姓别:年龄:诊断科室;诊断类别:CT建议病假休假天数:长春医院医学单据姓名:姓别:年龄:诊断科室:诊断类别:超检验:</p>
    <div class="speed-content">
      <img src="@/assets/images/about/speed-show1.png" alt="">
      <img src="@/assets/images/about/speed-show1.png" alt="">
      <img src="@/assets/images/about/speed-show1.png" alt="">
    </div>
    <div class="speed-s">
      <p>11天21台移植手术</p>
      <p>同一天7个验孕成功 <br>（2025/2/3）</p>
    </div>
  </div>
</section>
</div>
</template>
  
<script setup>  
import { ref,inject } from 'vue'  

const isMobile = inject('isMobile')

const activeTab = ref('first')

const handleClick = (tab) => {
      console.log('当前标签页:', tab.props.name);
    };
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
  background: url('@/assets/images/banner6.png') no-repeat;
  background-size: 100% 100%;
  width:100% ;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  position: relative;
  height: rem(556);
  
  @media(max-width: $tablet-breakpoint){
    height: rem(380);
  }  
  @media(max-width: $mobile-breakpoint){
    height: rem(280);
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

.title{
  color:#050F3F;
  font-size: $f30;
}
.desc{
  color: #A7A8B8;
  font-size: rem(16);
  margin: rem(14) 0 rem(31);
  
}

.leader{
  padding-top: rem(57);
  width: 100%;
  max-width: 1280px;
  display: flex;  
  justify-content: center;
  align-items: center;
  .leader-content{
    width: 100%;
    height: rem(483);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width: $tablet-breakpoint) {
      flex-direction: column;
      height: auto;
      justify-content: center;
    }
    .leader-content-photo{
      height: 100%;
      width: 413px;
      margin-bottom: 20px;
      @media(max-width: $mobile-breakpoint) {
        width: 70%;
      }
    }
    .leader-content-info{
      width: 62%;
      height: 100%;
      margin-left: rem(38);
      border-radius: rem(10);
      display: flex;
      flex-direction: column;
      padding: rem(32);
      background-color: #FFF;
      @media(max-width: $tablet-breakpoint){
        width: 96%;
        margin-left: 0;
      }

      &-title{
        font-weight: bold;
        font-size: rem(24);
        color: #050F3F;       
      }
      &-desc{
        margin-top: rem(29);
        font-size: rem(16);
        color: #80808C;
        margin-bottom: rem(82);
      }
      &-show{
        display: flex;
        align-items: center;
        @media(max-width: $mobile-breakpoint){
          flex-direction: column;
        }
        &-item{
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: rem(20);
          @media(max-width: $mobile-breakpoint){
            justify-content: center;
            margin-bottom: 20px;
          }
          img{
            margin-right: rem(10);          
          }
          p{
            margin-top: rem(15);
            font-size: rem(16);
            color: #333333;
          }
        }        
      }
      
    }
  }
}

.development{
  padding-top: rem(41);
  height: rem(720);
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: url('@/assets/images/about/bg23.png') no-repeat;
  background-size: 100% rem(376);
  background-position: bottom;
  @media(max-width: $tablet-breakpoint){
      padding: 40px 20px;
      margin-top: 20px;
  }
  @media(max-width: $mobile-breakpoint){
      height: auto;
      padding: 40px 20px;
      margin-top: 20px;
  }

  .desc{
    font-size: rem(18);
    color: #333333;
  }

  .development-content{    
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    
    @media(max-width: $mobile-breakpoint){      
      flex-direction: column;
    }
    
    .development-content-item{
      display: flex;
      flex-direction: column;
      padding:rem(53) rem(35);
      background-color: #FFF;
      border-radius: 20px;
      width: 32%;
      @media(max-width: $mobile-breakpoint){        
        width: 100%;
        margin-bottom: 20px;
      }

      img{
        width: rem(63);
      }
      &-title{
        font-size: rem(20);
        color: #050F3F;
        margin-top: rem(33);
        margin-bottom: rem(20);
      }
      &-desc{
        color: #80808C;
        font-size: rem(16);
      }
    }
  }
}

.speed,.case{
  padding-top: rem(67);
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.case{
  .case-content{
    width: 100%;    
    max-width: 1280px;
    @media(max-width: $tablet-breakpoint){
      padding: 0 20px;
    }

    .el-tabs{
      :deep(.el-tabs__header) {
        background-color: #FFF;      
      }
      :deep(.el-tab-pane) {
        margin-top: rem(37);
      }
      :deep(.el-tabs__nav-prev) {
        height: 100%;
        display: flex;
        align-items: center;
      }
      :deep(.el-tabs__nav-next) {
          height: 100%;
          display: flex;
          align-items: center;
      }
      
      :deep(.el-tab-pane){
        img{
          width: 96%;
          margin: auto;
          display: block;
        }
      }
      :deep(.el-tabs__item) {
        font-size: rem(18);        
        height: rem(61);      
        width: rem(200);      
      }
      :deep(.el-tabs__item.is-active) {
        font-weight: bold;
        width: rem(305);
        color: #FFF;
        background-color: #4C70FF;      
      }
    }        
  }
  
}

.speed{  
  .speed-wrap{
    width: 100vw;
    max-width: 1920px;
    background-color: #E9EBF0;
    display: flex;
    flex-direction: column;
    padding: rem(47);
    justify-content: center;
    align-items: center;
    @media(max-width: $mobile-breakpoint){
      padding: 20px;
    }
    .speed-desc{
      width: 100%;
      max-width: 1160px;
      color:#333333;
      margin-bottom: rem(48);
    }
    .speed-content{
      width: 100%;
      max-width: 1160px;
      display: flex;
      justify-content: space-between;
      @media(max-width: $mobile-breakpoint){
        flex-direction: column;
      }
      img{
        width: 32%;        
        @media(max-width: $mobile-breakpoint){
          width: 100%;
          margin-bottom: 10px;
        }
      }
    }
    .speed-s{
      width: 100%;      
      max-width: 1160px;
      margin-top: rem(38);
      background: url('@/assets/images/about/tf.png');
      background-size: 100% 100%;
      padding: rem(10) 10%;
      color: #FFF;
      font-size: rem(24);
      align-items: center;
      display: flex;
      justify-content: space-between;
      @media(max-width: $mobile-breakpoint){
        padding: 10px 0;
      }
      p{text-align: center;}

    }
  }
}
  
</style>