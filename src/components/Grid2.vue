<template>
  <div>
    <van-grid  :column-num="3" icon-size="50px">
      <van-grid-item
        v-for="value in grids"
        :key="value"
        url=""
        :icon="value.url"
        :text="value.text"
      />
    </van-grid>
    <van-image
      width="100%"
      height="100px"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
  </div>
</template>

<script>
import { grid2List } from "../api/home";
export default {
  data() {
    return {
      grids: "",
    };
  },
  created() {
    this.grid2List();
  },
  methods: {
    grid2List() {
      grid2List()
        .then((res) => {
          this.grids = res.data.data.items;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>

</style>
