
<template>
  <AppHeader />
  
  <div class="main-content">
    <router-view />
  </div>

  <AppFooter />
</template>


<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<style>
/* //الكود ده عشان يخلي الكود الفوتر ثابت فالاسفل */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

</style>
