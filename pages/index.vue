<template>
   <template v-if="items">
      <div class="content" v-for="(item, index) in items.data" :key="item.item">{{ item?.item }}</div>
   </template>
</template>

<script lang="ts" setup>
import type { IAllItems } from '~/interface';



const { data: items,} = await useFetch<IAllItems>('/api/content')
</script>

<style lang="css" scoped>

</style>