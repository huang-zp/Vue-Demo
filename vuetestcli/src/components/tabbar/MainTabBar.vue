<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="deeppink">
      <template v-slot:icon>
        <img src="../../assets/img/tabbar/icon01.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../assets/img/tabbar/icon01_active.png" alt="">
      </template>
      <template v-slot:text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template v-slot:icon>
        <img src="../../assets/img/tabbar/icon02.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../assets/img/tabbar/icon02_active.png" alt="">
      </template>
      <template v-slot:text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/cart">
      <template v-slot:icon>
        <img src="../../assets/img/tabbar/icon03.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../assets/img/tabbar/icon03_active.png" alt="">
      </template>
      <template v-slot:text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template v-slot:icon>
        <img src="../../assets/img/tabbar/icon04.png" alt="">
      </template>
      <template v-slot:icon-active>
        <img src="../../assets/img/tabbar/icon04_active.png" alt="">
      </template>
      <template v-slot:text>
        <div>我的</div>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>

</style>