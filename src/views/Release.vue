<template>
  <div class="Release">
    <div class="field">
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </div>
    <Uploader></Uploader>
    <van-field v-model="text" label="预算" />
    <van-skeleton title :row="1" />
    <van-button round block type="info" native-type="submit">
          提交
        </van-button>
        <Layout></Layout>
  </div>
</template>

<script>
import Uploader from "../components/Uploader";
import Layout from "../components/Layout";
export default {
  components: {
    Uploader,
    Layout
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
.field .van-field__body {
  padding: 5px;
  border: 1px solid #999999;
}
.Release{
  padding-bottom:100px ;
}
</style>
