<template>
    <div  class="card" >
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
})

</script>
<style lang="scss" scoped>
    .card {
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

</style>