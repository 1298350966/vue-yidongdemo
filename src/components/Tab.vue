<template>
  <div>
    <van-tabs>
      <van-tab v-for="(item,index) in tabslist" :key="index" :title="item.title">
        <van-card
          :desc="item.desc"
          :title="item.text"
          :thumb="item.url"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { tabList } from "../api/home";
export default {
    data () {
    return {
      tabslist:"",
      title:"",
      desc:"",
       text:"",
       thumb:""
      
    }
  },
  created() {
    this.tabList()
  },
  methods: {
    tabList(){
     tabList()
      .then((res) => {
        this.tabslist = res.data.data.items
        
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
};
</script>

<style></style>
