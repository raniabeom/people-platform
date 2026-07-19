document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -32px 0px",
        }
    );

    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            requestAnimationFrame(() => el.classList.add("is-visible"));
        } else {
            observer.observe(el);
        }
    });

    const yearTargets = document.querySelectorAll("[data-current-year]");
    if (yearTargets.length) {
        const currentYear = String(new Date().getFullYear());
        yearTargets.forEach((el) => {
            el.textContent = currentYear;
        });
    }

    document.querySelectorAll(".nav-item--products").forEach((item) => {
        const trigger = item.querySelector(".nav-link");
        if (!trigger) return;

        const setExpanded = (open) => {
            trigger.setAttribute("aria-expanded", open ? "true" : "false");
        };

        item.addEventListener("mouseenter", () => setExpanded(true));
        item.addEventListener("mouseleave", () => setExpanded(false));
        item.addEventListener("focusin", () => setExpanded(true));
        item.addEventListener("focusout", (event) => {
            if (!item.contains(event.relatedTarget)) {
                setExpanded(false);
            }
        });
    });
});
