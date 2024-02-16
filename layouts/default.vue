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
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
  &__body {
    flex-grow: 1;
    height: fit-content;
  }
}
</style>