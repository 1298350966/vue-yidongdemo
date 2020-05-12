<template>
  <div>
    <van-card
      
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notice:"1111"
    }
  },
  methods: {
    
  }
};
</script>

<style></style>
