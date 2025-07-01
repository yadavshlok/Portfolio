function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".mob-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
window.addEventListener("load", () => {
    // If there's a hash in the URL, remove it after a short delay
    setTimeout(() => {
      if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
      }
    }, 0);
  });