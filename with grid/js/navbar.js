const items = document.querySelector(".nav-items");
const btn = document.querySelector(".icons");
console.log(items);
console.log(btn);
btn.addEventListener("click", toggle);
let showMenu = false;
function toggle() {
  if (!showMenu) {
    items.classList.add("show");
    btn.classList.add("close");
    showMenu = true;
  } else {
    items.classList.remove("show");
    btn.classList.remove("close");
    showMenu = false;
  }
}
