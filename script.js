//ngetokna sidebar
const navbarNav = document.querySelector(".menu");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik sak liane sidebar ilang side bar e
const ilangimenu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!ilangimenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});