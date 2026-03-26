<template>
  <div>
    <intro-section />
    <HeroSection />
    <BestSeller />
    <NewArrivals />
    <OurServices />
    

    
    <ProductCard />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import NewArrivals from '@/components/NewArrivals.vue';
import OurServices from '@/components/OurServices.vue';
import IntroSection from '@/components/IntroSection.vue';
// import ProductCard from '@/components/ProductCard.vue';
import BestSeller from '@/components/BestSeller.vue';


export default {
    components: {
      HeroSection,
        IntroSection,
        OurServices,
        NewArrivals,
        BestSeller
    }
    

}
</script>

<style>

</style>