const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/HomePage-DmCFwFXT.js","static/js/payment-process2-BzfAz7cC.js","static/js/swiper-Dy0Egyw1.js","static/js/@vue-Ben2IBC1.js","static/css/swiper-CwSRrs7M.css","static/js/pinia-Ty9b5yjz.js","static/js/vue-router-C8X4bDw3.js","static/js/axios-BcqMBTJ4.js","static/css/HomePage-D4W5No30.css","static/js/About-DpLGSxE-.js","static/js/element-plus-DkDxDq4z.js","static/js/@element-plus-Li5l7VbL.js","static/js/lodash-es-DGQ440xP.js","static/js/@popperjs-DxP-MrnL.js","static/css/element-plus-DlIgbLoP.css","static/css/About-DIHWxdpR.css","static/js/Advantage-CkbSgPU4.js","static/css/Advantage-DK9CDM5K.css","static/js/Structure-BclzyE6k.js","static/css/Structure-CPNATaMX.css","static/js/Product-BspuUW_C.js","static/css/Product-DjtCbVzy.css","static/js/News-BLic_HZY.js","static/css/News-D_YJFgTh.css"])))=>i.map(i=>d[i]);
import{b as e,r as t,a6 as a,c as s,o,a as n,P as l,J as i,H as r,F as c,a8 as u,G as A,a9 as p,L as d,E as m,K as g,Q as f,u as h,d as b,D as v,T as k,I as w,R as C,ak as B}from"./@vue-Ben2IBC1.js";import{d as O,c as V}from"./pinia-Ty9b5yjz.js";import{R as M,c as y,a as Y}from"./vue-router-C8X4bDw3.js";import{a as Q}from"./axios-BcqMBTJ4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const S="/static/png/logo-DWIMACi0.png",E=Q.create({baseURL:"http://13.251.66.158:9501",timeout:1e4});E.interceptors.request.use((e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e})),E.interceptors.response.use((e=>e.data),(e=>{var t;return null==(t=e.response)||t.status,Promise.reject(e)}));const U=E,j={getConfigs:(e={})=>U({url:"official/configs",method:"get",params:e}),getArticals:(e={})=>U({url:"official/articles",method:"get",params:e})},K=O("main",{state:()=>({isMobile:!1,showMobileMenu:!1,navLinks:[{text:"首页",path:"/",img:"@/assets/images/aa.png"},{text:"公司优势",path:"/advantage",img:"@/assets/images/aa.png"},{text:"组织架构",path:"/structure",img:"@/assets/images/aa.png"},{text:"套餐及报价",path:"/product",img:"@/assets/images/aa.png"},{text:"实时资讯",path:"/news",img:"@/assets/images/aa.png"},{text:"关于我们",path:"/about",img:"@/assets/images/aa.png"}],config:{}}),actions:{checkMobile(){this.isMobile=window.innerWidth<=768},toggleMobileMenu(){this.showMobileMenu=!this.showMobileMenu},async fetchConfig(){try{const e=await j.getConfigs();this.config=e.data}catch(e){}}}}),R=(e,t)=>{const a=e.__vccOpts||e;for(const[s,o]of t)a[s]=o;return a},q={class:"app-header"},D={class:"container"},L={class:"desktop-nav"},P=R({__name:"Header",setup(h){const b=K();b.navLinks;const v=e((()=>(b.navLinks||[]).filter((e=>e&&"object"==typeof e&&"path"in e)))),k=t(!1),w=()=>{k.value=!k.value,b.toggleMobileMenu()};return(e,t)=>{const h=a("router-link");return o(),s("header",q,[n("div",D,[i(h,{to:"/",class:"logo"},{default:r((()=>t[0]||(t[0]=[n("img",{src:S,alt:"BABYCOME"},null,-1)]))),_:1}),n("nav",L,[(o(!0),s(c,null,u(v.value,((t,a)=>(o(),A(h,{key:t.path||a,to:t.path||"/",class:m(["nav-link",{active:e.$route.path===t.path}])},{default:r((()=>[p(d(t.text||"未命名链接"),1)])),_:2},1032,["to","class"])))),128))]),n("button",{class:"mobile-menu-btn",onClick:w,"aria-label":"切换菜单"},t[1]||(t[1]=[n("span",{class:"bar"},null,-1),n("span",{class:"bar"},null,-1),n("span",{class:"bar"},null,-1)]))]),n("div",{class:m(["mobile-menu",{open:k.value}]),onClick:g(w,["self"])},[(o(!0),s(c,null,u(v.value,((t,a)=>(o(),A(h,{key:t.path||a,to:t.path||"/",class:m(["mobile-nav-link",{active:e.$route.path===t.path}]),onClick:w},{default:r((()=>[p(d(t.text||"未命名链接"),1)])),_:2},1032,["to","class"])))),128))],2),l(n("div",{class:"mask",onClick:w},null,512),[[f,k.value]])])}}},[["__scopeId","data-v-fef2fb60"]]),G={class:"app-footer"},N={class:"content-wrap"},J={class:"content"},Z={class:"infomation"},x={class:"item"},H={class:"text"},T={class:"item"},W={class:"text"},X={class:"item"},F={class:"text"},I={class:"item"},z={class:"text"},_={class:"qrcode"},$=["src"],ee=["src"],te={class:"copyright"},ae=R({__name:"Footer",setup(e){const a=K(),l=t(a.config);return(e,t)=>(o(),s("footer",G,[n("div",N,[n("div",J,[n("div",Z,[n("div",x,[t[1]||(t[1]=n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAFMElEQVRYhd2ZWUxUVxiAP4YyMhEGZchgImstIEhBZB0GYWpVHqrEWFwK6oMpagWxtalt41K1CG4VG6oicauoqFiRva7BBYkwLKKArSaWxMZCoNEWBVRm+kBnIiD2UrmO7ff4n+V+58+55557jpmHuzd/MxX4BAgErDA9bUAFsBUoADC3UygBkoCdgCsgNZVdL6R0+8QAFsB5Mw937ylAvkm1hBFlbqdQptM9gtedERIgwNQWAgmQANamthCItcTUBgNhQLIuLs7kF+Rw4eI5pk2LEsupX94QWlGpVJJzMhuZTAbAho3r0ev15Oa+uoVEcGZ3pqchk8lYtXINMR/MA2DjpmS8vDxFk+uNIFknZyfGjPGisbGR7OwfqKqqJjFxGQCZB/cxZMgQUSUNCJI1zM8tW7YZY6dPnSEjYw9Dhw5lV8Z2cex6IUh2wgQNAA31DT3iW7/ZRkW5lpCQYBISPhpktb4IknVxdkav19PS2tqnbMGCxTQ1NZOwZDG+Y30GXfBZBMlayizR6fR0tHf0KWtvb+fw4SMAREVNGVy7XgiSffToEebmEixlln3KvLw8iY6eDkBVVc3g2vVCkGxTUzMAtsNte8SjoqZwIucYjo4O7N69l8KCosE3fAZBsnfu3AHAxkZujDk6OrBpcwoAK1d8xZbNqSLo9USQbOnlMgD8/MYaY7NmzwAgKSmF48dPiKDWF0GyZ8+eA2DhojhjrLWle2Wwt7cXQev5CJ6z9XUN2NsrcXN7C4CsrKO0t7cTFzcfb+8xokoaELw3SE7eAMD65HUAdHR0Eh+/FIDde9KxsLAQQa8ngmW12ipqa6/j4/M2wcFBAFwpLWPf3u8ZNmwYWUcyRZM0YObh7q0XWtnJyZHTZ4pobWlFrdYY42lpqUyaPJHy8grmzZ3fb/vIyMk4OI7kwoVL3L51e8Cy5nYK5RqhlR88+AMbGxtCVMF4enlSVFgMQHHxKfz8xqJShRAWpqawsJinT5/2aLtwURxr161GrVYREzObzs5OqqqqxZMFuHTpMhMnvUtQUABSqZSysqsA5OUV4OrqQnjEeGZET0errTR+TMLC1KSkfI1Op+PokWxcXJ3RaCJwd3ejpORin4H1x4CmgQFraytOnS7C1nY4SUkpHMw8bCxbkhhPfPwiAA4dyuJh20MWLPwQgOj3Z3PjRh1yuZy071IJDg6ipaWFhISPqam+9o/PHXBmAR4/fsyZs+eYMyeGiIjxdOl0aCsqASi/WkFNTS2adyIIDPTHP2AcAJ8uW05p6RUAOjs7OZmTh7XcmtBQFdHR07l791du3vzphc/9V5k1MHq0Bwcy9yKXyyksLOaLz1fw5MkTAKRSKVOnvoeVlRVabSV1dfXP7SMycjLbvt2CmZkZyz/7kry8AnFkARQKW3bsTMPX14fm5mZWr1pLScnFAfXh6upC8Y/56HQ6vDx9+6330ucGra2/M2tmLPv3H0CpVJK+azu7Mnbg7z9OcB++vt2bdsML2R8vndlnCQz0Z0liPEFBgQDcunWbY8eOU1/XwC+Njcb9hEQiwcFhJO7ubsTOiUGlCgZg1sxYrl2rfTWyBjSacObOjUUdFtoj3tXVxf37D1Aoeu6La2uvs3ZNUr/zWlRZA6NGvUmoWoUmIhzXN12ws7NDKpXS1tbGvXu/odVWkpubL2jZEl12sPn/HsyZmv+c7J+mlhBImwTQmtpCIBUSQPx/6MEh1dxOofyZ7numcFPbvID1QLrh0u48UA2MAJS8Hhd3D4FSYCmQDvAXNbeiIuOWA7kAAAAASUVORK5CYII=",alt:""},null,-1)),n("div",H,[t[0]||(t[0]=n("p",null,"全国咨询热线： ",-1)),n("p",null,d(l.value.official_mobile),1)])]),n("div",T,[t[3]||(t[3]=n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAADbUlEQVRYhe2Z30sUWxzAP2d2XDJ0jJ1hC+0GUWi3treC6qHH6KGCyqLbYwQ99BD3uW4E/YCo3JKoVTNdU0zXsktduF50Jcu8UGGQtwv9BWWWWbu6tc5MD5tb5pZnc2QU/LzNzPec85lzvufMGY4oKQ7wma3A78BaIA/3iQEPgTLgDoDH0P0AJ4DLwFLA65bdN3hJ+ewFcoCoKCkObAFuu6olxzaPoftDpN5gprNIAda4bSHJGgXId9tCknzFbYNsmJOdLuZkp4tZJavKBu7fv4/SXTsA8Pl85ObOA8C27VRFqoqifP/dTdNECJGOicfjDAwMYJoW7e1Rys6dn9RBlBQHbBnZR497yMtL7W+SySTJZDJVgRDpxofjwygez4SylmmSr+VjmRaxeAwhFBYsKEDTtHTMipLVkzpI9+yrVwNp2QMHDvKgu0e2aEYKCwuJdrYB0N/fL1VGOmc1TSMxkiAYLOfo0cOsXPnrz1kCixcX0dRcz5kzZfT2PsHn8zkrq+s+Xr95Q0WoimBZOTdbm9mwYV3WosuXL6O942+u1TVQfaUGRSioqtwAS8talsX8+bkAtLX9wx9HjnG1popAYJW0qN/v585ftwgGy6msrAa+TFAZpHP248ckmlaQvo5EbqAbOi03rrOr9DeePu2bVLTrXgc1V8NUhKrS94dHRpyXxbYZHU2OuxW6XEliJEGkpZEd23fz7Nn/GYuOTaba2jpOnz47XkCduHpMXVYIMo1YbW0db4eGuNnaTOnOPfT1/Tfu+cKFfqKdbVy6VEH5hYvSzU1N9gfcav2TAk2bkBKGYXC3q4OG+sYpi4JDsgDh8DXUHJVISyPr121kcHCQrnsdNDe1cPz4KUfacEwWoPpKDbFYjJ5/u0gkPhAKVTnSo2M4KgvQdD2Cqqrouu6oKGQhKwQZJ1gmGuobpQUEQjo2C1kByC/gsthZ1Cn9BVMUBdtyXjaR+CAdKy07Omqi5jie4hiGLh2bVc6qqsr97k6Ght6R89XmQ3YoBQLrc+Lbto3X66WoqNB52XC4ns2bN7FkyS8YhiHdwGS8ePGSaLRTKlb6T2EmMKt+GOdkp4s52eli1sm+d1tCkpgCPHLbQpKHChB020KSoMfQ/c9JnTNtdNvmB5wEQmOHdlGgF1gE+JkZB3dxoBs4BIQAPgGCsw8GclwKkwAAAABJRU5ErkJggg==",alt:""},null,-1)),n("div",W,[t[2]||(t[2]=n("p",null,"地址： ",-1)),n("p",null,d(l.value.official_address),1)])]),n("div",X,[t[5]||(t[5]=n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAFgElEQVRYhe2Ze0yTVxiHH9sN1LRMKC0mwzsXFeTiAMUoYU4XonJxCgpOQqXiLdFMzbzfYfMOTqfMVTZ0BiFcZLoL6EhMBBQUAgxUXIR6CQy6oNAViyL7g62KEKVFqSb7/fV95/ze733Ol++857Snj6ODM//KH/gM8AREmF4aoBDYD5wFEFpLZADRwBFgGGBmKrrnZEY7TxjwLpDTx9HBeQZwxqRY3VOA0Foii6d9BG+6BgoAD1NTdFMeAkBsaopuSiwwNYEheudVPMTbexzBIbPx8ZmISPS06tXV1ZGddZ6UlFQqK2/2OE8fRwfnNmOD7e3t2Ld/Nw4O9gBcvVpERfk1tFotVhIr3Nxcsbe3AyA76xxr125Eq9X2PuzUqR9x8FAcADu2f0FKSiqPHj3q5JNKpSyIjEAuD0ej0TDrk7moVKreg3V3dyPp1AlUKhXBs8NobGx8aYyzsxOpaadoaWlhnNdEmpubXz+sUCigqLgAgUCAm6snra2t+j5PLw8CAmYglUqprLxJeloG1dVP36KT02jS0pMpLLjC/Plyg2ENnmDz5oVhbm6OInJxB9Bdu78gMNAfAJ1Oh6+vD1FRkezatZfvEhIBKC+v4HRGJkEzAw0GBTC4dEUq5LS2tnLxYq6+bfOWDQQG+hN/5ChOo11xdfHAe7wP+fmXWbNmNb6+PnpvQkJih0G+VlgbGxmX8i/r7/v160dY2FyKioqJiztIa+sTABoaGpBHKNDpdMTEbNf7Varb3Lhe2TuwADW1tfprS0tLAPKfGcCzunv3HhJrif5ep9Nx//59Y9IaB+vm6qK/rqurAyAgYEYnn0gkYsSI4ZSXV+jbrKwsGTxksDFpDYfNy7uEnb0dQmF76OPHj9m8aRuDBtmSnHwSVzcXpFIpU6ZMJi//AgCrV63Rx7u4jMHW9n2jYA2uBscTTzBhwniCggJJS8sAICUlFfO+5mzYsJbk5JN6r0ajIWrhUqqqqvVt4eGfGgUKRi4KpWVX0ela8PTw7tAuFouYNGkiEmsJt25VkXsxr0O/RGJFbt4F8vIusUC+0GBYobVEttXQoJraP5k+3Y+6uvoO32NLSws3b/5BaUkZd27f6RQXG7eXoUOHED5fjkajMRjWqAl2OiOThoYGtu/Y0u0YBwd7fH19OH8+h5qa2pcHdCGj97PLlq4AYOfO6G75v1XGA7Bq5efGpjQetqiomKysbIJmBuLiMuaF3sVLorCxkbF50zZ0Op2xKXu2nxUIBFRcK0Gr1TLWfVyXnmHDhvLLr2coKSllTsg8Y1O15+tJ8JMnT5BHKOjfvz/7Y/d06Uk8fgwAReSinqQCeggL7ctsUlIy06b5dVrFdu6KQSaTsXz5SpqaDJ/9z+uV/GDctjWa6moVu/d8iUwmA8DP72OCggLISM8kO+vcq0hjPGzfvuaEzJmN8lg83t7jCAkOBeD7RCVeXp7EHdhHVVU169ZtZMnSRRz6+gCTJ3/Yu7BCoYBIhZzfcrJZv34t6no19eq/aGxsYvGiZQwfPozjJxIACAsNB+D69RuYmZlx+MhXZP6YZjS0wdUgOHgWO6K30tbWxqiRLp36FYoF+AdMJyZ6JwUFhR36RjuNIj09BYCRji8ud13J4I1MRcU1GhubsLAQ883Rw/x09mfKyn6npraWh80PUSoTUCoT9H4LCzG2traM/cCd0NA5AJSUlBoMCkbW2QEDBqBYKEcuj0AoFKBWq7l75x71ajUPHjzgYfNDxBZi3rOwQGYjY/DgQYhEImpqalEqEzj5Q1LvwZpKb9V/Xf/Dvi69dbBNpobopjQC4IqpKbqpQgEQa2qKbipWaC2RVdJ+zuTzMrcJFQPE/3dolwMUAwMBGW/Gwd3fQC6wAogH+Aepi9jDjl9unAAAAABJRU5ErkJggg==",alt:""},null,-1)),n("div",F,[t[4]||(t[4]=n("p",null,"Email： ",-1)),n("p",null,d(l.value.official_email),1)])]),n("div",I,[t[7]||(t[7]=n("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAFRUlEQVRYhe2Za1BUZRjHf+xZ2V3kopyVm01OIZCwMpMgN8UCtWlMLJtSZLyQ1/KG1jRFqSCW31S8goDVjA4igppkk4DokCa3GXARmklN03Hxi+kuCywOa32AVjcQzsHLOk3/T3ve97n8ztnnvZ3jFBSoo0cJwFpgPOCK42UGaoGtwA8Aglb0AvgKyAJeApwdRfcvOdPNkwQMASqcggJ104ESh2JJ0wxBK3pl030Hz7t8FEC4oykkKlwBuDmaQqLcFI4mkKP/YZ+WJMFGRIyXFVStUePi4iLLfvHihQPaOQUF6v6SRdJXMrWKGTMSmPRaLCEhwfj6+gBgNBq5du0Pfq48S/GRY7QYWh4rz2PDJifPJ2XNSjQajV27pcOCWqO2ays4WMj27bu4c+fOoHINGnbEiBHs3rOd0NCxAJSUnKC46ChXr17FaDRisXQydOhQRo70Y3rCWyQmzsLd3Q2LpZP169IoKTnxbGD9/Pw4XlKMq6srJ0+Wsjc7j+bmX/v1EQQFa9amsGRJd22mpWVwqODw04UVBAWVlRWIWpHsrBwyM3fKSjhr9ntkZKQBkDB9JpcuXZbsK3vqyszcgqgVyc8vkA0KUHioiPT0TQDk5GbJ8hW0ole6VOPAwADWrU/l7t27zJv7ga09OHgMc5ISuX7jBuZW84BxLl5swtvHm8jICIwmE/oLjZLyyyqDb77NJSYmig+XreDMmUqgu37Lyn9EEAQqKk6z/KPVkmIJgkBTcwNdXV3oQl6V5CO5DARBICYmivb2dhsowJyk2QiCAEB8fBze3l6S4lmtVqqra1Aqleh0IU8W1t//ZQA7UAClUml37e7uLjUkBQcLAZg8OU6SvWTYwKAAgF6jt/Rkme13fn6BrNF96fIV4MGDGEiSYUOCgwEw3DTYtdfXN1BbUwfAsGHDpIYDwNrVBYC7h7R/QzJsl9UK0OcGZcWK1VitVqZNe5PEObOkhsR6/z4ASuUQSfaSYc+frwJg5At+vfpMplaSkxcDkJ6+nuTk+bY+nS6E3Lwspk6d3MvPpWc/YTAYevU9FmzTxWYAYqKj++yvralj2dLlAHye+inHS46wYME8du/ZQWzsRHbuymT/ge/sfOLiXwfgVPlpSQyy5tnTZ8rw9fUhPCwas7nvyT80dCwbMzYwZswrvfrMZjPhYQ9u9pfzlXh6DidsXBRtbW0D5pe13O7YsQuAjz9JeaSNXt/IzHfeJzV1HdXVNbb2K1d+Z9HCZbbryMgIPD2HU1VVLQkUBrGRqa45i4eHBxHjJ2AymQa0Hz3aHxcXF/R6+yW1vqEGjUZDXNwbkjflyoFN7KVyVmHpsNDe3i7J/nLPXPqw9u3bi0ajYeuWTFmnB1llMGVKPGqNmpycPLp65kg5cnNzJTcviwkTYygrLScnZ58sf1mwSUmJABw9+j1hYePYvHkT5ad+4osvP0PUiv36zp2XRFX1OWJjJ3Kk+BirVq2VBQoya7bhQh1qtYp79+7h7Nz7ZaNe34j+QiMtt24BoNVqCQjwJzo6yrbZ2bBhI4WHimSDgoyanfnu26jVKgA6Ojo4sD+f0rJyDDdbCA8fx5KliwgNHWs7kz2s1lYzWVl7KTpcjMnUOihQkPFkV65ajlYUKTxcRHNT3+ctrVbLqFEv4il6onBSYDQauX79huQV6onAqlQqOjs7n0jCR0kUPbl9+89+bSQNsKcNCgwICv/Fd13PixTA4Ifns5VZAdQ5mkKiahXANkdTSNQ2QSt6/Ub3d6ZJjqbpR18D2f98tKsA6gEfwIvn48NdG3AOSAGyAf4Gf0Gp5JMkOKoAAAAASUVORK5CYII=",alt:""},null,-1)),n("div",z,[t[6]||(t[6]=n("p",null,"WhatsApp： ",-1)),n("p",null,d(l.value.official_whatsapp),1)])])]),n("div",_,[n("img",{src:l.value.official_wechat_qrcode,alt:""},null,8,$),n("img",{src:l.value.official_service_qrcode,alt:""},null,8,ee)])])]),n("div",te,d(l.value.official_copyright),1)]))}},[["__scopeId","data-v-618c9828"]]),se={__name:"App",setup:e=>(e,t)=>(o(),A(h(M)))},oe={},ne=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),a=(null==e?void 0:e.nonce)||(null==e?void 0:e.getAttribute("nonce"));s=Promise.allSettled(t.map((e=>{if((e=function(e){return"/"+e}(e))in oe)return;oe[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script"),o.crossOrigin="",o.href=e,a&&o.setAttribute("nonce",a),document.head.appendChild(o),t?new Promise(((t,a)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>a(new Error(`Unable to preload CSS for ${e}`))))})):void 0})))}function o(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return s.then((t=>{for(const e of t||[])"rejected"===e.status&&o(e.reason);return e().catch(o)}))},le={class:"app-header"},ie={class:"container"},re={class:"desktop-nav"},ce=R(b({__name:"MobileMenu",setup(h){const b=K(),v=b.navLinks,k=e((()=>(v||[]).filter((e=>e&&"object"==typeof e&&"path"in e)))),w=t(!1),C=()=>{w.value=!w.value,b.toggleMobileMenu()};return(e,t)=>{const h=a("router-link");return o(),s("header",le,[n("div",ie,[i(h,{to:"/",class:"logo"},{default:r((()=>t[0]||(t[0]=[n("img",{src:S,alt:"BABYCOME"},null,-1)]))),_:1}),n("nav",re,[(o(!0),s(c,null,u(k.value,((t,a)=>(o(),A(h,{key:t.path||a,to:t.path||"/",class:m(["nav-link",{active:e.$route.path===t.path}])},{default:r((()=>[p(d(t.text||"未命名链接"),1)])),_:2},1032,["to","class"])))),128))]),n("button",{class:"mobile-menu-btn",onClick:C,"aria-label":"切换菜单"},t[1]||(t[1]=[n("span",{class:"bar"},null,-1),n("span",{class:"bar"},null,-1),n("span",{class:"bar"},null,-1)]))]),n("div",{class:m(["mobile-menu",{open:w.value}]),onClick:g(C,["self"])},[(o(!0),s(c,null,u(k.value,((t,a)=>(o(),A(h,{key:t.path||a,to:t.path||"/",class:m(["mobile-nav-link",{active:e.$route.path===t.path}]),onClick:C},{default:r((()=>[p(d(t.text||"未命名链接"),1)])),_:2},1032,["to","class"])))),128))],2),l(n("div",{class:"mask",onClick:C},null,512),[[f,w.value]])])}}}),[["__scopeId","data-v-d64c055f"]]),ue={class:"main-layout"},Ae={class:"content-wrapper"},pe=[{path:"/",component:{__name:"MainLayout",setup(t){const l=K(),c=e((()=>l.isMobile));return l.checkMobile(),C("isMobile",c),(e,t)=>{const l=a("router-view");return o(),s("div",ue,[c.value?v("",!0):(o(),A(P,{key:0})),c.value?(o(),A(ce,{key:1})):v("",!0),n("main",Ae,[i(l,null,{default:r((({Component:e})=>[i(k,{name:"fade",mode:"out-in"},{default:r((()=>[(o(),A(w(e)))])),_:2},1024)])),_:1})]),i(ae)])}}},children:[{path:"",name:"Home",component:()=>ne((()=>import("./HomePage-DmCFwFXT.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))},{path:"/about",name:"About",component:()=>ne((()=>import("./About-DpLGSxE-.js")),__vite__mapDeps([9,10,11,3,12,13,14,5,6,7,15]))},{path:"/advantage",name:"Advantage",component:()=>ne((()=>import("./Advantage-CkbSgPU4.js")),__vite__mapDeps([16,3,2,4,5,6,7,17]))},{path:"/structure",name:"Structure",component:()=>ne((()=>import("./Structure-BclzyE6k.js")),__vite__mapDeps([18,3,5,6,7,19]))},{path:"/product",name:"Product",component:()=>ne((()=>import("./Product-BspuUW_C.js")),__vite__mapDeps([20,1,3,5,6,7,21]))},{path:"/news",name:"News",component:()=>ne((()=>import("./News-BLic_HZY.js")),__vite__mapDeps([22,10,11,3,12,13,14,5,6,7,23]))}]}],de=y({history:Y(),routes:pe}),me=B(se);me.use(V()),me.use(de);K().fetchConfig(),me.mount("#app");export{R as _};
