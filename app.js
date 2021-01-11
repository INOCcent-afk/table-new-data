const user = document.getElementById("user");
const hiddenUserInfo = document.querySelector(".hidden-user-info");
const userArrow = document.querySelectorAll(".user-arrow");

userArrow.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("showUserInfo");
  });
});
