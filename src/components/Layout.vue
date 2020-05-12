<template>
  <div class="layout">
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
.left {
  background-color: #9dcff9;
}
.center {
  background-color: #5fb3fa;
}
.right {
  background-color: #2197fb;
}
.arrow-left {
  margin: 20px;
  text-align: left;
}
</style>