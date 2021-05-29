import "./scss/main.scss";

import "./intersection";
import { SmoothScroll } from "./smoothScroll";

window.addEventListener("load", () => {
  const HeroImage = document.getElementById("hero-image");
  const Nav = document.getElementById("nav");
  const Intro = document.getElementById("intro");
  const isLoaded = HeroImage.complete && HeroImage.naturalHeight !== 0;

  if (isLoaded) {
    const smoothScroll = new SmoothScroll({
      container: document.getElementById("container"),
      inertia: 0.05,
      threshold: 1,
      useRaf: true,
    });

    window.addEventListener("resize", () => {
      smoothScroll.resize();
    });

    // сцена для анимации
    if (false) {
      setTimeout(() => {
        window.scrollTo(0, 805);
      }, 4100);

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 7400);

      setTimeout(() => {
        Nav.classList.add("opacity0");
        Intro.classList.add("opacity0");
      }, 9400);
    }
  }
});
