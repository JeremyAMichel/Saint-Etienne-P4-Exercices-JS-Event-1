const img = document.querySelector("#image1");

img.addEventListener("mouseenter", handleMouseEnter);

function handleMouseEnter(){
    img.src = "./images/image1_2.jpg"; 
}


img.addEventListener("mouseleave", handleMouseLeave);

function handleMouseLeave(){
    img.src = "./images/image1.jpg"; 
}