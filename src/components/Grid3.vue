<template>
  <div>
      <van-grid :column-num="2">
  <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="文字" />
</van-grid>
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
}
</script>

<style>

</style>