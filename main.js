

function myFunction(){
    //classList.. returns a DomtokenList collection of the class attribute of the element... aka, by itself it does nothing, but paired with a property it allows the class to be manipulated... I think With this example, we are toggling the class "show" unto dropdown, because the display is currently none, but due to the css, the display will then become "block"
    document.getElementById("dropdown").classList.toggle("show");
}



const waitOnButtonClick = document.querySelector(".btn")

waitOnButtonClick.addEventListener("click", myFunction)
   

//all of this, just to have it so when a anchor tag is clicked, OR if a click happens outside of the container, the container closes
window.onclick = function(event){
    if (!event.target.matches('.btn')){
        let dropdowns = document.getElementsByClassName("dropdown-content");    
        for (i = 0; i < dropdowns.length; i++){
            let openDropdown = dropdowns[i]; //i think it's an array because the dropdown-content has anchor tags in them, so those would be the index values
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

//honestly i barely get it... but it's fine, i can live with that