const form=document.getElementById("form");
// const username=document.getElementById("username");
// const Email=document.getElementById("Email");
// const Password=document.getElementById("Password");
// const CPassword=document.getElementById("Confirm-Password");
// const submit=document.getElementById("btn");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
const validateInputs=()=>{
    const usernameValue=username.value.trim();
    const emailValue=Email.value.trim();
    const PasswordValue=Password.value.trim();
    const CPasswordValue=CPassword.value.trim();

    if (usernameValue==='') {
        setError(username,'Username is required')
    } else {
        setSuccess(username);
        
    }
    if (emailValue==='') {
        setError(Email,'Email is required')
    } else {
        setSuccess(Email);
    }
    if (PasswordValue==='') {
        setError(Password,'Password is required')
    } else {
        setSuccess(Password);
    }
    if (CPasswordValue==='') {
        setError(CPassword,'Confirm Password is required')
    } else {
        setSuccess(CPassword);
    }

}

const setError=(element,message)=>{
    const  inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=message;

}