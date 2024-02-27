<template>
    <div class="content">
        <Header v-if="route.name !== 'admin' && route.name !== 'auth'" />
        <div class="content__body">
            <NuxtPage />
        </div>
        <Footer v-if="route.name !== 'admin' && route.name !== 'auth'" />
    </div>
</template>
<script setup lang="ts">
import type { IContent, IAllItems } from "~/interface/index";
import { useContentStore } from "~/stores/contents";
import Logo from "@/public/images/Logo.png";
import Favicon from '~/public/logo.ico';

const contentStore = useContentStore();
const route = useRoute();

useAsyncData(async () => {
    await useFetch<IAllItems>("/api/content")
        .then((response) => {
            if (
                response.data &&
                response.data.value &&
                response.data.value.data
            ) {
                // Присваиваем данные переменной content
                contentStore.setContent(response.data.value.data);
            } else {
                console.error("No data received from the API");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});

useHead(() => ({
    title: contentStore.content.meta.title,
    meta: [
        {
            key: "keywords",
            name: "keywords",
            content: contentStore.content.meta.keywords,
        },
        {
            key: "og:title",
            property: "og:title",
            content: contentStore.content.meta.title,
        },
        {
            key: "twitter:title",
            name: "twitter:title",
            content: contentStore.content.meta.title,
        },
        {
            key: "gname",
            property: "name",
            content: contentStore.content.meta.title,
        },
        {
            key: "description",
            name: "description",
            content: contentStore.content.meta.description,
        },
        {
            key: "og:description",
            property: "og:description",
            content: contentStore.content.meta.description,
        },
        {
            key: "twitter:description",
            name: "twitter:description",
            content: contentStore.content.meta.description,
        },
        {
            key: "gdescription",
            property: "description",
            content: contentStore.content.meta.description,
        },
        {
            key: "image",
            name: "image",
            content: Logo,
        },
        {
            key: "og:image",
            property: "og:image",
            content: Logo,
        },
        {
            key: "twitter:image",
            name: "twitter:image",
            content: Logo,
        },
        {
            key: "gimage",
            property: "image",
            content: Logo,
        },
        {
            key: "og:site_name",
            property: "og:site_name",
            content: "BaiBolsyn",
        },
    ],
    link: [{ rel: 'icon', href: Favicon }],
}));
</script>
<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    height: 100vh;
    @media (max-width: 1024px) {
        position: relative;
    }
    &__body {
        flex-grow: 1;
        height: fit-content;
    }
}
</style>