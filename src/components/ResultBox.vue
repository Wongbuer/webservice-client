<template>
  <div>
    <el-descriptions :column="1" border title="手机号归属地">
      <el-descriptions-item label="手机号">{{ tel }}</el-descriptions-item>
      <el-descriptions-item label="所在地区">{{ area[0] + area[1] }}</el-descriptions-item>
      <el-descriptions-item label="手机号类型">
        <el-tag size="small">{{ area[2] }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "ResultBox",
  props: ['area', 'tel']
}
</script>

<style scoped>

</style>
