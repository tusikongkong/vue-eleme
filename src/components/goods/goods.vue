<template>
  <div class="goodsbox">
    <el-row>
      <el-col :span="5" id='needleft'>
        <el-scrollbar class='page-component__scroll'>
            <ul id='leftbox'>
                <template v-for='(item,index) in items'>
                <li
                :class="{'active': index==current, 'isactive': isactive===index}"
                :key='index'
                @click="seleced(index)"><div id="leftitems"><span>
                    {{item.name}}</span></div>
                </li>
                </template>
            </ul>
        </el-scrollbar>
      </el-col>
      <el-col :span="19" id='needright'>
        <el-scrollbar class='page-component__scroll'>
        <ul id='rightbox'>
            <template v-for='(good,index) in goods'>
                <li :key='index' id='ballballu'>
                    <div id="rightitems">
                      <el-row>
                        <el-col :span="6">
                          <img :src="good.image">
                        </el-col>
                        <el-col :span="11">
                          <p id="food1">{{good.foodname}}</p>
                          <p id="food2">月售{{good.sellquality}}份&nbsp;好评率{{good.goodpercent}}%</p>
                          <p id="food3">￥{{good.price}}</p>
                        </el-col>
                        <el-col :span="6" id='needtop'>
                          <i class="el-icon-remove-outline" id='getnum'
                          :style='ifzero(index)'
                          @click='numdown(index)'></i>
                          <span id='howmany'>{{good.num}}</span>
                          <i class="el-icon-circle-plus-outline" id='getnum'
                          @click='numup(index)'></i>
                        </el-col>
                      </el-row>
                    </div>
                </li>
            </template>
        </ul>
        </el-scrollbar>
      </el-col>
    </el-row>
    <div id="footer">
      <el-row>
        <el-col :span="16" id='leftfooter'>
          <el-badge :value="allnum" class="item">
            <el-avatar icon="el-icon-shopping-cart-2"
            :class="total==0 ? '' : 'getblue'"></el-avatar>
          </el-badge>
          <span id='price'
          :class="total==0 ? '' : 'getred'">￥{{total}}</span>
          <span id="pnotice">另需配送费￥4元</span>
        </el-col>
        <el-col :span="8" id='rightfooter'>
          <el-popconfirm
            confirmButtonText='冲了'
            cancelButtonText='再选选'
            icon="el-icon-finished"
            iconColor="green"
            title="确定支付吗">
          <el-button slot="reference"
          :class="total<20 ? 'getblack' : 'getgreen'">
          {{order}}
          </el-button>
          </el-popconfirm>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      allnum: 0,
      total: 0,
      current: 0,
      isactive: 0, // 当前激活的导航索引
      items: [
        {
          name: '热销榜',
          isseleced: false
        },
        {
          name: '单人精彩套餐',
          isseleced: false
        },
        {
          name: '冰爽饮品限时特惠',
          isseleced: false
        },
        {
          name: '爽口凉菜',
          isseleced: false
        },
        {
          name: '精选套餐',
          isseleced: false
        },
        {
          name: '果拼果汁',
          isseleced: false
        },
        {
          name: '小吃主食',
          isseleced: false
        }
      ],
      goods: [
        {
          foodname: '皮蛋瘦肉粥',
          image: '/img/cat.6b02c14a.jpg',
          sellquality: 229,
          goodpercent: 100,
          price: 10,
          num: 0
        },
        {
          foodname: '扁豆焖面',
          image: '/img/cat.6b02c14a.jpg',
          sellquality: 188,
          goodpercent: 96,
          price: 12,
          num: 0
        },
        {
          foodname: '葱花饼',
          image: '/img/cat.6b02c14a.jpg',
          sellquality: 124,
          goodpercent: 85,
          price: 6,
          num: 0
        },
        {
          foodname: '牛肉馅饼',
          image: '/img/cat.6b02c14a.jpg',
          sellquality: 114,
          goodpercent: 91,
          price: 8,
          num: 0
        },
        {
          foodname: '南瓜粥',
          image: '/img/cat.6b02c14a.jpg',
          sellquality: 91,
          goodpercent: 100,
          price: 7,
          num: 0
        }
      ]
    }
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll)
  },
  destroy () {
    // 必须移除监听器，不然当该vue被销毁了，监听器还在就会出错
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    order () {
      if (this.total === 0) {
        return '满20元起送'
      } else if (this.total < 20) {
        const need = 20 - this.total
        return '还差' + need + '元起送'
      } else {
        return '去下单'
      }
    }
  },
  methods: {
    ifzero (index) {
      if (this.goods[index].num === 0) {
        return 'visibility:hidden'
      } else {
        return 'visibility:visible'
      }
    },
    numdown (index) {
      this.goods[index].num -= 1
      this.total -= this.goods[index].price
      if (this.allnum !== 0) {
        this.allnum -= 1
      }
    },
    numup (index) {
      this.goods[index].num += 1
      this.total += this.goods[index].price
      this.allnum += 1
    },
    // totally () {
    //   if (this.total !== 0) {
    //     console.log(this.total)
    //     return 'color:white'
    //   } else {
    //     console.log(this.total)
    //   }
    // },
    seleced (index) {
      this.current = index
    //   this.items[index].isseleced = !this.items[index].isseleced
    },
    onScroll () {
      //   获取所有锚点元素
      const navContents = document.querySelectorAll('#ballballu')
      //   所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop)
      })
      //   获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      // 把下标赋值给 vue 的 data
      this.isactive = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo (index) {
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop = document.querySelector(`#ballballu:nth-child(${index + 1})`).offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown () {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp () {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    }
  }
}
</script>

