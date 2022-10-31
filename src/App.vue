<template>
  <el-container>
    <el-header
        height="100px"
    >手机号归属地查询系统
    </el-header>
    <el-main>
      <SearchBox @find-area="changeToCoordinate"></SearchBox>
    </el-main>
    <el-footer>
      <el-divider/>
      <ResultBox v-if="show" :area="area" :tel="tel"></ResultBox>
    </el-footer>
  </el-container>
</template>

<script>

import SearchBox from "@/components/SearchBox";
import ResultBox from "@/components/ResultBox";

export default {
  name: 'App',
  components: {ResultBox, SearchBox},
  data() {
    return {
      localtion: '',
      arr: [],
      area: null,
      tel: null,
      show: false
    }
  },
  methods: {
    changeToCoordinate(area, tel, show) {
      this.area = area
      this.tel = tel
      this.show = show
    }
  },
  watch: {
    localtion(news) {
      this.arr = news.split(',')
    }
  },
  beforeCreate() {
    // document.querySelector('body').setAttribute('style', 'background-color: #bd8253;')
  },

}
</script>

<style lang="less" scoped>
.el-container {
  margin: 0 auto;
  width: 530px;

  .el-header {
    margin: 30px 0;
    background: linear-gradient(135deg, #fce38a, #f38181);
    text-align: center;
    line-height: 100px;
    font-size: 26px;
    color: #f5f3f2;
    border-radius: 10px;
  }

  .el-main {
    text-align: center;
  }
}
</style>
