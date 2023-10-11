class fitVids extends HTMLElement {
  connectedCallback() {
    const videoSources = ['iframe[src*="youtube"]', 'iframe[src*="vimeo"]'];
    this.style.display = "block";

    this.querySelectorAll(videoSources.join(",")).forEach((video) => {
      // ↔️ Make it go big
      video.style.width = "100%";
      video.style.height = "auto";
      // 🔛 But not too big
      video.style.maxWidth = "100%";
      // 🪄✨ Sprinkle the magic
      video.style.aspectRatio = `${video.getAttribute(
        "width"
      )} / ${video.getAttribute("height")}`;
      // 🐾 Leave no trace
      video.removeAttribute("height");
      video.removeAttribute("width");
    });
  }
}

customElements.define("fit-vids", fitVids);
