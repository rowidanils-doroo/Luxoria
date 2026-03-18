<template>
  <section class="hero">
    <div class="hero-img"></div>
    <div class="hero-text">
      <h1>WHO WE ARE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        minus vero neque reprehenderit vitae! Quo natus nesciunt nobis veritatis
        sit cumque facilis quam et unde sint, minima ad eum sunt iure fuga
        inventore exercitationem molestias explicabo perspiciatis maiores eaque
        voluptas perferendis! Maxime dolorum iure atque ab, quas minima alias
        cupiditate magni quod aspernatur voluptates autem est, quam sit delectus
        sunt!
      </p>
      <a href="#" class="btn">Discover</a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  display: flex;
  height: 100vh;
}

.hero-img {
  flex: 4;
  background-image: url("@/assets/1.jpg");
  background-size: cover;
  background-position: center;
  /* background-repeat: no-repeat; */
}

.hero-text {
  flex: 6;
  background-color: #1a3a2a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  color: white;
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 4px;
  margin-bottom: 24px;
}

.hero-text p {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 420px;
}

.btn {
  margin-top: 40px;
  color: white;
  text-decoration: none;
  letter-spacing: 3px;
  font-size: 0.85rem;
  border-bottom: 1px solid white;
  padding-bottom: 4px;
  width: fit-content;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    height: auto;
  }

  .hero-img {
    height: 300px;
  }

  .hero-text {
    padding: 40px 24px;
  }

  .hero-text h1 {
    font-size: 2rem;
  }
}
</style>
