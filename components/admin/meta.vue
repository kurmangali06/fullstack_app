<template>
    <a-card title="meta" style="width: 100%; margin-top: 10px">
        <a-form-item label="meta title" style="width: 100%">
          <a-input v-model:value="state.title" />
        </a-form-item>
        <a-form-item label="meta description" style="width: 100%">
          <a-textarea v-model:value="state.description" />
        </a-form-item>
        <a-form-item label="meta keywords" style="width: 100%">
          <a-textarea v-model:value="state.keywords" />
        </a-form-item>
      </a-card>
</template>
<script  setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { IMeta } from "~/interface/index";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Object as PropType<IMeta>,
    default: () => ({}),
  },
});

let state = reactive<IMeta>({
  title: "",
  description: "",
  keywords: ""
});

watch(
  () => state,
  () => {
    emit("update:modelValue", state);
  },
  {
    deep: true,
  }
);

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      state = props.modelValue;
    }
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style lang="">
    
</style>