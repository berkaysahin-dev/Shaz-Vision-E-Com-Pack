class VisionPro3D extends HTMLElement {
  connectedCallback() {
    this.stage = this.querySelector('.vision-pro-3d__stage');
    this.visual = this.querySelector('.vision-pro-3d__visual');

    if (!this.stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.onMove = this.onMove.bind(this);
    this.onLeave = this.onLeave.bind(this);
    this.onTouch = this.onTouch.bind(this);

    this.visual?.addEventListener('mousemove', this.onMove);
    this.visual?.addEventListener('mouseleave', this.onLeave);
    this.visual?.addEventListener('touchmove', this.onTouch, { passive: true });
    this.visual?.addEventListener('touchend', this.onLeave);
  }

  disconnectedCallback() {
    this.visual?.removeEventListener('mousemove', this.onMove);
    this.visual?.removeEventListener('mouseleave', this.onLeave);
    this.visual?.removeEventListener('touchmove', this.onTouch);
    this.visual?.removeEventListener('touchend', this.onLeave);
  }

  applyTilt(x, y) {
    if (!this.stage) return;
    this.stage.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 12}deg)`;
  }

  onMove(e) {
    const rect = this.visual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    this.applyTilt(x, y);
  }

  onTouch(e) {
    if (!e.touches.length) return;
    const touch = e.touches[0];
    const rect = this.visual.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    this.applyTilt(x, y);
  }

  onLeave() {
    if (this.stage) this.stage.style.transform = '';
  }
}

customElements.define('vision-pro-3d', VisionPro3D);
