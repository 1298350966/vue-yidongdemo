<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="toRescue(index)">
        <van-image
          width="100%"
          height="150px"
          fit="cover"
          :src="image.url"
        />
      </van-swipe-item>
    </van-swipe>
    
  </div>
</template>

<script>
import { swipeList } from "../api/home";
export default {
  data() {
    return {
      images: ""
    };
  },
  created() {
    this.swipelist()
  },
  methods: {
    swipelist() {
      swipeList()
        .then((res) => {
          this.images = res.data.data.items
      console.log(this.images[1]);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    toRescue(index) {
        window.location.href = this.images[index].url;
        console.log(this.images[1]);
        console.log(index);
      },
  },
};
</script>

<style scoped></style>
