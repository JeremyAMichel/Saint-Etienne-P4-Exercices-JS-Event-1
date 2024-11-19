const raz = document.querySelector("#raz");

raz.addEventListener("click", handleClickRaz);

function handleClickRaz() {
  const inputs = document.querySelectorAll("input");

  
  inputs.forEach((input) => {
    input.value = "";
  });
}
