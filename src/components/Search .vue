<template>
  <div>
       <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    
  </div>
</template>

<script>
export default {
data () {
    return {
      notice:"1111",
      value:""
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>