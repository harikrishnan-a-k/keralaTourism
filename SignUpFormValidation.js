const errorFlags={
    emailErrFlag:true,
    mobileErrFlag:true,
    passwordErrFlag:true,
    rpasswordErrFlag:true,
}
function get(str){
    return document.querySelector(str);
}
const signUpBtn=get('#signUpBtn');
const email=get('#email');
const emailError=get('#emailError');
const mobile=get('#mobile');
const mobileError=get('#mobileError');
const password=get('#password');
const passwordError=get('#passwordError');
const rpassword=get('#rpassword');
const rpasswordError=get('#rpasswordError');
const passLengthIndicator=get('#passLenthIndicator');

const emailRegExp=/^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})((\.[a-z]{2,3})?)$/;
const mobileRegExp=/(^\d{10}|(\d{3}\-\d{3}\-\d{4})|(\d{3}\.\d{3}\.\d{4})|(\d{3}\s\d{3}\s\d{4}))$/;
const passRegExp=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

const inputValidate=function(input,err,regExp){
    
    let val=input.value.trim();
    let flagName=input.id+"ErrFlag";
    if(!regExp.test(val)){
        
        errorFlags[flagName]=true;
        const msg=`Invalid  ${input.id} `;
        err.innerHTML=msg;
        err.classList.remove('hidden');
    }
    else{
        errorFlags[flagName]=false;
        const msg='';
        err.innerHTML=msg;
        err.classList.add('hidden');
        
    }
};
email.addEventListener('input',()=>{
    inputValidate(email,emailError,emailRegExp);
});
mobile.addEventListener('input',()=>{
    inputValidate(mobile,mobileError,mobileRegExp);
});
password.addEventListener('input',()=>{
    inputValidate(password,passwordError,passRegExp);
});

rpassword.addEventListener('input',()=>{
    if(rpassword.value===password.value){
        errorFlags.rpasswordErrFlag=false;
        const msg='';
        rpasswordError.innerHTML=msg;
        rpasswordError.classList.add('hidden');
        
    }
    else{
        errorFlags.rpasswordErrFlag=true;
        const msg='Password Mismatch';
        rpasswordError.innerHTML=msg;
        rpasswordError.classList.remove('hidden');
    }
});
// for showing the password strength on each  change on password
const indicatepassLength=()=>{
    if(password.value.length<8){
        passLengthIndicator.innerHTML='weak';
        passLengthIndicator.style.backgroundColor='red';
    }
    else if(password.value.length<12&&password.value.length>=8){
        passLengthIndicator.innerHTML='medium';
        passLengthIndicator.style.backgroundColor='orange';
    }
    else{
        passLengthIndicator.innerHTML='strong';
        passLengthIndicator.style.backgroundColor='green';
    }
    let passIndicatorLen=10+password.value.length*5;
    passLengthIndicator.style.width=`${passIndicatorLen}%`;
    passLengthIndicator.classList.remove('hidden');
};
// adding  the indicatepassLength as event call back for password input on 'input' event.
password.addEventListener('input',indicatepassLength);

// validate function prevent form from submiting if any of the flags is true
function validate(e){
    for(let flag in errorFlags){
        if(errorFlags[flag]===true){
            
            console.log(errorFlags[flag]);
            e.preventDefault();
            return;
        }
        
    }
}
signUpBtn.addEventListener('click',validate);


// this is jquery for show/hide password.

$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });