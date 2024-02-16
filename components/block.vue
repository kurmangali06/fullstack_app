<template>
    <div :id="props.section._id" class="block">
        <div class="block__info">
            <p class="btn-navigate">{{ section.navigate }}</p>
            <div class="block__info__main">
                <h2>{{ section.title }}</h2>
                <p>{{ section?.description }}</p>
            </div>
        </div>
        <template v-if="images">
            {{ section.images.length }}
            <div
                class="block__images"
       
            >
                <img
                    v-for="img in section.images"
                    :key="img"
                    :src="`images/${img}`"
                    class="image"
                    alt="фото"
                />
            </div>
        </template>
        <div class="block__list">
            <Card v-for="el in section.items" :key="el._id" :item="el" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { ISection } from "~/interface/index";

const props = defineProps({
    section: {
        type: Object as PropType<ISection>,
        required: true,
    },
});
</script>
<style lang="scss" scoped>
.block {
    width: 100%;
    margin: 72px auto;
    min-height: 300px;
    &__info {
        flex-grow: 1;
        width: 100%;
        &__main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 16px;
            h2 {
                font-size: 40px;
                font-weight: 600;
                max-width: 481px;
            }
            p {
                max-width: 588px;
                font-size: 20px;
                font-weight: 500;
            }
        }
    }
    &__list {
        flex-grow: 1;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
    }
    &__images {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

    }
    .image {
        border-radius: 30px;
    }
}
</style>