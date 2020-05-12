<template>
  <div>
    <div>
      <van-swipe-cell>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        >
        <van-field name="stepper">
              <template #input>
                <van-stepper v-model="stepper" />
              </template>
            </van-field>
        </van-card>
        <van-row>
          <van-col offset="12" span="12">
            <van-field name="stepper">
              <template #input>
                <van-stepper v-model="stepper" />
              </template>
            </van-field>
          </van-col>
        </van-row>

        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>
    <div>
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="checked">全选</van-checkbox>
        <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>
