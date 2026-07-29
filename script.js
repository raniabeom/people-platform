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

    const nav = document.querySelector("nav");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const navPanel = document.getElementById("site-nav-panel");
    const mobileNavQuery = window.matchMedia("(max-width: 900px)");

    if (nav && navToggle && navPanel) {
        const menuLabels = {
            en: { open: "Menu", close: "Close menu" },
            ko: { open: "메뉴", close: "메뉴 닫기" },
        };

        const currentLang = () => {
            const stored = localStorage.getItem("xineon-lang");
            return stored === "ko" ? "ko" : "en";
        };

        const syncToggleLabel = (open) => {
            const labels = menuLabels[currentLang()];
            navToggle.setAttribute("data-i18n-aria", open ? "nav.close" : "nav.menu");
            navToggle.setAttribute("aria-label", open ? labels.close : labels.open);
        };

        const setNavOpen = (open) => {
            nav.classList.toggle("is-open", open);
            document.body.classList.toggle("nav-open", open);
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
            syncToggleLabel(open);
        };

        navToggle.addEventListener("click", () => {
            setNavOpen(!nav.classList.contains("is-open"));
        });

        navPanel.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                if (mobileNavQuery.matches) setNavOpen(false);
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && nav.classList.contains("is-open")) {
                setNavOpen(false);
                navToggle.focus();
            }
        });

        const onViewportChange = () => {
            if (!mobileNavQuery.matches) setNavOpen(false);
        };

        if (typeof mobileNavQuery.addEventListener === "function") {
            mobileNavQuery.addEventListener("change", onViewportChange);
        } else if (typeof mobileNavQuery.addListener === "function") {
            mobileNavQuery.addListener(onViewportChange);
        }

        document.querySelectorAll("[data-lang-option]").forEach((btn) => {
            btn.addEventListener("click", () => {
                requestAnimationFrame(() => {
                    syncToggleLabel(nav.classList.contains("is-open"));
                });
            });
        });
    }
});
