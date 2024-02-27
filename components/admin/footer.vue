<template>
    <a-card title="footer">
        <div class="card">
          <a-card title="Контакты" style="width: 50%">
            <VueDraggableNext
              class="dragchildren"
              :list="state.contacts"
              :key="state.contacts.length"
            >
              <template v-if="state.contacts.length" >
                <template
                  v-for="tel in state.contacts"
                  :key="tel._id"
                >
                  <div class="wrapper block">
                    <div>
                      <a-form-item label="телефон">
                        <a-input
                          v-model:value="tel.phone"
                          v-maska="'+7 (###) ###-##-##'"
                          type="tel"
                          style="width: 80%; margin-right: 8px"
                        />
                      </a-form-item>
                    </div>
                    <MinusCircleOutlined
                      style="color: red"
                      v-if="state.links"
                      class="dynamic-delete-button"
                      @click.stop="removePhone(tel)"
                    />
                  </div>
                </template>
              </template>
            </VueDraggableNext>
            <a-form-item class="wrapper">
              <a-button
                type="dashed"
                style="width: 300px; margin-top: 20px"
                @click="addPhone()"
              >
                <PlusOutlined />
                Добавить телефон
              </a-button>
            </a-form-item>
          </a-card>
          <a-card title="Адреса" style="width: 50%">
            <VueDraggableNext
              class="dragchildren"
              :list="state.adress"
            >
              <template v-if="state.adress.length">
                <template
                  v-for="item in state.adress"
                  :key="item._id"
                >
                  <div class="wrapper block">
                    <div>
                      <a-form-item label="улица">
                        <a-input
                          v-model:value="item.street"
                          style="width: 80%; margin-right: 8px"
                        />
                      </a-form-item>
                    </div>
                    <MinusCircleOutlined
                      style="color: red"
                      v-if="state.adress"
                      class="dynamic-delete-button"
                      @click.stop="removeStreet(item)"
                    />
                  </div>
                </template>
              </template>
            </VueDraggableNext>
            <a-form-item class="wrapper">
              <a-button
                type="dashed"
                style="width: 300px; margin-top: 20px"
                @click="addStreet()"
              >
                <PlusOutlined />
                Добавить улицу
              </a-button>
            </a-form-item>
          </a-card>
          <a-card title="Ссылки" style="width: 50%">
            <VueDraggableNext :list="state.links">
              <template v-if="state.links.length">
                <template v-for="link in state.links" :key="link.id">
                  <div class="wrapper block" style="margin-bottom: 20px">
                    <div>
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
                      <a-form-item label="тип">
                        <a-select
                          v-model:value="link.type"
                          style="width: 120px"
                          :options="listType"
                        ></a-select>
                      </a-form-item>
                    </div>
                    <MinusCircleOutlined
                      style="color: red"
                      v-if="state.links"
                      class="dynamic-delete-button"
                      @click.stop="removeLinks(link)"
                    />
                  </div>
                </template>
              </template>
            </VueDraggableNext>
            <a-form-item class="wrapper">
              <a-button type="dashed" style="width: 300px" @click="addLinks()">
                <PlusOutlined />
                Добавить ссылку
              </a-button>
            </a-form-item>
          </a-card>
        </div>
    </a-card>
</template>
<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { listType } from "../../helpers/constants";
import type { IAdress, IContact, IFooter, ILink } from "~/interface/index";
import { defineProps, defineEmits} from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue :{
        type: Object as PropType<IFooter>,
        default: () => ({}),   
    }
})
let state = reactive<IFooter>({
    links: [],
    contacts: [],
    adress: [],
})

const removeLinks = (item: ILink) => {
  state.links = state.links.filter(
    (e: ILink) => e._id !== item._id
  );
};
function removePhone(el: IContact) {
  state.contacts = state.contacts.filter(
    (e: IContact) => e._id !== el._id
  );
}
function addPhone() {
  const _id = crypto.randomUUID();
  state.contacts.push({
    _id,
    phone: "",
  });
}
function addStreet() {
  const _id = crypto.randomUUID();
  state.adress.push({
    _id,
    street: "",
  });
}

function removeStreet(item: IAdress) {
  state.adress = state.adress.filter(
    (e: IAdress) => e._id !== item._id
  );
}

function addLinks() {
  const _id = crypto.randomUUID();
  state.links.push({
    _id,
    link: "",
    text: "",
    type: "email",
  });
}
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
<style lang="css" scoped>
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
</style>