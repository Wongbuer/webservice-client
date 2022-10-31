<template>
  <div class="box">
    <!--    <input type="text" v-model="tel" @keydown.enter="getArea">-->
    <el-input
        v-model="tel"
        :class="iserror"
        clearable
        placeholder="请输入十一位手机号"
        @input="changeNormal"
        @keydown.enter.native="getArea"></el-input>
    <el-button v-if="result===0" @click="getArea">查询</el-button>
    <el-button v-else-if="result===1" class="btn-error">请输入正确的手机号</el-button>
    <el-button v-else-if="result===2" class="btn-error">未查询到该手机号</el-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBox",
  data() {
    return {
      tel: '',
      area: null,
      iserror: '',
      result: 0
    }
  },
  methods: {
    changeNormal() {
      this.iserror = ''
      this.result = 0
    },
    changeError() {
      this.iserror = 'error'
      this.result = 1
    },
    changeNoResult() {
      this.iserror = 'error'
      this.result = 2
    },
    regTest() {
      const reg = /^(\+?0?86-?)?1[3-9]\d{9}$/
      return reg.test(this.tel)
    },
    async getArea() {
      if (this.regTest()) {
        const {data: res} = await axios.post("/api/getMobileCodeInfo", {
          'mobileCode': this.tel,
          'userID': ''
        }, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        try {
          this.area = res.match(/(?<=：)\D+(?=<)/g)[0].split(' ')
          this.$emit('find-area', this.area, this.tel, true)
        } catch (e) {
          this.changeNoResult()
          this.$emit('find-area', this.area, this.tel, false)
        }
      } else {
        this.changeError()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-button {
  margin: 30px auto;
  display: block;
  width: 100%;
  height: 70px;
  border-radius: 10px;
}

.btn-error {
  display: block;
  background-color: #9e2a22;
  color: #f5f3f2;
  font-size: 24px;
}

/deep/ .el-input {
  input {
    font-size: 26px;
    height: 100px;
    border-radius: 10px;
  }
}

.error {
  /deep/ .el-input__inner {
    border: 3px solid #7c191e;
    color: #ba5b49;
  }
}
</style>
