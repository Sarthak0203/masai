document.addEventListener('DOM content loaded', function(){
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    function validatename(){
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block";
        } else {
            nameError.style.display = "none";
        }
    }
    function validateemail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    }
    function validatepassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    }
    nameInput.addEventListener("input", validatename);
    nameInput.addEventListener("blur", validatename);

    emailInput.addEventListener("input",validateemail);
    emailInput.addEventListener("blur",validateemail);

    passwordInput.addEventListener("input", validatepassword);
    passwordInput.addEventListener("blur", validatepassword);

    document.getElementById('registration-form').addEventListener('submit',function(event){
        validatename();
        validateemail();
        validatepassword();
        if (nameError.style.display === "block" || emailError.style.display === "block" || passwordError.style.display === "block") {
            event.preventDefault(); 
        }
    });

});

