

document.addEventListener("DOMContentLoaded", () => {
  const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
      menu: document.querySelector(".mobile-menu"),
      menuLinks: document.querySelectorAll(".menu-item .link"),
      shopNowBtn: document.querySelector("[data-shop-now]")
  };

  // Elemanlar gerçekten varsa event listener ekleyelim
  if (refs.openModalBtn) refs.openModalBtn.addEventListener("click", toggleModal);
  if (refs.closeModalBtn) refs.closeModalBtn.addEventListener("click", toggleModal);

  if (refs.menuLinks.length > 0) {
      refs.menuLinks.forEach(link => {
          link.addEventListener("click", () => {
              toggleModal();
          });
      });
  }

  if (refs.shopNowBtn) {
      refs.shopNowBtn.addEventListener("click", () => {
          toggleModal();
      });
  }

  function toggleModal() {
      if (!refs.modal || !refs.menu) return;
      refs.modal.classList.toggle("is-open");
      refs.menu.classList.toggle("is-open");
  }
});
