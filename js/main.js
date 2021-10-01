function scrollNav() {
     const header = document.getElementById("navbar");
     if (this.scrollY >= 100) {
          header.classList.add("scroll-navbar")
     } else {
          header.classList.remove("scroll-navbar")
     }
}
window.addEventListener("scroll" , scrollNav)
