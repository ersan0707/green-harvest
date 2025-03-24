(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
      menu: document.querySelector(".mobile-menu"), // Menü içindeki tüm bağlantılar
      menuLinks: document.querySelectorAll(".menu-item .link"), // Menü link
      shopNowBtn: document.querySelector("[data-shop-now]") // Shop now butonu
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    // Menüdeki bağlantılara tıklanınca menüyü kapat
    refs.menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleModal(); // Menüdeki bağlantılara tıklanınca menüyü kapat
      });
    });
  
    // "Shop Now" butonuna tıklanınca menüyü kapat
    refs.shopNowBtn.addEventListener("click", () => {
      toggleModal(); // Закриваємо меню
    });
  
    // Menü açma/kapama butonu
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      refs.menu.classList.toggle("is-open"); // Aç/kapa işlemi
    }
  })();