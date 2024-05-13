<template>
    <div :id="props.section._id" class="block">
        <template v-if="props.number % 2 === 0 && screenWidth >= 763">
            <!-- Если number четное -->
            <div class="block__images">
                <img
                    v-for="img in props.section.images"
                    :key="img"
                    :src="`images/${img}`"
                    class="image"
                    alt="фото"
                    @click="openModal(img)"
                />
            </div>
        </template>
    
        <div class="block__info" :class="{ 'block__reversed': props.number % 2 === 0 }" >
            <div class="block__info__title" :class="{ 'block__reversed__title': props.number % 2 === 0  && screenWidth >= 763}">
                <CpuIcon v-if="props.number % 2 !== 0 || screenWidth <= 763"/>
                <p class="btn-navigate">{{ props.section[`navigate_${locale}`] }}</p>
                <CpuIcon v-if="props.number % 2 === 0 && screenWidth >= 763"/>
            </div>
    
            <div class="block__info__main" >
                <h2>{{ props.section?.[`title_${locale}`] }}</h2>
                <p>{{ props.section?.[`description_${locale}`] }}</p>
            </div>
        </div>
    
        <template v-if="props.number % 2 !== 0">
            <!-- Если number нечетное -->
            <div class="block__images">
                <img
                    v-for="img in props.section.images"
                    :key="img"
                    :src="`images/${img}`"
                    class="image"
                    alt="фото"
                    @click="openModal(img)"
                />
            </div>
        </template>

        <template v-if="props.number % 2 === 0 && screenWidth <= 763">
            <!-- Если number четное -->
            <div class="block__images">
                <img
                    v-for="img in props.section.images"
                    :key="img"
                    :src="`images/${img}`"
                    class="image"
                    alt="фото"
                    @click="openModal(img)"
                />
            </div>
        </template>
    </div>
    <a-modal width="80%"  height="80" v-model:open="show" :footer="null" @hide="show = false" >
        <div class="modalBody">
            <img class="currentImage" :src="`images/${currentImage}`" alt="" >
        </div>
    </a-modal>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { ISection } from "~/interface/index";
import CpuIcon from './cpuIcon.vue';

const props = defineProps({
    section: {
        type: Object as PropType<ISection>,
        required: true,
    },
    number :{
        type: Number,
        required: true
    }
});
const screenWidth = ref(0);
const currentImage = ref('')
const show = ref(false)
const { locale } = useI18n() 

function openModal(image: string) {
    currentImage.value = image
    show.value = true    
}
onMounted(() => {
    screenWidth.value = window.innerWidth;
    window.addEventListener("resize", () => {
        screenWidth.value = window.innerWidth;
    });
});
</script>
<style lang="scss" scoped>
.block {
    margin: 72px auto;
    min-height: 300px;
    max-width: 1440px;
    width: 90%;
    display: flex;
    gap: 90px;
    @media (max-width: 1024px) {
        margin: 60px auto;
        max-width: 1024px;
        gap: 30px;
    }
    @media (max-width: 740px) {
        margin: 30px auto;
        max-width: 762px;
        flex-direction: column;
    }
    &__info {
        width: 50%;
        @media (max-width: 762px) {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        &__title{
            display: flex;
            gap: 8px;
            margin-bottom: 32px;
        }
        &__main {   
            color: #043B40 ;
            margin-left: 8px;
            h2 {
                font-size: 40px;
                font-weight: 700;
                line-height: 53px;
                margin-bottom: 8px;
                @media (max-width: 1209px) { 
                    font-size: 32px;
                    line-height: 39px;
                    letter-spacing: 0em;

                }
                @media (max-width: 900px) { 
                    text-align: start;
                    font-size: 24px;
                }
            }
            p {
                width: 100%;
                font-size: 20px;
                font-weight: 500; 
                word-wrap: break-word;
                @media (max-width: 1024px) { 
                    font-size: 16px;
                }
                @media (max-width: 762px) {
                    text-align: start;
                    font-size: 16px;
                    max-height: 300px;
                    margin-bottom: 16px;
                }
                
            }
        }

    }
    &__reversed {
        text-align: end;
        &__title {
            display: flex;
            justify-content: flex-end;
            width: 100%;
        }
    }
    &__images {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 32px;
        img {
            width: 300px;
            height: 300px;
            border-radius: 12px;
            cursor: pointer;
            @media (max-width: 1424px) { 
                width: 200px;
                height: 200px;
            }
            @media (max-width: 762px) { 
                width: 155px;
                height: 155px;
            }
    
        }
        @media (max-width: 1024px) { 
            gap: 16px;
        }
        @media (max-width: 762px) { 
            gap: 8px
        } 

    }

}
.currentImage {
    width: 90%;
    height: 70%;
    @media (max-width: 762px) { 
        width: 100%;
        height: 100%;
    } 
}
.modalBody {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
</style>