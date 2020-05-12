<template>
  <div class="me">
    <van-tabs @click="onClick">
      <van-tab title="登录">
          <van-skeleton title :row="2" />
          <login></login>
          </van-tab>
      <van-tab title="注册">
          <van-skeleton title :row="2" />
        <register></register>
      </van-tab>
    </van-tabs>
    
    <Layout></Layout>
  </div>
</template>

<script>
import login from "../components/login";
import register from "../components/register";
import Layout from "../components/Layout";
export default {
  components: {
      login,
    register,
    Layout
  },
};
</script>

<style>
.me{
  padding-bottom:100px ;
}
</style>
