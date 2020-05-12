<template>
  <div>
    <NavBar></NavBar>
    <van-dropdown-menu>
      <van-dropdown-item @change="demoList" v-model="duanzi.type" :options="option1" />
      <van-dropdown-item @change="demoList" v-model="duanzi.count" :options="option2" />
    </van-dropdown-menu>

    <div
      class="card"
      v-for="item in demolist"
      :key="item.sid"
      @click="$router.push({ path: '/' })"
    >
      <div class="left-img">
        <van-image width="100" height="100" :src="item.header" />
      </div>
      <div class="rigth">
        <h4>{{ item.name }}</h4>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { duanzi } from "../api/dmeo.js";
import NavBar from "../components/NavBar";
export default {
  data() {
    return {
      value1: "all",
      value2: "10条",
      option1: [
        { text: "全部", value:"all" },
        { text: "视频", value: "video" },
        { text: "图片", value: "image"},
        { text: "gif图片", value: "gif" },
      ],
      option2: [
        { text: "10条", value: "10"},
        { text: "20条", value: "20"},
        { text: "30条", value: "30"},
        { text: "40条", value: "40"},
      
      ],
      demolist: "",
      duanzi: {
        page: "1",
        count: "10",
        type: "video",
      },
    };
  },
  created() {
    this.demoList();
  },
  methods: {
    demoList() {
      console.log(this.duanzi);
      duanzi(this.duanzi)
        .then((res) => {
          this.demolist = res.data.result;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  components: {
    NavBar,
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 110px;
  display: flex;

  overflow: hidden;
}
.card .left-img {
  flex: 1;
  padding: 5px;
}
.card .rigth {
  flex: 2;
  padding: 5px;
  overflow: hidden;
}
.card .rigth h4 {
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
}
</style>
