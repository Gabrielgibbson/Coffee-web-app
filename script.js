const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visibility
 document.body.classList.toggle("show-mobile-menu");
});

//close menu when close buttoon is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());