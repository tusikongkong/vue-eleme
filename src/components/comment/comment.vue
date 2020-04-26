<template>
  <div class="comment">
    <div id="topbox">
      <el-row id='needborder'>
        <el-col :span="8"><div id='needtoo'>
          <p id="item1">4.2</p>
          <p id="item2">综合评分</p>
          <p id="item3">高于周边商家69.2%</p></div>
        </el-col>
        <el-col :span="16" id='needpadding'>
          <el-row>
            <el-col :span="8">
              <p id="left1">服务态度</p>
              <p id="left2">商品评分</p>
              <p id="left3">送达时间</p>
            </el-col>
            <el-col :span="16">
              <p id="right1">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                4.1
              </p>
              <p id="right2">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-off"></i>
                4.3
              </p>
              <p id="right3">38分钟</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div id="bottombox">
      <div id="btnbox">
        <el-button type="primary" plain @click="all">全部24</el-button>
        <el-button plain @click="good">满意18</el-button>
        <el-button type="info" plain @click="bad">不满意6</el-button>
      </div>
      <div id="choosebox"><div id='needbig'>
        <i
        :class="[collect?'el-icon-success':'el-icon-circle-check']"
        @click="toggle"
        ></i></div>
        <p id='just'>只看有内容的评价</p>
      </div>
      <div id="contentall">
        <template
        v-for="(comment, index) in commentsFilter(selecttype, justtext)">
        <div id="content" :key='index'>
          <el-row>
            <el-col :span="4">
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </el-col>
            <el-col :span="20">
              <p id="name1">{{comment.nickname}}</p>
              <p id="name2">
                <el-rate
                v-model="comment.star"
                disabled
                show-score
                text-color="#ff9900"
                score-template="">
                </el-rate>
              </p>
              <p id="name3">{{comment.commit}}
              </p>
              <div id="name4">
                <i class="el-icon-tableware"></i>
                <template v-for="(index, cindex) in comment.tag">
                  <label :key='cindex'>{{comment.tag[cindex].like}}</label>
                </template>
              </div>
            </el-col>
          </el-row>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      screenheight: document.body.clientWidth,
      selecttype: 2,
      justtext: false,
      collect: false,
      squareUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      comments: [
        {
          nickname: 'd****1',
          commit: '不错，粥很好喝，我经常吃这一家非常赞，以后也会常来吃，强烈推荐。',
          star: 5,
          good: true,
          tag: [
            {
              like: '皮蛋瘦肉粥'
            },
            {
              like: '南瓜饼'
            }
          ]
        },
        {
          nickname: 'k****1',
          commit: '服务态度不错',
          star: 4,
          good: true,
          tag: []
        },
        {
          nickname: '1****2',
          commit: '送货速度跟蜗牛一样',
          star: 2,
          good: false,
          tag: []
        },
        {
          nickname: 'a****2',
          commit: '还可以奥还可以',
          star: 3,
          good: true,
          tag: [
            {
              like: '青椒炒肉'
            }
          ]
        },
        {
          nickname: '5****a',
          commit: '',
          star: 1,
          good: false,
          tag: []
        }
      ]
    }
  },
  methods: {
    toggle () {
      this.collect = !this.collect
      this.justtext = !this.justtext
    },
    all () {
      this.selecttype = '2'
    },
    good () {
      this.selecttype = '1'
    },
    bad () {
      this.selecttype = '0'
    },
    commentsFilter (type, text) {
      if (type === '1') {
        if (text === true) {
          return this.comments.filter(function (comment) {
            return comment.star >= 3 & comment.commit !== ''
          })
        } else {
          return this.comments.filter(function (comment) {
            return comment.star >= 3
          })
        }
      } else if (type === '0') {
        if (text === true) {
          return this.comments.filter(function (comment) {
            return comment.star < 3 & comment.commit !== ''
          })
        } else {
          return this.comments.filter(function (comment) {
            return comment.star < 3
          })
        }
      } else {
        return this.comments
      }
    }
  }
}
</script>

<style scoped>
#needborder {
    border-bottom: solid 1px rgba(0,0,0,0.1);
}
#needtoo {
    border-right: solid 1px rgba(0,0,0,0.1);
    text-align: center;
}
#needpadding {
    padding-left:10px
}
#item1 {
    color: orange;
    font-size: 150%;
    margin-bottom: 0;
}
#item2 {
    margin-bottom: 0;
}
#item3 {
    font-size: 80%;
    color: rgba(0,0,0,0.5);
}
#btnbox {
    border-bottom: solid 1px rgba(0,0,0,0.1);
    padding-bottom: 10px;
    margin-top: 10px;
}
#choosebox {
    border-bottom: solid 1px rgba(0,0,0,0.1);
    padding-bottom: 10px;
    margin: 10px 10px 0 10px;
}
#needbig {
    float: left;
    padding-right: 10px;
    font-size: 130%;
}
#just {
    padding-top: 3px;
    margin:0;
}
label {
    border: solid 1px rgba(0,0,0,0.2)
}
#name1 {
    margin:0;
}
#name2 {
    margin:0;
}
#name3 {
    margin:5px 0 5px 0;
}
label {
    margin:5px;
    color: rgba(0,0,0,0.5);
}
#content {
    border-bottom: solid 1px rgba(0,0,0,0.2);
    padding: 10px;
}
</style>
