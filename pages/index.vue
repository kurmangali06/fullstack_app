<template>
  <template v-if="contentStore.content.section?.length">
    <div v-for="(section) in contentStore.content.section" :key="section._id">
      <Block :section="section" ></Block>
    </div>
    <Service/>
  </template>
   
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { IAllItems } from '~/interface';
import { type IContent } from '~/interface/index';
import { useContentStore } from '~/stores/contents';

const contentStore = useContentStore()


useAsyncData(async() => {
  await useFetch<IAllItems>('/api/content').then((response) => {
    if (response.data && response.data.value && response.data.value.data) {
      // Присваиваем данные переменной content
      contentStore.setContent( response.data.value.data);
    } else {
      console.error('No data received from the API');
    }
  }).catch((error) => {
    console.error('Error fetching data:', error);
 });
})



</script>

<style lang="css" scoped>
.section {
  display: flex;
  gap: 10px;
}
</style>