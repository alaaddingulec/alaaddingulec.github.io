---
layout: default
title: İletişim
---

<section class="container section">
  <img src="{{ '/assets/images/contact-banner.svg' | relative_url }}" alt="İletişim">
  <h1>İletişim</h1>
  <p>İhtiyacınıza en uygun çözümü birlikte tasarlayalım.</p>
  <form class="contact-form" onsubmit="alert('Teşekkürler! Mesajınız gönderildi (demo).'); return false;">
    <div class="grid-3" style="grid-template-columns:1fr 1fr">
      <input required type="text" placeholder="Ad Soyad">
      <input required type="email" placeholder="E-posta">
    </div>
    <textarea required rows="6" placeholder="Mesajınız"></textarea>
    <button class="btn" type="submit">Gönder</button>
  </form>
</section>
