import "./scss/main.scss";

import "./intersection";
import { SmoothScroll } from "./smoothScroll";

const HeroImage = document.getElementById("hero-image");

if (HeroImage.complete) {
  const smoothScroll = new SmoothScroll({
    container: document.getElementById("container"),
    inertia: 0.05,
    threshold: 1,
    useRaf: true,
  });

  window.addEventListener("resize", () => {
    smoothScroll.resize();
  });
}
