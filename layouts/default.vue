<template>
    <div class="content">
      <Header v-if="route.name !== 'admin'"/>
      <div class="content__body">
        <NuxtPage/>
      </div>
      <Footer v-if="route.name !== 'admin'"/>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 10px auto;
  background-color: #fff;
  height: 100vh;
  @media (max-width: 1024px) {
    max-width: 1024px;
}
  &__body {
    flex-grow: 1;
    height: fit-content;
  }
}
</style>