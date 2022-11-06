import React,{useState} from 'react'
import { useGlobalContext } from '../Content/AppProvider';
import{FaBook} from 'react-icons/fa';
const Login=()=> {
  const {fetchLogin,state} = useGlobalContext();
  const {error}=state;
  const [user,setUser] = useState({
      email:"",
      password:""
    });
  
  const handleChange =(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit =(e)=>{
      e.preventDefault();
      const userData = {
        email:user.email,
        password:user.password
      };
     fetchLogin(userData);
     setUser({
      email:"",
      password:""       
     })
  }

  return (
  <section className="section-login" >
  <div className="container">
    <div className=" container-login row d-flex justify-content-center align-items-center">
      <div className="col col-xl-10">
        <div className="card-login">
          <div className="row g-0">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={(event)=>handleSubmit(event)}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <FaBook className="book"/>
                    <span className="h1 fw-bold mb-0">-Learning</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Connecter à votre compte</h5>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Adresse email</label>
                    <input 
                        name="email"
                        type="email"
                        id='email'
                        value={user.email}
                        autoFocus
                        onChange= {handleChange}
                        required
                        className="input form-control form-control-lg" />
                    {error && error.emailError && <p className='error-response'>{error.emailError}</p>}
                  </div>
                 
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">Mot de passe</label>
                    <input 
                        name="password"
                        id="password"
                        value={user.password}
                        type='password'
                        autoFocus
                        onChange= {handleChange}
                        required      
                        className="input form-control form-control-lg" />
                        {error && error.passwordIncorrect && <p className='error-response'>{error.passwordIncorrect}</p>}
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="http://localhost:3000/Signin" target="_blank"  rel="noopener noreferrer"
                      style={{color:"#393f81"}}>Register here</a></p>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login