/* ============================================================
   LogOut — landing site behaviour
   Shared by index.html, how-it-works.html, why.html
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   APP STORE LINK — the single place to wire up the real URL.

   Once LogOut is live, paste the App Store link between the
   quotes below, e.g.:

     const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

   Every button marked data-app-store (nav, hero, final CTA —
   on every page) picks it up automatically. While it is empty,
   those buttons fall back to the beta-access mailto so nothing
   on the site ever dead-ends.
   ───────────────────────────────────────────────────────────── */
const APP_STORE_URL = "https://apps.apple.com/us/app/logout-screen-time-blocker/id6766398365";

const BETA_FALLBACK = "mailto:support@logoutapp.net?subject=LogOut%20beta%20access";

document.querySelectorAll("a[data-app-store]").forEach((a) => {
  a.href = APP_STORE_URL || BETA_FALLBACK;
});

/* ---------- Nav: hairline border once the page scrolls ---------- */

const nav = document.querySelector(".nav");
if (nav) {
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Scroll-reveal ---------- */

const revealables = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealables.forEach((el) => io.observe(el));
} else {
  revealables.forEach((el) => el.classList.add("in"));
}
