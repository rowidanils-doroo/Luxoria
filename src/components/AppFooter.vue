<template>
  <footer class="footer">

     <!-- Top Footer -->
    <div class="footer-top">
      <div class="footer-about">
        <h3>Luxoria</h3>
        <p>Timeless elegance for your home. Crafted with intention, inspired by the finest.</p>
      </div>

       <div class="footer-col">
        <h4>Shop</h4>
        <a href="#">Sofas</a>
        <a href="#">Chairs</a>
        <a href="#">Tables</a>
        <a href="#">Curtains</a>
      </div>

        <div class="footer-col">
        <h4>Learn</h4>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">FAQ</a>
        <a href="#">Sustainability</a>
      </div>

      <div class="footer-col">
        <h4>Connect</h4>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">TikTok</a>
      </div>
    </div>

  <!-- Bottom Footer -->
  <div class="footer-bottom">
  <p>copyrights saved @ 2026 Luxoria</p>
  <div class="footer-links">
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
    <a href="#">Instagram</a>
    <a href="#">Tiktok</a>
  </div>  

  </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=EB+Garamond&display=swap');


.footer {
  display: flex;
  flex-direction: column; /* 👈 ده المهم */
}


/* Top Footer */
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;   
  gap: 40px;
  padding: 60px 80px;
  background-color: #1a3a2a;
  color: #f0ece0;
}

/* .footer-about {
  max-width: 400px;
  margin: auto;
} */

.footer-about h3 {
  font-family: 'Cinzel', serif;
  font-size: 22px;
  color: #b8972a;
  margin-bottom: 16px;
}

.footer-about p {
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  line-height: 1.8;
  color: #c9b99a;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-col h4 {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  color: #b8972a;
  margin-bottom: 8px;
}

.footer-col a {
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  color: #c9b99a;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: #b8972a;
}

 

/**Bottom Footer */
/* الجزء الأصفر */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #c9a84c;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-links a {
  text-decoration: none;
  color: #555;
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

/** Tablet */
@media (max-width: 992px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    padding: 40px;
  }
}
/* Mobile */
@media (max-width: 576px) {
  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 30px 20px;
  }

  .footer-col {
    align-items: center;
    gap: 10px;
  }
}
</style>