<style scoped>
#needleft {
    height: 400px;
}
#needright {
    height:400px;
}
/* html,body{
    height:100%;
    overflow: hidden;
} */
.page-component__scroll{
    height: 100%;
}
.page-component__scroll .el-scrollbar__wrap {
    overflow-x: hidden;
}
ul {
    list-style-type: none;
}
#leftbox li {
    color:black
}
.active {
    background-color: white;
}
#leftbox {
    background-color: rgb(243,245,247);
    font-size: 12px;
    padding-left: 0px;
    margin: 0;
    /* width: 100px; */
}
#leftitems {
    height: 50px;
    border-bottom: solid 1px rgba(0,0,0,0.1);
    margin-right: 10px;
    margin-left: 10px;
    padding-left: 10px
}
#rightitems {
    /* height: 300px; */
    border-bottom: solid 1px rgba(0,0,0,0.1);
    background-color: white;
}
#rightbox {
    padding-left: 0;
    margin: 0;
}
#footer {
    background-color: rgb(20,29,39);
    height:70px;
    bottom: 0px;
    width: 100%;
    position: fixed;
    color:rgba(255,255,255,0.4)
}
#leftfooter {
    padding: 16px;
}
#rightfooter {
    /* background-color: rgb(43,51,59); */
    /* height: 70px; */
    padding-top: 17px;
    padding-left: 30p;
    text-align: center;
}
#price {
    margin: 16px;
}
img {
    height:60px;
    margin: 10px
}
#food1 {
    margin: 8px;
    font-size: 80%;
}
#food2 {
    font-size: 80%;
    color: rgba(0,0,0,0.6);
    margin: 0 8px 0 8px;
}
#food3 {
    margin: 8px 8px 0 8px;
    color: red;
}
#getnum {
   font-size: 150%;
   padding:5px;
}
#needtop {
    padding-top: 50px;
}
.el-popover__reference {
    /* background-color: rgb(43,51,59); */
    color:rgba(255,255,255,0.6);
    width: 120px;
}
.getblack {
    background-color: rgb(43,51,59);
}
.getgreen {
    background-color: rgb(0,180,60);
    color:white;
}
.getred {
    color:white;
}
.getblue {
    background: rgb(0,144,198);
}
.el-icon-circle-plus-outline {
    color: rgb(0,144,198);
}
.el-icon-remove-outline {
    color: rgb(0,144,198);
}
#howmany {
    color: rgba(0,0,0,0.4);
}
</style>
