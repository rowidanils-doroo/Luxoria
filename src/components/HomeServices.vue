<template>
  <section class="home-services">
    <h1>Our Services
    <span class="line"></span>
    </h1>

    <div class="cards-container">
      <div class="div-card">
        <img src="@/assets/3.jpg" alt="" />
        <h3>Sofa</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga
          corporis consequatur sunt odit soluta ad minus atque quod cumque?
        </p>
      </div>

      <div class="div-card">
        <img src="@/assets/4.jpg" alt="" />
        <h3>Chairs</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vel
          ipsam harum optio ipsum natus similique. Quasi magni autem
          consequatur.
        </p>
      </div>

      <div class="div-card">
        <img src="@/assets/5.jpg" alt="" />
        <h3>Chairs</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
          fugiat doloremque aperiam illo dolores quis, sequi ex sapiente ab.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-services {
  padding: 60px 32px;
  background-color: #f5f2ec;
}

h1 {
  font-size: 2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: #c9a84c;
  display: flex;
  align-items: center;
  gap: 16px;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #c9a84c;
}

.cards-container {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.div-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.div-card img {
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: 50% / 40%;
  border: 2px solid #c9a84c;
  margin-bottom: 16px;
}

.div-card h3 {
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
  color: #313131;
}

.div-card p {
  color: #4e4e4e;
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .div-card {
    width: 100%;
  }

  h1 {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
}
</style>
