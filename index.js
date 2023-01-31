const names = document.getElementById("name");
const email = document.getElementById("email");
const mobileNo = document.getElementById("mobile");
const inputs = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const noError = document.getElementById("no-error");
const nextBtn = document.querySelector(".next-step-btn");
const nameRegex = /[A-Za-z]+[^0-9_]{3,29}$/;
const emailRegex = /^[a-z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;




nextBtn.addEventListener("click",(e)=>{
  inputs.forEach((i)=>{
    if(i.value == ""){
        if(i.dataset.no == "1"){
            nameError.innerHTML ="hello"
        }
        if(i.dataset.no == "2"){
            emailError.innerHTML ="hello"
        }
        if(i.dataset.no == "3"){
            noError.innerHTML ="hello"
        }
    }
    
    else {
        if(i.dataset.no == "1"){
            nameError.innerHTML ="";
        }
        if(i.dataset.no == "2"){
            emailError.innerHTML ="";
        }
        if(i.dataset.no == "3"){
            noError.innerHTML ="";
        }
    }
  })
  
    if(!nameRegex.test(names.value) && names.value !== ""){
        nameError.innerHTML= "Invalid name ";
    }

    if(!emailRegex.test(email.value) && email.value !== "") {
        emailError.innerHTML = "Invalid email";
    }

    if(!mobileRegex.test(mobileNo.value) && mobileNo.value !== "") {
        noError.innerHTML = "Invalid Mo. number";
    }

    if(nameError.innerHTML == "" && emailError.innerHTML == "" && noError.innerHTML == "") {
        const gk = nextBtn.setAttribute('href','./step2.html');
    }

});

