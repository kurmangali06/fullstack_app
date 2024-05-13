<template>
  <template v-if="contentStore.content.section?.length">
    <div v-for="(section, index) in contentStore.content.section" :key="section._id">
      <Block :section="section" :number="index + 1"></Block>
    </div>
    <Service/>
  </template>
   
</template>

<script lang="ts" setup>
import Service from '~/components/service.vue';
const contentStore = useContentStore()

</script>

<style lang="css" scoped>
.section {
  display: flex;
  gap: 10px;
}
</style>