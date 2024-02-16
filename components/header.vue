<template>
    <header class="header">
        <div class="header__main">
            <div class="header__main__logo">
                <img src="/images/Logo.png" alt="logo" />
                <nav class="header__main__menu" v-if="menu?.length">
                    <a
                        :href="`#${item._id}`"
                        v-for="item in menu"
                        :key="item._id"
                    >
                        {{ item.navigate }}</a
                    >
                </nav>
            </div>
            <div class="header__main__info">
                <h3>{{ header?.subtitle }}</h3>
                <h1>{{ header?.title }}</h1>
                <p>{{ header?.description }}</p>
                <div class="btn">
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
        ></div>
    </header>
</template>
<script setup lang="ts">
import { useContentStore } from "~/stores/contents";
const contentStore = useContentStore();
const menu = computed(() => {
    if (contentStore.content.section) return contentStore.content.section;
    return [];
});

const header = computed(() => {
    if (contentStore.content.header) return contentStore.content.header;
});
</script>
<style lang="scss" scoped>
.header {
    padding: 12px;
    display: flex;
    flex-grow: 0;
    &__main {
        width: 625px;
        flex-grow: 1;
        padding-top: 20px;
        &__menu {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            width: 400px;
            padding: 10px;
            a {
                text-decoration: none;
                font-weight: 600;
                color: #1c1c1c;
                font-size: 16px;
            }
        }
        &__logo {
            display: flex;
            justify-content: space-between;
        }
        &__info {
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            h3 {
                font-weight: 600;
                font-size: 16px;
            }
            h1 {
                font-weight: 700;
                font-size: 60px;
            }
            p {
                max-width: 500px;
                margin-top: 36px;
                font-weight: 500;
                font-size: 16px;
            }
            .btn {
                margin-top: 36px;
                display: flex;
            }
        }
    }

    &__bg {
        flex-grow: 1;
        border-radius: 30px;
        width: 694px;
        height: 735px;
    }
}
</style>