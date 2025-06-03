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

    <section class="news">
      <p class="title">格鲁吉亚动态</p>
      <p class="desc">这里放企业动态的简要描述详情</p>
      <div class="news-wrap">
        <div class="news-content">
          <div v-for="(v,k) in newsList" class="news-content-item">            
              <img :src=" store.domain + v.image " alt="" class="news-content-item-image">                        
              <div class="news-content-item-info">
                <p class="news-content-item-info-title">{{ v.title }}</p>
                <p class="news-content-item-info-desc">{{ v.sub_title }}</p>
                <p class="news-content-item-info-date">{{ v.publish_time }}</p>
                <p class="news-content-item-info-btn">查看详情</p>
              </div>            
          </div>        
        </div>

        <div class="pagination-wrap">
          <el-pagination background 
            :class="isMobile ? 'pagination-mobile' : 'pagination-pc'"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30]"
          :pager-count=5
          
          layout=" prev, pager, next"
          append-size-to="pagination-select"
          :total="totalItems"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
            />

            <!-- 自定义每页显示条数的选择器 -->
          <el-select          
            class="pagination-select"
            v-model="pageSize"
            >
            <el-option
              v-for="size in [10, 20, 30]"
              :key="size"
              :label="`${size} 条/页`"
              :value="size"
              >
            </el-option>
          </el-select>
        </div>
      </div>
      
    </section>
  </div>
</template>
  
<script setup>  
import { ref,inject,computed,onMounted } from 'vue'    
import commonApi from '@/api/common';
import { useStore } from '@/store/dataStore'

const store = useStore()

const isMobile = inject('isMobile')  

const businessList = ref({})


const newsList = ref({})
const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(0)

// 初始化总条数
onMounted(() => {
  commonApi.getArticals({cate:1}).then(res => {
    businessList.value = res.data.data
  })

  commonApi.getArticals({ page: currentPage.value, pageSize: pageSize.value ,cate:2}).then(res => {
    newsList.value = res.data.data
    totalItems.value = res.data.total
  })
})

// 分页事件处理
const handleCurrentChange = (val) => {  
  commonApi.getArticals({ page: currentPage.value, pageSize: pageSize.value ,cate:2}).then(res => {
    newsList.value = res.data.data
    totalItems.value = res.data.total
  })
}

const handleSizeChange = (val) => {  
  commonApi.getArticals({ page: currentPage, pageSize: pageSize ,cate:2}).then(res => {
    newsList.value = res.data.data
    totalItems.value = res.data.total
  })
}
</script>
  
<style>
.btn-next,.btn-prev{
    background-color: #FFF !important;
}
</style>
<style lang="scss" scoped>
  

.pagination-wrap{
  padding-top: rem(50);  
  width: rem(500);
  display: flex;
  justify-content: center;
  align-items: center;



  .el-pagination {  
    justify-content: center;
    
    // 移动端适配
    @media (max-width: $mobile-breakpoint) {
      :deep(.el-pagination__sizes) {
        margin: 0 !important;
      }
      :deep(.el-pagination__jump) {
        display: none !important;
      }
    }
  }
  
  // 自定义分页颜色
  :deep(.el-pagination.is-background .el-pager li) {
    background: #FFF;
    border-radius: 4px;
    color:#454859;
    border: 1px solid #DADFEB;
    width: rem(28);
    height: rem(28);    

    &:not(.is-disabled).is-active {
      background: #6C85D0;
      color: #FFF;
    }
    &:hover {
      color: #409eff;
    }
  }

  .pagination-select{    
    display: block;
    @media (max-width: $mobile-breakpoint) {
      display: none;
    }
    :deep(.el-select__wrapper){
      width: 100px;
      min-height: 28px;
      margin-left: 3px;
    }
  }

}




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



.news-wrap{
  width: 100%;
  padding: 0 rem(40) rem(40);
  background-color: #FFF;
  border-radius: rem(20);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.news{
  &-content{
    max-width: 1280px;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    

    &-item{
      width: 100%;
      background-color: #FFF;
      padding: rem(40) 0;
      margin: 0 rem(40);
      display: flex;
      justify-content: baseline;
      border-bottom: 1px solid #EBE8E8;

      p,img{
        cursor: pointer;
      }


      &-image{
        width: rem(252);
        height: rem(189);
      }

      &-info{
        width: 70%;
        margin-left: rem(30);
        display: flex;
        flex-direction: column;
        padding: 4px 0;       
        justify-content: space-between; 

        &-title{
          color: #050F3F;
          font-size: rem(18);
          font-weight: bold;
          margin-bottom: rem(20);
        }

        &-desc{
          font-size: rem(16);
          color: #050F3F;
          margin-bottom: rem(20);
        }
        &-date{
          color: #80808C;
          font-size: rem(18);
          margin-bottom: rem(10);
          position: relative;;
          top: -10px;
        }
        &-btn{
          color: #4C70FF;
          font-size: rem(16);
        }
      }
    }

  }
}
</style>