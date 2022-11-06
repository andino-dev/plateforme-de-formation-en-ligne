const isEmpty = require('is-empty');
const validateInputRegister = (values)=>{
    let errors={};
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const {name,email,password,password2} = values;
     
     if(isEmpty(name)){
       errors.name='fields name is required';
     }
     if(isEmpty(email)){
       errors.email='Email field is required';
     }
     else if(!validEmail.test(email)){
       errors.email = 'invalid email'; 
     }
  
     if(isEmpty(password)){ 
       errors.password= 'Password field is required';
     } else if(password.length <8){
      errors.password = "Password must be at least 8 characters";
    }
     if(isEmpty(password2)){
      errors.password2 = "Confirm password field is required";
    }else if(password2!==password){
       errors.password2 = "Passwords must match";
  
     }
     return{
       errors,
       isValid:isEmpty(errors)
     }
    }
    module.exports=validateInputRegister;