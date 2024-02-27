<template>
  <template v-if="contentStore.content.section?.length">
    <div v-for="(section) in contentStore.content.section" :key="section._id">
      <Block :section="section" ></Block>
    </div>
    <Service/>
  </template>
   
</template>

<script lang="ts" setup>
const contentStore = useContentStore()

</script>

<style lang="css" scoped>
.section {
  display: flex;
  gap: 10px;
}
</style>