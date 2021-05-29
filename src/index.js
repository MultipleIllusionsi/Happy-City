import "./scss/main.scss";

import "./intersection";
import { SmoothScroll } from "./smoothScroll";

window.addEventListener("load", () => {
  const HeroImage = document.getElementById("hero-image");
  const isLoaded = HeroImage.complete && HeroImage.naturalHeight !== 0;

  console.log("isLoaded", isLoaded);

  if (isLoaded) {
    console.log("completed");
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
});
