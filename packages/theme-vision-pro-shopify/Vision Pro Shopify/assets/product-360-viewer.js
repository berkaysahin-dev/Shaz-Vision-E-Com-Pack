class Product360Viewer extends HTMLElement {
  connectedCallback() {
    this.frames = [...this.querySelectorAll('.product-360-viewer__frame')];
    if (this.frames.length < 2) return;

    this.index = 0;
    this.isDragging = false;
    this.lastX = 0;
    this.accumulated = 0;
    this.threshold = 18;
    this.canvas = this.querySelector('.product-360-viewer__canvas');

    this.showFrame(0);

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);

    this.canvas.addEventListener('mousedown', this.onPointerDown);
    this.canvas.addEventListener('touchstart', this.onPointerDown, { passive: true });
    window.addEventListener('mousemove', this.onPointerMove);
    window.addEventListener('touchmove', this.onPointerMove, { passive: true });
    window.addEventListener('mouseup', this.onPointerUp);
    window.addEventListener('touchend', this.onPointerUp);
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', this.onPointerMove);
    window.removeEventListener('touchmove', this.onPointerMove);
    window.removeEventListener('mouseup', this.onPointerUp);
    window.removeEventListener('touchend', this.onPointerUp);
  }

  showFrame(i) {
    this.index = ((i % this.frames.length) + this.frames.length) % this.frames.length;
    this.frames.forEach((frame, idx) => frame.classList.toggle('is-active', idx === this.index));
  }

  clientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  onPointerDown(e) {
    this.isDragging = true;
    this.lastX = this.clientX(e);
    this.accumulated = 0;
    this.canvas.classList.add('is-dragging');
  }

  onPointerMove(e) {
    if (!this.isDragging) return;
    const x = this.clientX(e);
    const delta = x - this.lastX;
    this.lastX = x;
    this.accumulated += delta;

    while (Math.abs(this.accumulated) >= this.threshold) {
      this.showFrame(this.index + (this.accumulated > 0 ? -1 : 1));
      this.accumulated += this.accumulated > 0 ? -this.threshold : this.threshold;
    }
  }

  onPointerUp() {
    this.isDragging = false;
    this.canvas.classList.remove('is-dragging');
  }
}

customElements.define('product-360-viewer', Product360Viewer);
