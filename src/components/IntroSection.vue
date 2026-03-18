<template>
  <section class="intro">
    <img src="@/assets/2.jpg" alt="introImg" class="intro-img" />
    <h1>Welcome to Luxoria</h1>
    <p>Timeless Elegance for Your Home</p>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.intro {
  background-color: #1a3a2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  color: white;
  border-bottom: 1px solid #ffffff;
}

.intro-img {
  width: 280px;
  height: 360px;
  object-fit: cover;
  border-radius: 50% / 40%;
  margin-bottom: 32px;
}

h1 {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 8px;
  margin-bottom: 12px;
  text-transform: uppercase;
}

p {
  font-size: 16px;
  letter-spacing: 4px;
  color: #ccc;
}

@media (max-width: 768px) {
  .intro-img {
    width: 200px;
    height: 260px;
  }

  h1 {
    font-size: 1.8rem;
    letter-spacing: 3px;
    text-align: center;
  }

  p {
    font-size: 14px;
    letter-spacing: 2px;
    text-align: center;
  }
}
</style>
