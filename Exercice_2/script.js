const textInput = document.querySelector('#lastname');

textInput.addEventListener("blur", handleBlurTriggerAlert);

function handleBlurTriggerAlert(){
    alert("Merci de votre participation !");
}