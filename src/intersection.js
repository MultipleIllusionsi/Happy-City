document.addEventListener("DOMContentLoaded", function () {
  const animatedItems = [].slice.call(
    document.querySelectorAll(".scroll-appear")
  );

  if ("IntersectionObserver" in window) {
    let sectionsObserver = new IntersectionObserver((entries, _observer) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add("scroll-appear--active");
          sectionsObserver.unobserve(target);
        }
      });
    });

    animatedItems.forEach((section) => sectionsObserver.observe(section));
  } else {
    animatedItems.forEach((section) =>
      section.classList.add("scroll-appear--active")
    );
  }
});
