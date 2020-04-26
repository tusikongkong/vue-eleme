<template>
  <div id="app">
    <top></top>
    <el-row>
      <el-col :span="8"><router-link to='/user/goods' class='goods'>商品</router-link></el-col>
      <el-col :span="8"><router-link to='/user/comment' class='comment'>评论</router-link></el-col>
      <el-col :span="8"><router-link to='/user/store' class='store'>商家</router-link></el-col>
    </el-row>
    <router-view class='needstop'></router-view>
  </div>
</template>

<script>
import top from './components/top/top.vue'

export default {
  data () {
    return {
      title: 'kongKong'
    }
  },
  components: {
    top
  }
}
</script>

<style scoped>
.el-row {
  text-align: center;
  border-bottom: solid 1px rgba(0,0,0,0.1);
  padding-bottom: 10px;
}
a {
  color:black
}
a:link {
  text-decoration: none;
}
</style>
<style>
body {
  margin: 0;
}
</style>
