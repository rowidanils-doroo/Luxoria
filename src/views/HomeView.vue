<template>
  <div>
    <intro-section />
    <HeroSection />
    <HomeServices />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import HomeServices from '@/components/HomeServices.vue';
import IntroSection from '@/components/IntroSection.vue';

export default {
    components: {
      HeroSection,
        IntroSection,
        HomeServices,
    }
    

}
</script>

<style>

</style>