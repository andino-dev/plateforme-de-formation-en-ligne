const isEmpty = require('is-empty');
const validateInputLogin= (values)=>{
let errors={};
const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const {email,password} = values;

   if(email.trim().length <0){
     errors.email = "Email field is required";
   }
  else if(!email.match(validEmail)){
     errors.email = "email is Invalid";
  }

  if(password.length <0){
      errors.password="Password field is required"
  }
    return {
        errors,
        isValid : isEmpty(errors)    
    };
}


module.exports = validateInputLogin;