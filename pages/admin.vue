<template>
    <a-form
    ref="formRef"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      label="item"
      name="item"
      :rules="[{ required: true, message: 'Please input your item!' }]"
    >
      <a-input v-model:value="formState.item" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance } from 'ant-design-vue';

interface FormState {
  item: string;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  item: '',
});

const onFinish = async (values: any) => {
  console.log('Success:', values);
  await $fetch('/api/content', {
    method: 'post',
    body: { ...values }
  }).finally(() => {
    formRef.value?.resetFields();
  })
};

const resetForm = () => {
  formRef.value?.resetFields();
};
onMounted(async () => {
 await useFetch('/api/content').then((e) => {
  console.log(e);
  
 })
})
</script>
<style lang="scss" scoped>
    
</style>