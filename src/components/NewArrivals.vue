<template>
  <section class="new-arrivals">

    <!-- Section Title -->
    <div class="section-header">
      <h2 class="section-title">NEW ARRIVALS</h2>
      <div class="title-line" />
    </div>

    <!-- Products Grid -->
    <div class="products-grid">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        class="product-card"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <!-- Oval Image -->
        <div class="oval-wrapper">
          <div class="oval-border">
            <img :src="product.image" :alt="product.name" class="product-img" />
          </div>
          <button
            class="wishlist-btn"
            :class="{ liked: product.liked }"
            @click="toggleLike(product)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" :fill="product.liked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <!-- Info -->
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-desc">{{ product.description }}</p>
          <p class="product-price">${{ product.price }}</p>
          <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'SOFA',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga corporis consequatur sunt odit soluta ad minus atque quod cumque?',
    price: 1299,
    liked: false,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    id: 2,
    name: 'CHAIRS',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vel ipsam harum optio ipsum natus similique. Quasi magni autem consequatur.',
    price: 649,
    liked: false,
    image: 'https://www.sevensedie.it/image/news/76/7774-r.jpg',
  },
  {
    id: 3,
    name: 'CURTAINS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel ipsam fugiat doloremque natus harum optio similique magni autem.',
    price: 399,
    liked: false,
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=600&q=80',
  },
  {
    id: 4,
    name: 'TABLES',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga corporis consequatur sunt odit soluta ad minus atque quod cumque?',
    price: 849,
    liked: false,
    image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80',
  },
])

function toggleLike(product) {
  product.liked = !product.liked
}

function addToCart(product) {
  console.log('Added to cart:', product.name)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;500&display=swap');

.new-arrivals {
  background: #1a3a2a;
  padding: 72px 80px 88px;
  font-family: 'EB Garamond', serif;
}

/* Header */
.section-header {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 64px;
}

.section-title {
  font-family: 'Cinzel', serif;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.25em;
  color: #b8972a;
  white-space: nowrap;
  margin: 0;
}

.title-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, #b8972a 0%, #d4af3760 60%, transparent 100%);
}

/* Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 40px;
}

/* Card */
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: fadeUp 0.6s ease both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Oval */
.oval-wrapper {
  position: relative;
  margin-bottom: 28px;
}

.oval-border {
  width: 220px;
  height: 270px;
  border-radius: 50%;
  border: 2px solid #b8972a;
  overflow: hidden;
  box-shadow:
    0 0 0 6px #f0ece0,
    0 0 0 8px #b8972a33,
    0 12px 48px rgba(0,0,0,0.18);
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}

.product-card:hover .oval-border {
  transform: translateY(-6px);
  box-shadow:
    0 0 0 6px #f0ece0,
    0 0 0 8px #b8972a66,
    0 20px 60px rgba(0,0,0,0.22);
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-card:hover .product-img {
  transform: scale(1.06);
}

/* Wishlist */
.wishlist-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #b8972a;
  background: #f0ece0ee;
  color: #b8972a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.wishlist-btn:hover,
.wishlist-btn.liked {
  background: #b8972a;
  color: #f0ece0;
}

/* Info */
.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 320px;
}

.product-name {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #d0d0d0;
  /* background: #b8972a; */
  margin: 0;
}

.product-desc {
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  line-height: 1.7;
  color: #847959;
  margin: 0;
}

.product-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 600;
  color: #b8972a;
  margin: 0;
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

/* Responsive */
@media (max-width: 1024px) {
  .new-arrivals { padding: 56px 40px 72px; }
  .oval-border { width: 220px; height: 270px; }
}

@media (max-width: 768px) {
  .new-arrivals { padding: 48px 24px 64px; }
  .products-grid { grid-template-columns: 1fr; gap: 56px; }
  .oval-border { width: 240px; height: 290px; }
}
</style>