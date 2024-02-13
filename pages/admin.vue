<template>
  <div class="content">
    <a-form
      ref="formRef"
      :model="formState"
      name="basic"
      style="width: 80%; margin: 0 auto"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
    >
      <a-divider dashed  plain orientation="left"><a-typography-title :level="5">контент </a-typography-title></a-divider>
      <template v-if="formState.section">
        <VueDraggableNext class="dragArea list-group w-full" :list="formState.section">
        <template
          v-for="(item, index) in formState.section"
          :key="item._id"

        >
        
          <a-card   :title="item.title" :bordered="false" style="width: 100%; margin-bottom: 10px; cursor:pointer">
            <div class="card">
            <div style="flex-grow: 1;">
              <a-form-item label="заголовок">      
                <a-input
                v-model:value="item.title"
                placeholder="please input title"
                style="width: 80%; margin-right: 8px"
                />
                </a-form-item>
                <VueDraggableNext class="dragchildren" :list="item.items">
                <template v-if="item.items.length">
                <div class="wrapper block" 
                   v-for="(el, i) in item.items"
                  :key="el._id" >
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
                    style=" color: red"
                    v-if="formState.footer.links"
                    class="dynamic-delete-button"
                    @click.stop="removeChild(el, index, i)"
                  />
                </div>
                </template>
                </VueDraggableNext>
                <a-form-item class="wrapper" >
                  <a-button type="dashed" style="width: 300px; margin-top: 20px;" @click="addChild(index)">
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
     <a-form-item class="wrapper" >
      <a-button type="dashed" style="width: 300px; margin-top: 20px;" @click="addSection()">
        <PlusOutlined />
        Добавить контент
      </a-button>
    </a-form-item>
      <hr>
      <a-card title="footer">
        <div class="card">
          <a-card title="Контакты" style="width:100%">
            <VueDraggableNext class="dragchildren" :list="formState.footer.contacts">
            <template v-if="formState.footer.contacts">
              <template
                v-for="(tel) in formState.footer.contacts"
                :key="tel._id"
              >
              <div class="wrapper block" >
                <div>
                  <ClientOnly>
                  <a-form-item label="телефон">      
                    <a-input
                    v-model:value.number="tel.phone"
                      mask="'+7 (###) ###-##-##'"
                      type="tel"
                      style="width: 80%; margin-right: 8px"
                    />
                    </a-form-item>
                  </ClientOnly>
                </div>
                <MinusCircleOutlined
                  style=" color: red;"
                  v-if="formState.footer.links"
                  class="dynamic-delete-button"
                  @click.stop="removePhone(tel)"
                />
              </div>
      
      
            </template>
       
            </template>
          </VueDraggableNext>
           <a-form-item class="wrapper" >
            <a-button type="dashed" style="width: 300px; margin-top: 20px; " @click="addPhone()">
              <PlusOutlined />
              Добавить телефон
            </a-button>
          </a-form-item>
          </a-card>
  
          <a-card title="Ссылки" style="width:100%">
            <VueDraggableNext  :list="formState.footer.links">
            <template v-if="formState.footer.links.length">
              <template
                v-for="(link) in formState.footer.links"
                :key="link.id"
      
              >
              <div class="wrapper block" style="margin-bottom: 20px">
                <div >
                  <a-form-item label="ссылка">      
                    <a-input
                    v-model:value="link.link"
                    placeholder="please input link"
                    style="width: 80%; margin-right: 8px"
                    />
                    </a-form-item>
                  <a-form-item label="текст">      
                  <a-input
                    v-model:value="link.text"
                    placeholder="please input link"
                    style="width: 80%; margin-right: 8px"
                  />
                  </a-form-item>
                </div>
                <MinusCircleOutlined
                  style=" color: red"
                  v-if="formState.footer.links"
                  class="dynamic-delete-button"
                  @click.stop="removeLinks(link)"
                />
              </div>
            </template>
            </template>
            </VueDraggableNext>
           <a-form-item class="wrapper" >
            <a-button type="dashed" style="width: 300px;" @click="addLinks()">
              <PlusOutlined />
              Добавить ссылку
            </a-button>
          </a-form-item>
          </a-card>

        </div>

      </a-card>

      <hr>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" @click="submitForm">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import type { FormInstance } from 'ant-design-vue';
import { type ILink, type IAllItems, type IContent, type ISection, type IContact, type IBlock } from '~/interface/index';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { VueDraggableNext } from 'vue-draggable-next'
import { message } from 'ant-design-vue';
// definePageMeta({
//   middleware: 'auth'
// })
const formRef = ref<FormInstance>();
let formState = reactive<IContent>({
  footer: {
  links: [],
  contacts: []
},
  section: [],
  _id: ''
});
function submitForm() {
  if(formRef.value) {
    let formData = {...formState}
    formRef.value
    .validate()
    .then(async () => {
      if(formState._id) {
        await $fetch('/api/content', {
        method: 'put',
        body: formData
        })
      } else {
        delete formData._id
        await $fetch('/api/content', {
        method: 'post',
        body: formData
        })
      }
    }).then(() => {
      message.success('Успешно добавлено');

    })
    .catch((error: any) => {
      message.error(error.message);
    }).finally(() => {
      formRef.value?.resetFields();
  });
  }

};

function removeChild(el: IBlock, i: number, childIndex: number) {
  console.log(el, i);
  formState.section[i].items.splice(childIndex, 1);
}
const removeLinks = (item: ILink) => {
  formState.footer.links =  formState.footer.links.filter((e:ILink) =>e._id !== item._id)
};

function removeSection(item: ISection) {
  console.log(item);
  
    formState.section = formState.section.filter((e:ISection) => e._id !== item._id);
    console.log( formState.section);
    
}
function addLinks () {
  const _id = crypto.randomUUID()  
  formState.footer.links.push({
    _id,
    link: '',
    text: ''
  })
}
function addSection() {
  const _id = crypto.randomUUID()  
  formState.section.push({
    _id,
    title: '',
    items: []
  })
}
function removePhone(el: IContact) {
  formState.footer.contacts = formState.footer.contacts.filter((e: IContact) => e._id !== el._id)

}
function addPhone () {
  const _id = crypto.randomUUID()  
  formState.footer.contacts.push({
    _id,
    phone: ''
  })
}
function addChild(i:number) {
  const _id = crypto.randomUUID()  
  formState.section[i].items.push({
    _id,
    title: '',
    description: ''
  })
}
await useFetch<IAllItems>('/api/content').then((response) => {

if (response.data && response.data.value && response.data.value.data) {
    // Присваиваем данные переменной content
    formState  = response.data.value.data
  } else {
    console.error('No data received from the API');
  }
})
</script>
<style lang="css" scoped>
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
    }
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card {
      display: flex;

    }
    .dragchildren {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .block {
      border:  1px solid rgb(98, 77, 77);
      border-radius: 20px;
      padding: 20px;
      cursor: pointer;
    }
</style>