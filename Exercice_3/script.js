const textInput = document.querySelector('#lastname');

textInput.addEventListener("input", handleInput);

function handleInput(){
    alert(textInput.value);
    
}