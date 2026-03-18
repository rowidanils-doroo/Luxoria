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
  text-decoration: none;
  color: #ffffff;
  font-size: 0.95rem;
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
