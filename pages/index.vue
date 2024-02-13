<template>
   <template v-if="content">
     <ul v-if="content.footer.links.length">
      <li v-for="item in content.footer.links" :key="item._id">
         <a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.text}}</a>
      </li>
      <li v-for="item in content.footer.contacts" :key="item._id">
        <a :href="'tel:' + item.phone">{{ item.phone }}</a>
     </li>
     </ul>
     <div v-for="item in content.section" :key="item._id" class="section">
       <h3>{{ item.title }}</h3>
      <div v-for="el in item.items" :key="el._id">
         {{ el.title }}
         {{ el.description }}
      </div>
     </div>
   </template>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import type { IAllItems } from '~/interface';
import { type IContent } from '~/interface/index';


const content = ref<IContent>()
await useFetch<IAllItems>('/api/content').then((response) => {
    if (response.data && response.data.value && response.data.value.data) {
      // Присваиваем данные переменной content
      content.value = response.data.value.data;
    } else {
      console.error('No data received from the API');
    }
  }).catch((error) => {
    console.error('Error fetching data:', error);
 });


</script>

<style lang="css" scoped>
.section {
  display: flex;
  gap: 10px;
}
</style>