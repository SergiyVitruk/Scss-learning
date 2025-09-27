import "../scss/main.scss";

import * as bodyScroll from "body-scroll-lock";

const refsMenu = {
  openMenuBtn: document.querySelector("js-menu-open"),
  closeMenuBtn: document.querySelector("js-menu-close"),
  overlayMenu: document.querySelector("js-menu"),
};

const toggleMenu = () => {
  const isMenuOpen =
    refsMenu.openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  refsMenu.openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  refsMenu.overlayMenu.classList.toggle("is-open");

  const scrollLockMethod = !isMenuOpen
    ? "disableBodyScroll"
    : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
};

refsMenu.openMenuBtn.addEventListener("click", toggleMenu);
refsMenu.closeMenuBtn.addEventListener("click", toggleMenu);

window.matchMedia("(min-width: 1200px").addEventListener("change", (event) => {
  if (!event.matches) return;

  refsMenu.overlayMenu.classList.remove("is-open");
  refsMenu.openMenuBtn.setAttribute("aria-expended", false);
  bodyScrollLock.enableBodyScroll(document.body);
});
