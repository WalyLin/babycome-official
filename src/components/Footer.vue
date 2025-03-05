<template>
  <footer class="app-footer">

    <div class="content-wrap">
      <div class="content">
        <div class="infomation">
          <div class="item">        
            <img src="@/assets/images/foot1.png" alt="">
            <div class="text">
              <p>全国咨询热线： </p> 
              <p>1231254566</p>
            </div>          
          </div>

          <div class="item">
            <img src="@/assets/images/foot2.png" alt="">
            <div class="text">
              <p>地址：  </p> 
              <p>XXX市XXX区XXXXXXXXXXXX</p>
            </div>          
          </div>
          <div class="item">        
            <img src="@/assets/images/foot3.png" alt="">
            <div class="text">
              <p>Email： </p> 
              <p> ASD125@qq.com</p>
            </div>          
          </div>

          <div class="item">
            <img src="@/assets/images/foot4.png" alt="">
            <div class="text">
              <p>WhatsApp：  </p> 
              <p>ASD12512323</p>
            </div>          
          </div>
      </div>

      <div class="qrcode">
        <img src="@/assets/images/wechat.png" alt="">
        <img src="@/assets/images/whatsapp.png" alt="">
      </div>
      </div>
      
      
      
    </div>
    <div class="copyright">
        Copyright ◎ 2017-2022 XXXXXXXXX有限公司 版权所有ICP备2000000号-0 www.XXXX        
      </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { text: '隐私政策', path: '/privacy' },
  { text: '服务条款', path: '/terms' },
  { text: '常见问题', path: '/faq' }
]
</script>

<style lang="scss" scoped>
.app-footer {  
  background: #141319;
  color: white;  

  .content-wrap{
    height:rem(189);
    .content{    
      width: rem(960);
      margin: auto;          
      .infomation{
        padding-top:rem(33);
        width: rem(600);
        float: left;        
        
        .item{
          display: flex;
          height:rem(40);
          width: rem(251);
          margin-bottom: rem(37);

          float: left;
          img{
            width: rem(43);
            height: rem(43);
            margin-right: rem(12);
          }

          p{
            white-space: nowrap;
          }
        }
      }
      .qrcode{
        padding-top:rem(33);
        float: right;
        display: flex;      
        justify-content: space-around;
        align-items: center;

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