<template>
    <a-card title="header" style="width: 100%; margin-top: 10px">
        <a-form-item label="главный заголовок" style="width: 100%">
          <a-input v-model:value="state.title" />
        </a-form-item>
        <a-form-item label="доп заголовок" style="width: 100%">
            <a-input v-model:value="state.subtitle" />
          </a-form-item>
          <a-form-item label="описание" style="width: 100%">
            <a-textarea v-model:value="state.description" />
          </a-form-item>
      </a-card>
</template>
<script setup lang="ts">
import { defineProps, defineEmits} from 'vue'
import type { IHeader } from '~/interface/index'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue :{
        type: Object as PropType<IHeader>,
        default: () => ({}),   
    }
})
let state = reactive<IHeader>({
    title: '',
    description: '',
    subtitle: '',
})

watch(() => state, () => {
    emit('update:modelValue', state)
}, {
    deep: true
}) 


watch(() => props.modelValue, () => {
  if(props.modelValue) {
        state = props.modelValue
    }
}, {
  deep: true,
  immediate: true
})

</script>
<style lang="scss" scoped>
.containerImage {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &__deletes {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }

  .image {
    width: 50%;
    height: 50%;
    border-radius: 20px;
  }
  
</style>