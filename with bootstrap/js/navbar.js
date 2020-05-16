const navToggle = document.querySelector(".nav-toggle");
const navToggleLines = document.querySelectorAll(".nav-toggle-line");
const navModal = document.querySelector(".nav-modal");
const navUls = document.querySelectorAll(".nav-modal ul");
// const navMainLis = document.querySelectorAll(".nav-modal ul li");
// const navMainUl = document.querySelector("#nav-items");
const arrowBacks = document.querySelectorAll(".arrow-back");
let showMenu = false;

navToggle.addEventListener("click", toggle);
navUls.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    var target = getEventTarget(event).parentElement;
    if (target.className !== null) {
      toggleSub("nav-" + target.className);
    }
  });
});

arrowBacks.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("arrow-back");
    console.log(this.parentElement);
    var target = this.parentElement.id;
    console.log(target);
    toggleSub(target);
  });
});

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}
function toggle() {
  if (!showMenu) {
    navToggle.classList.add("close");
    navToggleLines.forEach((line) => {
      line.classList.add("close");
    });
    navModal.classList.add("show");
    toggleSub("nav-main-items");
    showMenu = true;
  } else {
    navToggle.classList.remove("close");
    navToggleLines.forEach((line) => {
      line.classList.remove("close");
    });
    navModal.classList.remove("show");
    showMenu = false;
  }
}
function toggleSub(name) {
  console.log("name:" + name);
  navUls.forEach((ul) => {
    if (!ul.className.includes(name)) {
      if (!ul.className.includes("hidden")) {
        ul.classList.add("hidden");
      }
    } else {
      if (ul.className.includes("hidden")) {
        ul.classList.remove("hidden");
      }
    }
  });
}
