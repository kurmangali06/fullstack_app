<template>
  <a-card title="header" style="width: 100%; margin-top: 10px">
    <a-form-item label="главный заголовок EN" style="width: 100%">
      <a-input v-model:value="state.title_en" />
    </a-form-item>
    <a-form-item label="главный заголовок RU" style="width: 100%">
      <a-input v-model:value="state.title_ru" />
    </a-form-item>
    <a-form-item label="главный заголовок KZ" style="width: 100%">
      <a-input v-model:value="state.title_kz" />
    </a-form-item>
    <a-form-item label="доп заголовок EN" style="width: 100%">
      <a-input v-model:value="state.subtitle_en" />
    </a-form-item>
    <a-form-item label="доп заголовок RU" style="width: 100%">
      <a-input v-model:value="state.subtitle_ru" />
    </a-form-item>
    <a-form-item label="доп заголовок KZ" style="width: 100%">
      <a-input v-model:value="state.subtitle_kz" />
    </a-form-item>
    <a-form-item label="описание EN" style="width: 100%">
      <a-textarea v-model:value="state.description_en" />
    </a-form-item>
    <a-form-item label="описание RU" style="width: 100%">
      <a-textarea v-model:value="state.description_ru" />
    </a-form-item>
    <a-form-item label="описание KZ" style="width: 100%">
      <a-textarea v-model:value="state.description_kz" />
    </a-form-item>
  </a-card>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { IHeader } from "~/interface/index";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Object as PropType<IHeader>,
    default: () => ({}),
  },
});
let state = reactive<IHeader>({
  subtitle: "",
  title_en: "",
  title_ru: "",
  title_kz: "",
  description_en: "",
  description_ru: "",
  description_kz: "",
  subtitle_en: "",
  subtitle_ru: "",
  subtitle_kz: ""
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
