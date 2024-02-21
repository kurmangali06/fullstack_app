<template>
    <div class="content">
      <Header v-if="route.name !== 'admin' && route.name !== 'auth'"/>
      <div class="content__body">
        <NuxtPage/>
      </div>
      <Footer v-if="route.name !== 'admin' && route.name !== 'auth'"/>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;

  background-color: #fff;
  height: 100vh;
  @media (max-width: 1024px) {
    position: relative;
  }
  &__body {
    flex-grow: 1;
    height: fit-content;
  }
}
</style>