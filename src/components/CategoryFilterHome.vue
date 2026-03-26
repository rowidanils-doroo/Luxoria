<template>
  <nav class="category-filter">
    <button
      v-for="cat in categories"
      :key="cat"
      class="cat-btn"
      :class="{ active: categoryStore.selectedCategory === cat }"
      @click="categoryStore.setCategory(cat)"
    >
      {{ cat }}
      <span class="arrow">▾</span>
    </button>
  </nav>
</template>

<script setup>
import { useCategoryStore } from '@/stores/CategoryFilterHome'

const categoryStore = useCategoryStore()

const categories = [
  'Sofas & Corners',
  'Armchairs',
  'Dining Room',
  'Bedroom',
  'Tables',
  'Lighting',
  'Seatings',
  'Outdoor Furniture',
  'Accessories',
  'Brands'
]
</script>

<style scoped>
.category-filter {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 40px;
  border-top: 1px solid #e8e0d0;
  border-bottom: 1px solid #e8e0d0;
  background: #fff;
}

.cat-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  font-size: 13px;
  letter-spacing: 0.05em;
  color: #3a3520;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
  white-space: nowrap;
}

.cat-btn:hover,
.cat-btn.active {
  color: #b8972a;
}

.arrow {
  font-size: 10px;
  opacity: 0.6;
}
</style>