<template>
    <div class="card-container">
        <div class="img-conatiner">
            <img :src="img" class="card-img">
        </div>
        <div class="card-info">
            <p class="card-title">{{ title }}</p>
            <p v-if="description" class="card-description">{{ description }}</p>
            <p v-if="Price" class="card-price">{{ Price }} </p>
            <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
        </div>
    </div>
</template>

<script setup>
// import { defineProps } from 'vue'
defineProps(['img', 'title', 'description', 'Price'])
</script>

<style scoped>

.card-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #1a3a2a;
    padding: 12px;
    transition: transform 0.6s ease;
}

.img-conatiner {
    aspect-ratio: 3 / 2;
    overflow: hidden;
}

.card-img:hover, .card-container:hover{
  transform: scale(1.02);
  transform: translateY(-10px);
  box-shadow:
    0 0 0 6px #f0ece0,
    0 20px 60px rgba(0,0,0,0.22);

}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-info {
    text-align: center;
    padding: 8px 4px;
}

.card-title {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #515151;
  /* background: #b8972a; */
  margin: 0;
}


.card-description {
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  line-height: 1.7;
  color: #847959;
  margin: 0;
}

 .card-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: #b8972a;
  margin: 0;
  justify-content: center;
} 

.add-to-cart {
  margin-top: 6px;
  padding: 10px 28px;
  border: 1px solid #b8972a;
  background: transparent;
  color: #b8972a;
  font-family: 'Cinzel', serif;
  font-size: 12px;
  letter-spacing: 0.18em;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.add-to-cart:hover {
  background: #b8972a;
  color: #f0ece0;
}



</style>