<template>
  <div class="box">
    <div class="message">
      <el-row id='topbox'>
      <el-col :xs="8" :sm="8" :md="3">
        <div class="grid-content bg-purple">
          <img src="../../assets/food.jpg">
        </div>
      </el-col>
      <el-col :xs="12" :sm="18" :md="18">
        <div class="grid-content bg-purple-light">
          <p id="message1"><i class="el-icon-eleme"></i>{{ name }}</p>
          <p id="message2">{{ arrivetime}}</p>
          <p id='message3'>{{ sub }}</p>
        </div>
      </el-col>
      <el-col :xs="1" :sm="2" :md="2">
        <div class="grid-content bg-purple btn">
          <el-button type='text' size="mini" round id='minibtn'
          @click='dialogVisible = true'>5个&nbsp;&gt;</el-button>
          <el-dialog
          title="粥品香坊（回龙观）"
          :visible.sync="dialogVisible"
          :fullscreen="fullVisible"
          :show-close="showClose"
          width="30%"
          :before-close="handleClose">
            <ul>
              <li><i class="el-icon-star-on"></i></li>
              <li><i class="el-icon-star-on"></i></li>
              <li><i class="el-icon-star-on"></i></li>
              <li><i class="el-icon-star-on"></i></li>
              <li><i class="el-icon-star-off"></i></li>
            </ul>
          <div id="cheapmessage"></div>
          <div id="storeannoun">
            粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
            由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，
            发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
          </div>
          <span slot="footer" class="dialog-footer">
            <i class="el-icon-close" @click="dialogVisible = false"></i>
          </span>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <p id="announ" @click='dialogVisible = true'><i class="el-icon-s-order"></i>
      粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
      由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，
      发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
    </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'top',
  data () {
    return {
      name: '粥品香坊',
      arrivetime: '蜂鸟专送/38分钟送达',
      sub: '在线支付满28减5',
      dialogVisible: false,
      fullVisible: true,
      showClose: false

    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
<style scoped>
#topbox {
  padding: 20px;
}
#message1 {
  margin-top: 0;
}
#message3 {
  margin-bottom: 0;
}
img {
  width:100px;
  float: left;
  margin-right: 20px;
}
.top {
  height: 200px;
}
.message {
  background-color: rgb(96,92,90);
  color: white;
}
#announ {
  background-color: rgb(85,86,89);
  font-size: 14px;
  padding: 5px;
  margin-top: 0px;
  /* width: 100%;    根据自己项目进行定义宽度 */
  overflow: hidden;     /*设置超出的部分进行影藏*/
  text-overflow: ellipsis;     /*设置超出部分使用省略号*/
  white-space:nowrap ;    /*设置为单行*/
}
.btn {
  padding-top: 70px;
}
#minibtn {
  background-color: rgb(85,86,89);
  color:white
}
/* 虽然报错但是实现成功了的.. */
/deep/ .el-dialog {
  background-color: rgb(57,65,73);
}
ul /deep/{
  list-style-type: none;
  font-size: 250%;
  display: inline-block;
  padding-left: 0px;
  margin: 0px;
}
li /deep/{
  float: left;
}
/deep/ .el-dialog__header {
  text-align: center;
}
/deep/.el-dialog__body {
  text-align: center;
  padding-top: 0px;
}
/deep/.el-dialog__title {
  color:white;
}
</style>
