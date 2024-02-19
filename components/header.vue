<template>
    <header class="header">
        <div class="header__main">
            <div class="header__main__logo">
                <img src="/images/Logo.png" alt="logo" />
                {{ screenWidth }}
                <nav
                    class="header__main__menu"
                    v-if="menu?.length && screenWidth >= 1024"
                    >
                    <a
                        :href="`#${item._id}`"
                        v-for="item in menu"
                        :key="item._id"
                    >
                        {{ item.navigate }}</a
                    >
                    <a href="#service"> cервис</a>
                </nav>
            </div>
            <div class="header__main__info">
                <h3>{{ header?.subtitle }}</h3>
                <h1>{{ header?.title }}</h1>
                <p>{{ header?.description }}</p>
                <div v-if="screenWidth >= 763" class="btn">
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
            </div>
        </div>
        <div
            class="header__bg"
            :style="`background-image: url('images/bg.png'); background-repeat: no-repeat; background-size: cover; background-position: center;`"
        >
            <a-select
                v-if="screenWidth >= 763"
                class="header__bg__lang"
                v-model="curentLang"
                :options="listLang"
            ></a-select>
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
</template>
<script setup lang="ts">
import { listLang } from "~/helpers/constants";
import { useContentStore } from "~/stores/contents";

const contentStore = useContentStore();
const curentLang = ref(  {
      value: 'RU',
      label: 'RU',
    },);
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
    flex-grow: 0;
    @media (max-width: 762px) {
        flex-direction: column;
    }
    &__main {
        width: 625px;
        flex-grow: 1;
        padding-top: 20px;
        @media (max-width: 1024px) {
            width: 488px;
            margin-left: 16px;
        }
        @media (max-width: 1024px) {
            width: 100%;
        }
        &__menu {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            width: 440px;
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
                }

            }
        }
        &__info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 100px;
            @media (max-width: 1024px) {
                margin-top: 86px;
            }
            @media (max-width: 762px) {
                margin-top: 24px;
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
                    width: 300px;
                }
            }
            h1 {
                font-weight: 700;
                font-size: 60px;

                @media (max-width: 1024px) {
                    font-size: 50px;
                }
                @media (max-width: 762px) {
                    width: 343px;
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
                    margin-top: 8px;
                    width: 343px;
                }
            }

        }
    }

    &__bg {
        border-radius: 30px;
        width: 694px;
        flex-grow: 1;
        height: 735px;
        position: relative;
        @media (max-width: 1024px) {
            width: 100%;
            height: 549px;
        }
        @media (max-width: 762px) {
            margin-top: 16px;
            width: 100%;
            height: 197px;
            margin-left: 10px;
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
</style>