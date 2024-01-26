let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");

cvBtn.addEventListener("click", ()=> {
    alert("Cv Downloaded Sucessfully")
})


submit.addEventListener("click", ()=> {
    
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Please Fill Details")
    }else{
        alert("Logged In")
    }
})


let ul = document.querySelector("ul");
bar.addEventListener("click", ()=> {
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        bar.className= "fa-solid fa-xmark"
    }else{
        bar.className="fa-solid fa-bars"
    }
})
