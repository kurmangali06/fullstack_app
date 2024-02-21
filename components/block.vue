<template>
    <div :id="props.section._id" class="block" :class="{ 'block_one': section.images.length === 1 }">
        <div class="block__info" >
            <div class="block__info__title">
                <p class="btn-navigate">{{ section[`navigate_${locale}`] }}</p>
                <component :is="randomIcon" /> 
            </div>

            <div class="block__info__main" :class="{ 'block_one__info': section.images.length === 1 }">
                <h2>{{  section?.[`title_${locale}`]}}</h2>
                <p>{{ section?.[`description_${locale}`] }}</p>
            </div>
        </div>
        <template v-if="section.images.length">
            <div class="block__images">
                <img
                    v-for="img in section.images"
                    :key="img"
                    :class="{ 'block_one__info__img': section.images.length === 1 }"
                    :src="`images/${img}`"
                    class="image"
                    :style="{ width: checkCountImages(section.images.length) }"
                    alt="фото"
                />
            </div>
        </template>
        <div class="block__list">
            <Card v-for="el in section.items" :key="el._id" :item="el" :width=" checkCountImages(section.items.length)" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { ISection } from "~/interface/index";
import CpuIcon from './cpuIcon.vue';
import LogoIcon from './logoIcon.vue';

const props = defineProps({
    section: {
        type: Object as PropType<ISection>,
        required: true,
    },
});
const { locale } = useI18n() 
const randomIcon = computed(() =>  {
    return Math.random() < 0.5 ? CpuIcon : LogoIcon;
}
)
const screenWidth = computed(() => {
    return process.client ? window.innerWidth : 0;
})
const checkCountImages = computed(() => {
    return (count: number) => {
        if(screenWidth.value <= 762) {
            switch (count) {
                case 1:
                    return "80%";
                case 2:
                case 3:
                default:
                    return "300px";
            }
            
        }
         else if (screenWidth.value <= 1024) {
            switch (count) {
                case 1:
                    return "456px";
                case 2:
                    return "48%";
                case 3:
                default:
                    return "24.6%";
            }
        } else  if (screenWidth.value > 1024){
            switch (count) {
                case 1:
                    return "643px";
                case 2:
                    return "48%";
                case 3:
                case 4:
                default:
                    return "33%";
            }
        }
    };
});

</script>
<style lang="scss" scoped>
.block {
    margin: 72px auto;
    min-height: 300px;
    max-width: 1440px;
    width: 90%;
    @media (max-width: 1024px) {
        margin: 60px auto;
        max-width: 1024px;
    }
    @media (max-width: 762px) {
        margin: 30px auto;
        max-width: 762px;
    }
    &__info {
        width: 100%;
        @media (max-width: 762px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__title{
            display: flex;
            padding: 0 30px;
        }
        &__main {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 16px;
            padding: 0 30px;
            @media (max-width: 762px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            h2 {
                font-size: 40px;
                font-weight: 700;
                max-width: 481px;
                @media (max-width: 1024px) { 
                    font-size: 32px;
                    max-width: 358px;
                    line-height: 39px;
                    letter-spacing: 0em;

                }
                @media (max-width: 762px) {
                    width: 262px;
                    text-align: center;
                    font-size: 24px;
                }
            }
            p {
                max-width: 588px;
                font-size: 20px;
                font-weight: 500;
                @media (max-width: 1024px) { 
                    width: 331px;
                    height: 114px;
                    font-size: 16px;
                }
                @media (max-width: 762px) {
                    width: 300px;
                    text-align: center;
                    font-size: 16px;
                }
                
            }
        }
    }
    &__list {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }
    &__images {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 6px;
        @media (max-width: 1024px) { 
            align-items: center;
            justify-content: center;
        }

    }
    .image {
        border-radius: 30px;
        @media (max-width: 762px) { 
            align-items: center;
            justify-content: center;
            height: 350px;
        }
    }
}
.block_one{
     display: flex;
     align-items: center;
     justify-content: space-between;
     @media (max-width: 762px) { 
        flex-direction: column;
    }
     &__info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        margin-top: 48px;
             @media (max-width: 762px) { 
             align-items: center;
        }
        &__img {
            @media (max-width: 762px) { 
                height: 150px;
           }
        
        }
     }
}
</style>