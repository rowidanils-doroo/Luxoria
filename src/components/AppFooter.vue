<template>
  <footer class="footer">


  <p>copyrights saved @ 2026 Luxoria</p>
  <div class="footer-links">
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
    <a href="#">Twitter</a>
    <a href="#">Instagram</a>
    <a href="#">Tiktok</a>

  </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #c9a84c;
  border-top: 1px solid #eee;
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


</style>