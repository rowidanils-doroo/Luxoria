<template>
  <section class="best-seller">
    <div class="section-header">
      <h2 class="section-title">BEST SELLER</h2>
      <div class="title-line" />
    </div>
   <swiper
  :slides-per-view="4"
  :space-between="20"
  :modules="[Navigation]"
  navigation
  :loop="true"
  :breakpoints="{
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 }
  }"
>
      <swiper-slide v-for="item in data" :key="item.title">
        <BaseCard :img="item.img" :title="item.title" :Price="item.Price" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const data = ref([
  { img: require("@/assets/1.jpg"), title: "Title 1", Price: "$20" },
  { img: require("@/assets/2.jpg"), title: "Title 2", Price: "$30" },
  { img: require("@/assets/3.jpg"), title: "Title 3", Price: "$40" },
  { img: require("@/assets/4.jpg"), title: "Title 4", Price: "$50" },
  { img: require("@/assets/1.jpg"), title: "Title 5", Price: "$60" },
  { img: require("@/assets/2.jpg"), title: "Title 6", Price: "$70" },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;500&display=swap');

.best-seller {
  background: #f0ece0;
  padding: 72px 80px 88px;
  font-family: 'EB Garamond', serif;
}

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

.swiper {
  padding: 0 50px;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 30px;
  height: 30px;
  background-color: #f0ece0;
  border-radius: 50%;
  border: 1px solid #b8972a;
  color: #b8972a;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 5px;
  font-weight: bold;
}

@media (max-width: 1024px) {
  .best-seller {
    padding: 56px 40px 72px;
  }

  :deep(.swiper) {
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .best-seller {
    padding: 48px 24px 64px;
  }

  :deep(.swiper) {
    padding: 0 20px;
  }
}

@media (max-width: 480px) {
  .best-seller {
    padding: 40px 16px 56px;
  }
}

</style>