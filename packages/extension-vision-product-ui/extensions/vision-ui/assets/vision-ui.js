/**
 * Vision Product UI Engine - Core Framework v2.1 (Ultra Premium 3D Edition)
 * Ultra-fast Vanilla JS framework for Shopify Theme Extension interactions & 3D micro-animations.
 */

window.VisionUI = window.VisionUI || (function() {
  'use strict';

  const STORAGE_KEY_EXIT = 'vision_exit_intent_dismissed';

  // Confetti particle generator
  function fireConfetti() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999999';
    document.body.appendChild(container);

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.style.position = 'absolute';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = '-10px';
      p.style.width = (Math.random() * 8 + 4) + 'px';
      p.style.height = (Math.random() * 12 + 6) + 'px';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.borderRadius = '2px';
      p.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      p.style.opacity = '0.9';
      p.style.transition = 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1), top 2.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.5s ease';
      container.appendChild(p);

      setTimeout(() => {
        p.style.top = (100 + Math.random() * 20) + 'vh';
        p.style.transform = 'rotate(' + (Math.random() * 720) + 'deg)';
        p.style.opacity = '0';
      }, 50);
    }

    setTimeout(() => {
      container.remove();
    }, 2800);
  }

  // Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('vision-ui-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'vision-ui-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.zIndex = '999999';
      toast.style.background = '#0f172a';
      toast.style.color = '#ffffff';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '12px';
      toast.style.fontSize = '14px';
      toast.style.fontWeight = '600';
      toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
      toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
      document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 3200);
  }

  // Interactive 3D Card Tilt Engine
  function init3DTilt() {
    document.querySelectorAll('.vision-3d-card').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init3DTilt);

  return {
    fireConfetti: fireConfetti,
    showToast: showToast,
    init3DTilt: init3DTilt,

    initExitIntent: function(id, options) {
      const modal = document.getElementById('vision-exit-modal-' + id);
      if (!modal) return;

      const lastDismissed = localStorage.getItem(STORAGE_KEY_EXIT);
      if (lastDismissed && (Date.now() - parseInt(lastDismissed, 10)) < 86400000) {
        return;
      }

      let triggered = false;
      function triggerModal() {
        if (triggered) return;
        triggered = true;
        modal.classList.add('active');
        fireConfetti();
        startTimer(id);
      }

      document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 5) triggerModal();
      });

      let lastY = window.scrollY;
      window.addEventListener('scroll', function() {
        if (window.scrollY < lastY - 120 && window.scrollY < 200) triggerModal();
        lastY = window.scrollY;
      }, { passive: true });
    },

    closeExitModal: function(id) {
      const modal = document.getElementById('vision-exit-modal-' + id);
      if (modal) modal.classList.remove('active');
      localStorage.setItem(STORAGE_KEY_EXIT, Date.now().toString());
    },

    copyCoupon: function(id, code) {
      const btn = document.getElementById('vision-copy-btn-' + id);
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code);
      } else {
        const input = document.createElement('input');
        input.value = code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
      }

      if (btn) {
        const origText = btn.innerText;
        btn.innerText = '✓ Kopyalandı!';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.innerText = origText;
          btn.style.background = '';
        }, 2500);
      }
      fireConfetti();
      showToast('Kupon Kodu Kopyalandı! Kasa Adımında Yapıştırabilirsiniz.');
    },

    addBundleToCart: function(v1, v2, btn) {
      if (!v1) {
        showToast('Lütfen ürün varyantını seçin.');
        return;
      }

      const items = [{ id: parseInt(v1, 10), quantity: 1 }];
      if (v2 && v2 !== 'blank' && !isNaN(parseInt(v2, 10))) {
        items.push({ id: parseInt(v2, 10), quantity: 1 });
      }

      if (btn) {
        btn.disabled = true;
        btn.innerText = 'Eklendi...';
      }

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items })
      })
      .then(res => res.json())
      .then(() => {
        fireConfetti();
        showToast('Ürün Paketi Sepetinize Başarıyla Eklendi!');
        if (btn) {
          btn.disabled = false;
          btn.innerText = '✓ Sepete Eklendi!';
          setTimeout(() => {
            btn.innerText = 'Paketi Sepete Ekle';
          }, 3000);
        }
        document.dispatchEvent(new CustomEvent('cart:updated'));
      })
      .catch(err => {
        console.error('VisionUI Cart Error:', err);
        showToast('Sepete eklenirken bir sorun oluştu.');
        if (btn) btn.disabled = false;
      });
    }
  };

  function startTimer(id) {
    const el = document.getElementById('vision-exit-countdown-' + id);
    if (!el) return;
    let seconds = 599;
    const interval = setInterval(function() {
      if (seconds <= 0) {
        clearInterval(interval);
        return;
      }
      seconds--;
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      el.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    }, 1000);
  }
})();
