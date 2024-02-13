<template>
    <a-layout :style="{ width: '100%' }" >
      <a-layout-header :style="headerStyle" style="display: flex; gap: 10px;">
        <NuxtLink to="/admin">ADMIN</NuxtLink>
        <NuxtLink to="/">Client</NuxtLink>
      </a-layout-header>
      <a-layout-content :style="contentStyle"> 
        <NuxtPage/>
    </a-layout-content>
    </a-layout>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue';
const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '10vh',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: CSSProperties = {
  height: '100%',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

</script>