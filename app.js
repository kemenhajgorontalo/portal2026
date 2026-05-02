document.addEventListener("DOMContentLoaded", () => {
  const iconFallbacks = {
    "users-round": "users",
    "clipboard-check": "clipboard-list",
    "map-pin-check": "map-pin",
    "chart-no-axes-combined": "bar-chart-3",
    facebook: "messages-square",
    youtube: "play-square",
    instagram: "camera"
  };

  document.querySelectorAll("[data-lucide]").forEach((icon) => {
    const name = icon.getAttribute("data-lucide");
    if (!window.lucide?.icons || window.lucide.icons[name]) return;
    icon.setAttribute("data-lucide", iconFallbacks[name] || "circle");
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16
  });

  revealItems.forEach((item) => observer.observe(item));
});
