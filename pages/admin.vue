<template>
  <div class="content">
    <a-form
      ref="formRef"
      :model="formState"
      name="basic"
      class="form"
      style="width: 80%; margin: 0 auto"
      autocomplete="off"
    >
      <AdminHeader v-model="formState.header"/>
      <a-divider dashed plain orientation="left"
        ><a-typography-title :level="5">контент </a-typography-title></a-divider
      >
      <template v-if="formState.section">
        <VueDraggableNext
          class="dragArea list-group w-full"
          :list="formState.section"
        >
          <template v-for="(item, index) in formState.section" :key="item._id">
            <a-card
              :title="item.title"
              :bordered="false"
              style="width: 100%; margin-bottom: 10px; cursor: pointer"
            >
              <div style="display: flex; gap:10px">
                <div style="flex-grow: 1">
                  <a-form-item label="заголовок">
                    <a-input
                      v-model:value="item.title"
                      placeholder="please input title"
                    />
                  </a-form-item>
                  <a-form-item label="навигация">
                    <a-input
                      v-model:value="item.navigate"
                      placeholder="please input title"
                    />
                  </a-form-item>
                
                  <a-form-item label="описание">
                    <a-textarea
                      v-model:value="item.description"
                      placeholder="please input description"
                      :auto-size="{ minRows: 2, maxRows: 5 }"
                    />
                  </a-form-item>
                  <a-form-item class="wrapper" v-if="item.images.length">
                    <div  v-for="el in item.images" :key="el" class="containerImage">
                      <img :src="`images/${el}`" class="image" >
                      <DeleteOutlined
                        style=" color: red"
                        class="containerImage__deletes"
                        @click.stop="removeImage(el, index)"
                      />
                    </div>
                  </a-form-item>
                  <a-form-item class="wrapper">
                    <a-upload
                      list-type="picture-card"
                      accept="image/*"
                      :action="`/api/upload`"
                      @remove="deleteImage($event, index)"
                      @preview="() => {}"
                      @change="handleUploadSuccess($event, index)"
                    >
                      <div style="margin-top: 8px">Upload</div>
                  </a-upload>
                  </a-form-item>
                  <VueDraggableNext class="dragchildren" :list="item.items">
                    <template v-if="item.items.length">
                      <div
                        class="wrapper block"
                        v-for="(el, i) in item.items"
                        :key="el._id"
                      >
                        <div>
                          <a-form-item label="заголовок блока">
                            <a-input
                              v-model:value="el.title"
                              placeholder="please input title"
                              style="width: 80%; margin-right: 8px"
                            />
                          </a-form-item>
                          <a-form-item label="описание блока">
                            <a-input
                              v-model:value="el.description"
                              placeholder="please input title"
                              style="width: 80%; margin-right: 8px"
                            />
                          </a-form-item>
                        </div>
                        <MinusCircleOutlined
                          style="color: red"
                          v-if="formState.footer.links"
                          class="dynamic-delete-button"
                          @click.stop="removeChild(el, index, i)"
                        />
                      </div>
                    </template>
                  </VueDraggableNext>
                  <a-form-item class="wrapper">
                    <a-button
                      type="dashed"
                      style="width: 300px; margin-top: 20px"
                      @click="addChild(index)"
                    >
                      <PlusOutlined />
                      Добавить блок
                    </a-button>
                  </a-form-item>
                </div>
                <DeleteOutlined
                  style="flex-grow: 0; color: red"
                  v-if="formState.footer.links"
                  class="dynamic-delete-button"
                  @click.stop="removeSection(item)"
                />
              </div>
            </a-card>
          </template>
        </VueDraggableNext>
      </template>
      <a-form-item class="wrapper">
        <a-button
          type="dashed"
          style="width: 300px; margin-top: 20px"
          @click="addSection()"
        >
          <PlusOutlined />
          Добавить контент
        </a-button>
      </a-form-item>
      <hr />
      <AdminFooter v-model="formState.footer"/>

      <hr />
      <a-button
        class="btn"
        type="primary"
        html-type="submit"
        @click="submitForm"
        >{{ btnText }}
        </a-button
      >
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance } from "ant-design-vue";
import  type {
   IAllItems,
   IContent,
   ISection,
   IBlock,
} from "~/interface/index";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { VueDraggableNext } from "vue-draggable-next";
import { message } from "ant-design-vue";



// definePageMeta({
//   middleware: 'auth'
// })

const formRef = ref<FormInstance>();
const fileList = ref<File[]>([])
let formState = reactive<IContent>({
  header: {
    title: "",
    description: "",
    subtitle: "",
},
  footer: {
    links: [],
    contacts: [],
    adress: [],
  },
  section: [],
  _id: "",
});

const btnText = computed (() => {
  return formState._id ? 'Обновить' : 'Сохранить'
})

async function deleteImage(file:any, index: number) {
  formState.section[index].images = formState.section[index].images.filter(e => e !== file.name)
  const formData = {
    path: file.name
  }
  try {
   const {status} =  await useFetch('/api/upload', {
      method: 'delete',
      body: formData,
    })
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
  
}
async function removeImage(el: string, index: number) {
  formState.section[index].images = formState.section[index].images.filter(e => e !== el)
  const formData = {
    path: el
  }
  try {
   const {status} =  await useFetch('/api/upload', {
      method: 'delete',
      body: formData,
    })
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}
function  handleUploadSuccess(res: any, index: number) {
    if(res.event) {
      // Здесь вы можете обработать успешный ответ от сервера
      formState.section[index].images.push(res.file.name)
    }
}

async function submitForm() {
  if (formRef.value) {
    let formData = { ...formState };
    formRef.value
      .validate()
      .then(async () => {
        if (formState._id) {
          await $fetch("/api/content", {
            method: "put",
            body: formData,
          });
        } else {
          delete formData._id;
          await $fetch("/api/content", {
            method: "post",
            body: formData,
          });
        }
      })
      .then(() => {
        message.success("Успешно добавлено");
      })
      .catch((error: any) => {
        message.error(error.message);
      })
      .finally(() => {
        formRef.value?.resetFields();
        if(!formData._id)
          location.reload();
      });
  }
}

function removeChild(el: IBlock, i: number, childIndex: number) {
  formState.section[i].items.splice(childIndex, 1);
}

function removeSection(item: ISection) {
  formState.section = formState.section.filter(
    (e: ISection) => e._id !== item._id
  );
}

function addSection() {
  const _id = crypto.randomUUID();
  formState.section.push({
    _id,
    title: "",
    items: [],
    description: "",
    images: [],

});
}

function addChild(i: number) {
  const _id = crypto.randomUUID();
  formState.section[i].items.push({
    _id,
    title: "",
    description: "",
  });
}

await useFetch<IAllItems>("/api/content").then((response) => {
  if (response.data && response.data.value && response.data.value.data) {
    // Присваиваем данные переменной content
    formState = response.data.value.data;
  } else {
    console.error("No data received from the API");
  }
});
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: aqua;
}
.form {
  position: relative;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  flex-wrap: wrap;
}

.dragchildren {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.block {
  border: 1px solid rgb(98, 77, 77);
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
}
.btn {
  position: fixed;
  top: 50px;
  right: 20%;
  width: 200px;
  height: 40px;
}

.image {
  width: 200px;
  height: 200px;
  border-radius: 20px;
}

.containerImage {
  position: relative;
  &__deletes {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
