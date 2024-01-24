function modal() {
  const modalTriggers = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");

  modalTriggers.forEach((item) => {
    item.addEventListener("click", openModal);
  });

  function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.getAttribute("data-close") == ""
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 10000000);

  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal