<template >
    <div class="menu">
        <div class="menu__close">
            <svg @click="closeMenu" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00098 5L19 18.9991" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.00009 18.9991L18.9991 5" stroke="#AAAAAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
            
        <nav class="menu__list">
            <a
            :href="`#${item._id}`"
            class="menu__list__item"
            v-for="item in props.menu"
            :key="item._id"
                >
            {{ item[`navigate_${locale}`] }}</a
            >
            <a class="menu__list__item" href="#service"> {{$t('service')}}</a>
            <div class="menu__list__item lang">
                {{$t('lang')}}:
                <a-dropdown :trigger="['click']" arrow>
                    <a class="ant-dropdown-link" @click.prevent>
                        {{ locale }}
                      <DownOutlined />
                    </a>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item key="0" @click="setLocale('ru')">
                          ru
                        </a-menu-item>
                        <a-menu-item key="1" @click="setLocale('en')">
                            en
                        </a-menu-item>
                        <a-menu-item key="1" @click="setLocale('kz')">
                            kz
                        </a-menu-item>
                      </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </nav>

    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { ISection } from '~/interface/index'

const { locale, setLocale } = useI18n()
const props = defineProps({
    menu: {
        type: Array as PropType<ISection[]>,
        required: true,
    },
    modelValue: {
        type: Boolean,
        default: true,
    }
})
const emit = defineEmits(['update:modelValue'])

const showMenu = ref(true)

watch(() => showMenu, () => {
    if(showMenu)
     showMenu.value = props.modelValue
})

function closeMenu () {
    emit('update:modelValue', false)
}
</script>
<style lang="scss" scoped>
    .menu {
        top: 0;
        height: 100vh;
        bottom: 0;
        right: 0;
        padding: 0;
        z-index: 1;
        width: 148px;
        background-color: #043B40;
        &__close {
           display: flex;
           justify-content: flex-end;
        }
        &__list {
            display: flex;
            margin-top: 36px;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            &__item {
                text-decoration: none;
                font-weight: 600;
                color: #Fff;
                font-size: 16px;
                border-style: solid;
                width: 90%;
                text-align: end;
                padding-bottom: 8px;
                border-width: 0 0 1px; /* Устанавливаем ширину только для нижней границы */
                border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.5) 51.16%, rgba(255, 255, 255, 0.1) 100.23%);
                border-image-slice: 1; 
            }

        }
    }

    .lang {
        display: flex;
        width: 90%;
        justify-content: space-between;
    }
</style>