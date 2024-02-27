<template>
    <header class="header">
        <div class="header__main">
            <div class="header__main__logo">
                <img src="/images/Logo.png" alt="logo" />
                <nav
                    class="header__main__menu"
                    v-if="menu?.length && screenWidth >= 763"
                    >
                    <a
                        :href="`#${item._id}`"
                        v-for="item in menu"
                        :key="item._id"
                    >
                        {{ item[`navigate_${locale}`] }}</a
                    >
                    <a href="#service">  {{ $t('service') }}</a>
                </nav>
                <svg @click="showMenu = true" class="menu"  v-if="menu?.length && screenWidth <= 762"  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                    
            </div>
            <div class="header__main__info">
                <h3>{{ header?.[`subtitle_${locale}`] }}</h3>
                <h1>{{ header?.[`title_${locale}`] }}</h1>
                <p>{{ header?.[`description_${locale}`] }}</p>
                <div v-if="screenWidth >= 763" class="btn">
                    <a href="#service" class="btn-navigate">{{  $t('submitApplication')}}</a>
                    <div class="icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.3054 11.4238L9.5 16.2292L4.69458 11.4238"
                                stroke="white"
                                stroke-width="1.1875"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M9.5 2.77075V16.0945"
                                stroke="white"
                                stroke-width="1.1875"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="header__bg"
            :style="`background-image: url('images/bg.png'); background-repeat: no-repeat; background-size: cover; background-position: center;`"
        >
        <a-dropdown  class="lang"  v-if="screenWidth >= 763" :trigger="['click']" arrow>
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
        <div v-if="screenWidth <= 762" class="btn">
            <a href="#service" class="btn-navigate">оставить заявку</a>
            <div class="icon">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.3054 11.4238L9.5 16.2292L4.69458 11.4238"
                        stroke="white"
                        stroke-width="1.1875"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.5 2.77075V16.0945"
                        stroke="white"
                        stroke-width="1.1875"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </header>
    <Menu v-if="showMenu" v-model="showMenu" :menu="menu"/>
</template>
<script setup lang="ts">
import { useContentStore } from "~/stores/contents";

const contentStore = useContentStore();

const { locale, setLocale } = useI18n()
const showMenu = ref(false) 
const menu = computed(() => {
    if (contentStore.content.section) return contentStore.content.section;
    return [];
});
const screenWidth = ref(0);
const header = computed(() => {
    if (contentStore.content.header) return contentStore.content.header;
});
onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener("resize", () => {
        screenWidth.value = window.innerWidth;
    });
});
</script>
<style lang="scss" scoped>
.header {
    padding: 12px;
    display: flex;
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      max-width: 1024px;
    } 
    flex-grow: 0;
    @media (max-width: 762px) {
        flex-direction: column;
        padding: 0;
        align-items: center;
        justify-content: center;
        max-width: 1024px;
    }
    &__main {
        width: 625px;
        flex-grow: 1;
        padding-top: 20px;
        @media (max-width: 1024px) {
            width: 488px;
            margin-left: 16px;
        }
        @media (max-width: 762px) {
            width: 100%;
            margin-left: 0;
        }
        &__menu {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            max-width: 440px;
            padding: 10px;
            @media (max-width: 1024px) {
                width: 322px;
            }
            a {
                text-decoration: none;
                font-weight: 600;
                color: #1c1c1c;
                font-size: 16px;
                @media (max-width: 1024px) {
                    font-weight: 500;
                    font-size: 14px;
                }
            }
        }
        &__logo {
            display: flex;
            justify-content: space-between;
            img {
                @media (max-width: 762px) {
                    width: 80px;
                    height: 23px;
                    margin-left: 16px;
                }

            }
        }
        &__info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 100px;
            padding-left: 30px;
            max-width: 460px;
            @media (max-width: 1024px) {
                margin-top: 86px;
                padding-left: 0;
            }
            @media (max-width: 762px) {
                max-width: 300px;
                margin: 24px auto;
                justify-content: center;
            }
            h3 {
                font-weight: 600;
                font-size: 16px;
                @media (max-width: 1024px) {
                    font-weight: 500;
                    font-size: 14px;
                }
                @media (max-width: 762px) {
                    font-size: 12px;
                    text-align: center;

                }
            }
            h1 {
                font-weight: 700;
                font-size: 60px;

                @media (max-width: 1024px) {
                    font-size: 50px;
                }
                @media (max-width: 762px) {
                    text-align: center;
                    font-size: 30px;
                    
                }
            }
            p {
                max-width: 500px;
                margin-top: 36px;
                font-weight: 500;
                font-size: 16px;
                @media (max-width: 1024px) {
                    font-size: 14px;
                }
                @media (max-width: 762px) {
                    margin: 8px auto;
            
                }
            }

        }
    }

    &__bg {
        border-radius: 30px;
        width: 694px;
        flex-grow: 1;
        height: 735px;
        margin-right: 30px;
        position: relative;
        @media (max-width: 1024px) {
            width: 100%;
            height: 549px;
        }
        @media (max-width: 762px) {
            max-width: 90%;
            height: 197px;
            margin-right: 0;
        }
        &__lang {
            position: absolute;
            top: 20px;
            right: 0;
            width: 70px;
            border-radius: 24px;
        }
    }
}
.btn {
    margin-top: 36px;
    display: flex;
    @media (max-width: 762px) {
        align-items: center;
        justify-content: center;
    }
}
.menu {
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    padding: 26px;
}
.lang {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
}
</style>