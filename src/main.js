const htmlClass = document.documentElement.classList;
const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
  htmlClass.toggle("darkmode");
});
