$(document).ready(function() {
  var passwordValidation = function(){
    let getPasswordValue = document.querySelector('.password-input');
    let passwordLength = getPasswordValue.value.length;
    let isPasswordInvalid =  passwordLength < 4;
    if(isPasswordInvalid){
      alert('Tu contaseña es invalida');
    }
  }

  $('.login-btn').click(passwordValidation)
});
