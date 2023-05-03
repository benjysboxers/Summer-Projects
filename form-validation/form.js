function validation(){
    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("pass");
    const conpass = document.getElementById("conpass");
    const setError = (element, message) =>{
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.nameError');

        errorDisplay.innerText = message;
        inputControl.classList.add('sucess');
        inputControl.classList.remove('error');
    }
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const conpassValue  = conpass.value.trim();

    if(usernameValue == ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }
    
    if(emailValue == ''){
        setError(email, 'Email is required');
    }else if (!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(passwordValue == ''){
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 charachters.')
    }else{
        setSuccess(password);
    }

    if(conpassValue == ''){
        setError(conpass, 'Please confirm your password');
    }else if(conpassValue !== passwordValue){
        setError(conpass, "Passwords don't match");
    }else{
        setSuccess(conpass);
    }
}




