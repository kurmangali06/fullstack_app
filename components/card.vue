<template>
    <div  class="card"   :style="{ width }">
        <h5>{{item.title}}</h5>
        <p>{{item.description}}</p>
    </div>
</template>
<script setup lang="ts">
import { defineProps} from 'vue'
import { type IBlock } from '~/interface/index'


const props = defineProps({
    item: {
        type: Object as PropType<IBlock>,
        required: true,            
    },
    width: {
        type: String,
        default: '0%'
    }
})

</script>
<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex-shrink: 0; 
        h5 {
            font-weight: 700;
            font-size: 24px;
            @media (max-width: 1024px) { 
                font-size: 20px;
            }
        }
        p {
            font-weight: 500;
            font-size: 16px;
        }
    }

</style>