const dropdownButton = document.getElementById("dropdownButton")
const dropdownContent = document.getElementById("dropdownContent")
let opened = false;

dropdownButton.addEventListener("click", () => {
    if(opened == false){
        opened = true;
        dropdownContent.style.maxHeight = '100px'
    } else {
        opened = false;
        dropdownContent.style.maxHeight = '0px';
    }
    
})
    
