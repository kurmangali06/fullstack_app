<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__content__logo">
                <img src="/images/LogoWhile.png" alt="logo">
            </div>
            <div class="footer__content__info">
                <div class="wrapper">
                    <div v-if="contacts.length || adress.length" class="footer__content__info__contact">
                        <h4>{{ $t('contacts') }}:</h4>
                        <ul class="footer__content__info__contact__list">
                            <li v-for="item in contacts" :key="item._id">
                                <a :href="`tel:${item.phone}`"> {{item.phone }}</a>
                            </li>
                        </ul>
                        <h4 style="margin-top: 16px;">{{ $t('address') }}:</h4>
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
                                <div>
                                    <h4>{{typeText(item.type)}}:</h4>
                                    <a :href="item.type === 'email' ? 'mailto:' + item.link : item.link" target="_blank"> {{ item.text }}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div  v-if="screenWidth >= 763" class="footer__content__info__menu" >
                    <h4> {{ $t('navigation') }}:</h4>
                    <a :href="`#${item._id}`" v-for="item in menu" :key="item._id"> {{ item[`navigate_${locale}`] }}</a>
                    <a href="#service" > {{ $t('service') }}</a>
                </div>
            </div>
            <p>© {{new Date().getFullYear()}} Baibolsyn Solutions</p>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { useContentStore } from "~/stores/contents";

const { t, locale } = useI18n()
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

const screenWidth = ref(0);
const typeText = computed(() => {
    return (type: string) => {
        switch (type) {
            case 'web':
              return t('web')
            case 'email':
             return 'E-mail'
            case 'instagram':
             return t('instagram')
        }
    }
})




onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener("resize", () => {
        screenWidth.value = window.innerWidth;
    });
});
</script>
<style lang="scss" scoped>
    .footer {
        flex-grow: 0;
        background-color:  #1C1C1C;

        &__content {
            padding-top: 20px;
            margin: 36px auto;
            max-width: 1440px;
            overflow-x: hidden; 
            width: 90%;
            @media (max-width: 1024px) {
                margin: 60px auto;
                max-width: 1024px;
            }
            @media (max-width: 762px) {
                margin: 25px  auto;
                max-width: 762px;
            }
            &__logo {
                @media (max-width: 762px) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            img {
                width: 200px;
                color: #ffff;
            
            }
            &__info {
                display: flex;
                color: #fff; 
                justify-content: space-between;
                margin-top: 20px;
                padding-bottom: 24px;
                border-bottom: 1px solid #Ffff;
                @media (max-width: 762px) {
                    flex-direction: column;
                    justify-content: center;
                }
                &__contact {
                    display: flex;
                    flex-direction: column;
                    h4 {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 16px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: #AAAAAA;
  
                    }
                    &__list {
                        list-style-type:  none;
                        a {
                            color: #fff;
                            font-size: 16px;
                            font-weight: 500;
                            line-height: 19px;
                            letter-spacing: 0em;
                            text-align: left;
                            text-decoration: none;
                        }
                    }
                }
                &__menu {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    h4 {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 16px;
                        letter-spacing: 0em;
                        text-align: left;
                        color: #AAAAAA; 
                    }
                    a {
                        color: #fff;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 19px;
                        letter-spacing: 0em;
                        text-align: left;
                        text-decoration: none;
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
                                h4 {
                                    font-size: 14px;
                                    font-weight: 500;
                                    line-height: 16px;
                                    letter-spacing: 0em;
                                    text-align: left;
                                    color: #AAAAAA; 
                                }
                                a {
                                    color: #fff;
                                    font-size: 16px;
                                    font-weight: 500;
                                    line-height: 19px;
                                    letter-spacing: 0em;
                                    text-align: left;
                                    text-decoration: none;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
            p {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 24px;
                margin-bottom: 36px;
                font-size: 14px;
                font-weight: 500;
                line-height: 16px;
                letter-spacing: 0em;
                color: #AAAAAA;

            }
        }
    }
    .wrapper{
        display: flex;
        gap: 48px;
    }
</style>