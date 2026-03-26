<template>
  <header class="header">
    <!-- اللوجو لوحده -->
    <div class="logo">
      <a href="#">Luxoria</a>
    </div>

    <nav>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Services</a>
      <a href="#">Contact us</a>
    </nav>
  </header>
</template>

<script>
// import CategoryFilterHome from './CategoryFilterHome.vue';

export default {};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #1a3a2a;
  border-bottom: 1px solid #eee;
}

.logo a {
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
}


nav {
  display: flex;
  gap: 24px;
}


nav a {
  font-family: 'Cinzel', serif;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

nav a:hover{
  color: #b8972a;
   /* transform: scale(1.15); */
   transition: transform 0.6s ease-in-out;
  transform: translateY(-4px);
}


@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 16px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
}
</style>
