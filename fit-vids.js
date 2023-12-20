export class FitVids extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        ::slotted(iframe) {
          aspect-ratio: var(--w, 16) / var(--h, 9);
          height: auto;
          max-width: 100%;
          width: 100%;
        }
      </style>
      <slot></slot>
    `;
  }

  connectedCallback() {
    this.querySelectorAll("iframe").forEach((video) => {
      // 🪄✨ Sprinkle the magic
      video.style.setProperty("--w", video.getAttribute("width"));
      video.style.setProperty("--h", video.getAttribute("height"));
      // 🐾 Leave no trace
      video.removeAttribute("height");
      video.removeAttribute("width");
    });
  }
}

if ("customElements" in window) {
  window.customElements.define("fit-vids", FitVids);
}
