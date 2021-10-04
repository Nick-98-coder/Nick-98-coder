  
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const blk1_container = document.querySelector(".blk1_container");

sign_up_btn.addEventListener("click", () => {
  blk1_container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  blk1_container.classList.remove("sign-up-mode");
});