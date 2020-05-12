<template>
  <div id="index">
    <van-row>
      <a href="javascript:void(0)" @click="$router.push('/layout')">
          <van-col span="6">
            <van-icon name="wap-nav" />
            <div>布局</div>
          </van-col>
      </a>
      <van-col span="6"></van-col>
      <van-col span="6"></van-col>
      <van-col span="6"></van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">
        <router-link to="/">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item name="search" icon="search">
        <router-link to="/about">人才</router-link>
      </van-tabbar-item>
      <van-tabbar-item name="search" icon="search">
        <router-link to="/Release">发需求</router-link>
      </van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">
        <router-link to="/SelfSupport">自营</router-link>
      </van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">
        <router-link to="/me">我的</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>