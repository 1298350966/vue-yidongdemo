<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="$router.go(-1)">
      <template #right>
        <van-icon name="search" size="18"  />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
   
  },
};
</script>

<style></style>
