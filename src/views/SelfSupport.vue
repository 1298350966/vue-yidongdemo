<template>
  <div class="SelfSupport">
    <van-image
      width="100%"
      height="200px"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <Grid3></Grid3>
    <h2>企业服务</h2>
    <p>满足企业一站式服务</p>
    <Tab></Tab>
    <Layout/>
  </div>
</template>

<script>
import Tab from "../components/Tab";
import Grid3 from "../components/Grid3";
import Layout from "../components/Layout";
export default {
  components: {
    Tab,
    Grid3,
    Layout
  },
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100px;
}
.SelfSupport{
  padding-bottom:100px ;
}
</style>
