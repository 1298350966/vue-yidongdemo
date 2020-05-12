<template>
  <div>
     <NavBar></NavBar>
    <Swipe2></Swipe2>
    <Goods></Goods>
  </div>
</template>

<script>
import Goods from '../components/Goods'

import Swipe2 from '../components/Swipe2'
import NavBar from '../components/NavBar'

export default {
    components: {
        Goods,
        Swipe2,
        NavBar 
    }
};
</script>

<style></style>
