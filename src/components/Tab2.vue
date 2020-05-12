<template>
  <div>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(item,index) in tablist" :key="index" :title="item.title">
        <router-link  :to="'/goods/'+index">
        <van-card
          desc="描述信息"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          v-for="(item, index) in 8"
          :key="index"
        />
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { tabTwoList } from "../api/home";
export default {
  data() {
    return {
      tablist:"",
      active: "",
      title: "",
      desc: "",
      text: "",
      url: "",
    };
  },
  created() {
    this.tabTwoList();
  },
  methods: {
    tabTwoList() {
      tabTwoList()
        .then((res) => {
          this.tablist = res.data.data.items;
    
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
