$(document).ready(function() {
  var passwordValidation = function(){
    let getPasswordValue = document.querySelector('.password-input');
    let passwordLength = getPasswordValue.value.length;
    let isPasswordInvalid =  passwordLength < 4;
    if(isPasswordInvalid){
      alert('Tu contaseña es invalida');
    }
  }
  var emailValidation = function (){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let getemailValue = document.querySelector('.email-input').value;
    console.log(getemailValue);
    console.log(emailRegex.test(getemailValue));
    if(!emailRegex.test(getemailValue)){
      alert('Tu correo no es valido');
    }
  }
  $('.login-btn').click(() => {
    passwordValidation();
    emailValidation();
  })
});

