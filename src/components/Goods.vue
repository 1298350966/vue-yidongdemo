<template>
  <div class="content">
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push({path: '/shoppingCart'})" />
  <van-goods-action-button
    type="warning"
    text="加入购物车"
    @click="onClickButton"
  />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
 methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
  },
}
</script>

<style>
.content{
  padding-bottom: 50px;
}

</style>