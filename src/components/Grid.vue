<template>
  <div>
    <van-grid square>
      <van-grid-item
        v-for="(items,index) in gridlist"
        :key="index"
        :icon="items.url"
        :text="items.text"
        @click="$router.push({path:'/demo/'+index})"
      />
    </van-grid>
  </div>
</template>

<script>
import { gridList } from "../api/home";
export default {
  data () {
    return {
      gridlist:"",
    }
  },
  created() {
    this.gridList()
  },
  methods: {
    gridList(){
      gridList()
      .then((res) => {
          this.gridlist = res.data.data.items
          
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
};
</script>

<style></style>
