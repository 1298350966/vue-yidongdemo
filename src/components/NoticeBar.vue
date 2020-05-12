<template>
  <div>
    <van-notice-bar left-icon="volume-o" :scrollable="true">
      {{notice}}
    </van-notice-bar>
  </div>
</template>

<script>
import { noticeList } from "../api/home";
export default {
  data () {
    return {
      notice:""
    }
  },
  created() {
    this.noticeList()
  },
  methods: {
    noticeList(){
      noticeList()
      .then((res) => {
          this.notice = res.data.data.items[0].notice
         
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
};
</script>

<style></style>
