import { useEffect } from "react";

const SELECTORS = [
  ".section-head",
  ".service",
  ".profile-text",
  ".profile-quote",
  ".profile-stats",
  ".g-item",
  ".contact-card",
  ".contact-form",
  ".footer-inner",
];

export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTORS.join(","));
    els.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${Math.min(i * 30, 240)}ms`;
    });

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
