<template>
  <div class="home">
    
    <DropdownMenu/>
    <router-link v-for="(item, index) in 10" :key="index" :to="'/goods/'+index">
      <Card ></Card>
    </router-link>
    
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "../components/Layout";
import DropdownMenu from '../components/DropdownMenu'
import Card from '../components/Card'
export default {
components: {
  DropdownMenu,
  Card,
  Layout
}
}
</script>

<style>
.home{
  padding-bottom:100px ;
}
</style>