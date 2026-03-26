<template>
    <div class="main-grid">
        <BaseCard  
        v-for="item in data" :key="item.title" :img="item.img" :title="item.title" :description="item.description"/>
    </div>
   
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/BaseCard.vue';

//  require('@/assets/...') بدل الـ path العادي عشان webpack يعرف يحمل الصور صح.
const data = ref([
    {
        img: require('../assets/1.jpg'), 
        title: 'Sofa',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sit rerum distinctio porro consequuntur ex soluta! Odio molestias porro doloribus?',
    },
    {
        img: require('../assets/2.jpg'), 
        title: 'Title 2',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sit rerum distinctio porro consequuntur ex soluta! Odio molestias porro doloribus?',
    },
    {
        img: require('../assets/3.jpg'), 
        title: 'Brown Bed',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sit rerum distinctio porro consequuntur ex soluta! Odio molestias porro doloribus?',
    },
    {
        img: require('../assets/4.jpg'), 
        title: 'Title 2',
         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sit rerum distinctio porro consequuntur ex soluta! Odio molestias porro doloribus?',
    },
    
])
console.log(data)

</script>

<style scoped>

.main-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 50px;
}

</style>