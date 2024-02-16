<template>
    <footer class="footer">
        <div class="footer__content">
            <img src="/images/Logo.png" alt="logo">
            <div class="footer__content__info">
                <div v-if="contacts?.length" class="footer__content__info__contact">
                    <h4>Контакты:</h4>
                    <ul class="footer__content__info__contact__list">
                        <li v-for="item in contacts" :key="item._id">
                            <a :href="`tel:${item.phone}`"> {{ item.phone }}</a>
                        </li>
                    </ul>
                    <h4>АДРЕС:</h4>
                    <ul class="footer__content__info__contact__list">
                        <li v-for="item in adress" :key="item._id">
                            {{ item.street }}
                        </li>
                    </ul>
                </div>
                <div class="footer__content__info__website">
                    <ul class="footer__content__info__website__list">
                        <li v-for="item in urls" :key="item._id"
                            class="footer__content__info__website__list__item">
                            <component :is="typeLinks(item.type)"/>
                            <div>
                                <h4>{{typeText(item.type)}}:</h4>
                                <a :href="item.type === 'email' ? 'mailto:' + item.link : item.link" target="_blank"> {{ item.text }}</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="footer__content__info__menu" >
                    <a :href="`#${item._id}`" v-for="item in menu" :key="item._id"> {{ item.title.toLocaleUpperCase() }}</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { useContentStore } from "~/stores/contents";
import {
    MailOutlined,
    LinkOutlined,
    InstagramOutlined
} from '@ant-design/icons-vue';

const contentStore = useContentStore()
const menu = computed(() => {
    if(contentStore.content.section) 
     return contentStore.content.section
    return []
})

const contacts = computed(() => {
    if(contentStore.content && contentStore.content.footer && contentStore.content.footer.contacts) 
     return contentStore.content.footer.contacts
    return []
})

const adress = computed(() => {
    if(contentStore.content && contentStore.content.footer && contentStore.content.footer.adress) 
     return contentStore.content.footer.adress
    return []
})

const urls = computed(() => {
    if(contentStore.content && contentStore.content.footer && contentStore.content.footer.links) 
     return contentStore.content.footer.links
    return []
})

const typeLinks = computed(() => {
    return (type: string) => {
        switch (type) {
            case 'web':
              return LinkOutlined
            case 'email':
             return MailOutlined
            case 'instagram':
             return InstagramOutlined
        }
    }
})

const typeText = computed(() => {
    return (type: string) => {
        switch (type) {
            case 'web':
              return 'Сайт'
            case 'email':
             return 'E-mail'
            case 'instagram':
             return 'Instagram'
        }
    }
})
</script>
<style lang="scss" scoped>
    .footer {
        padding: 20px auto;
        padding-bottom: 20px;
        flex-grow: 0;
        background-color: green;
        &__content {
            padding-top: 20px;
            width: 800px;
            margin: 0 auto;
            img {
                width: 200px;
                color: #ffff;
            }
            &__info {
                display: flex;
                color: #fff; 
                justify-content: space-between;
                margin-top: 40px;
                &__contact {
                    display: flex;
                    flex-direction: column;
                    h4 {
                        margin-top: 10px;
                    }
                    &__list {
                        list-style-type:  none;
                        a {
                            color: #fff;
                        }
                    }
                }
                &__menu {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    a {
                        color: #fff;
                    }
                }
                &__website {
                    &__list {
                        &__item {
                            display: flex;
                            gap: 10px;
                            margin-bottom: 10px;
                            span  svg {
                                width: 50px;
                                height: 50px;
                            }
                            div {
                                display: flex;
                                flex-direction: column;
                                gap: 5px;
                                a {
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>