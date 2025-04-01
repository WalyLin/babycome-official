<template>
  <footer class="app-footer">

    <div class="content-wrap">
      <div class="content">
        <div class="infomation">
          <div class="item">        
            <img src="@/assets/images/foot1.png" alt="">
            <div class="text">
              <p>全国咨询热线： </p> 
              <p>{{ config.official_mobile }}</p>
            </div>          
          </div>

          <div class="item">
            <img src="@/assets/images/foot2.png" alt="">
            <div class="text">
              <p>地址：  </p> 
              <p>{{ config.official_address }}</p>
            </div>          
          </div>
          <div class="item">        
            <img src="@/assets/images/foot3.png" alt="">
            <div class="text">
              <p>Email： </p> 
              <p> {{ config.official_email }}</p>
            </div>          
          </div>

          <div class="item">
            <img src="@/assets/images/foot4.png" alt="">
            <div class="text">
              <p>WhatsApp：  </p> 
              <p>{{ config.official_whatsapp }}</p>
            </div>          
          </div>
      </div>

      <div class="qrcode">
        <img :src="config.official_wechat_qrcode" alt="">
        <img :src="config.official_service_qrcode" alt="">
      </div>
      </div>
      
      
      
    </div>
    <div class="copyright">
        {{ config.official_copyright }}       
      </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import {useStore} from '@/store/dataStore'
const store = useStore()
const config = store.config

</script>

<style lang="scss" scoped>
.app-footer {
  font-size: rem(16);
  background: #141319;
  color: white;  

  .content-wrap{
    height:rem(189);
    @media(max-width: $mobile-breakpoint){
      height: auto;
    }
    .content{    
      max-width: rem(960);
      margin: auto;      
      @media(max-width: $mobile-breakpoint){
        display: flex;
        flex-direction: column;
      }
          
      .infomation{
        padding-top:rem(33);
        width: rem(600);
        float: left;       
        @media(max-width: $mobile-breakpoint) {
          width: 100%;
          float: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          
        }
        
        .item{
          display: flex;
          height:rem(40);
          width: 45%;
          margin-bottom: rem(37);          
          float: left;
          @media(max-width: $mobile-breakpoint){
            margin-left:12px
          }
          img{
            width: rem(43);
            height: rem(43);
            margin-right: rem(12);
          }

          p{
            white-space: nowrap;
            @media(max-width: $mobile-breakpoint){
              white-space: wrap;
            }
          }
        }
      }
      .qrcode{
        padding-top:rem(33);
        float: right;
        display: flex;      
        justify-content: space-around;
        align-items: center;
        @media(max-width: $mobile-breakpoint){
          padding: 10px;
        }
        img{
          width: rem(133);
          height: rem(133);
          margin-right:rem(27);
        }
      }
    }
  }

  .copyright {
    background-color: #000;
    text-align: center;
    height: rem(45);
    line-height: rem(45);
    font-size: rem(14);        
    color:#FFF;
    width: 100%;
  }
}
</style>