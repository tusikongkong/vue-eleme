<template>
  <div class="storebox">
    <div class="storetop">
      <el-row id='needborder'>
        <el-col :span="12">
          <p>粥品香坊（回龙观）</p>
          <p>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-on"></i>
            <i class="el-icon-star-off"></i>
            (24)月售90单
          </p>
        </el-col>
        <el-col :span="12" id='rightstar'>
          <div id="isize">
            <i
            :class="[collect?'el-icon-success':'el-icon-circle-check']"
            @click="toggle"
            ></i>
          </div>
          <p id='psize'>{{iscollect}}</p>
        </el-col>
      </el-row>
      <el-row id='needcenter'>
        <el-col :span="8"><div id="needtoo">
          <p id='nobottom'>起送价</p>
          <p id='notop'><strong>20</strong>元</p></div>
        </el-col>
        <el-col :span="8"><div id="needtoo">
          <p id='nobottom'>商家配送</p>
          <p id='notop'><strong>4</strong>元</p></div>
        </el-col>
        <el-col :span="8"><div id="needno">
          <p id='nobottom'>平均配送时间</p>
          <p id='notop'><strong>38</strong>分钟</p></div>
        </el-col>
      </el-row>
    </div>
    <div class="storefooter">
      <div id="needcener">
        <p>公告与活动</p>
      </div>
      <div id="needborder">
        <p id='notop'>粥品香坊其烹饪粥料的秘方源于中国千年古法，
            在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、
            0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。
            是2008年奥运会和2013年园博会指定餐饮服务商。</p>
      </div>
      <div id="needborder">
        <i class="el-icon-check"></i>
        在线支付满28减5</div>
      <div id="needborder">
        <i class="el-icon-check"></i>
        vc无限橙果汁全场8折</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collect: false
    }
  },
  computed: {
    iscollect () {
      return this.collect ? '已收藏' : '收藏'
    }
  },
  methods: {
    toggle () {
      this.collect = !this.collect
    }
  }
}
</script>

<style scoped>
#isize {
    font-size: 160%;
    float: right;
    padding: 9px;
}
#psize {
    float: right;
}
#ptop {
    font-size: 13px;
}
#rightstar {
    padding-top: 20px;
}
.storetop {
    border-bottom: solid 1px rgba(0,0,0,0.1);
}
#needborder {
    border-bottom: solid 1px rgba(0,0,0,0.1);
    padding: 5px;
}
#needcenter {
    text-align: center;
}
#needtoo {
    border-right: solid 1px rgba(0,0,0,0.1);
}
strong {
    font-size: 200%;
    font-weight: 500;
}
#notop {
    margin-top:0;
}
#nobottom {
    margin-bottom:0;
}
#needcener {
    text-align: center;
}
</style>
