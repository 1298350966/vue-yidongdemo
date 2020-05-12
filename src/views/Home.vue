<template>
  <div class="home">
    <div v-if="SearchShow">
      <Search></Search>
    </div>

    <div v-if="SwipeShow">
      <Swipe></Swipe>
    </div>

    <div v-if="NoticeShow">
      <NoticeBar></NoticeBar>
    </div>

    <div v-if="GridShow">
      <Grid></Grid>
      <br />
    </div>

    <div v-if="TabShow">
      <p>官方推荐</p>
      <Tab></Tab>
      <br />
    </div>
    <div v-if="Grid2Show">
      <p>平台指引</p>
      <Grid2></Grid2>
      <br />
    </div>

    <div v-if="Tab2Show">
      <p>猜你喜欢</p>

      <Tab2></Tab2>
    </div>
    <Layout></Layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "../components/Layout";
import Swipe from "../components/Swipe";
import Grid from "../components/Grid";
import Grid2 from "../components/Grid2";
import Tab from "../components/Tab";
import Tab2 from "../components/Tab2";
import NoticeBar from "../components/NoticeBar";
import Search from "../components/Search ";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Grid,
    Grid2,
    Swipe,
    Tab,
    Tab2,
    NoticeBar,
    Search,
    Layout
  },
  created() {
    console.log(this.GridShow);
  },
  computed: {
    ...mapState({
      SearchShow: "SearchShow",
      SwipeShow: "SwipeShow",
      NoticeShow: "NoticeShow",
      TabShow: "TabShow",
      Grid2Show: "Grid2Show",
      Tab2Show: "Tab2Show",
      GridShow:"GridShow"
    }),
  },
};
</script>
<style scoped>
.home {
  padding-bottom: 100px;
}
</style>
