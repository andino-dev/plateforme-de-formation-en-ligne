import React,{useState} from 'react'
import { useGlobalContext } from '../Content/AppProvider';
import{FaBook} from 'react-icons/fa';
function Signin() {
  const {fetchRegister,state} = useGlobalContext();
  const {error}=state;
  const [user,setUser]= useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })
  const handleChange=(e)=>{
   setUser({
     ...user,
     [e.target.name]:e.target.value
   });
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    const userData = {
      name:user.name,
      email:user.email,
      password:user.password,
      password2:user.password2
    };
    fetchRegister(userData);
  }
  return (
    <section className="section-register" >
    <div className="container">
      <div className=" container-register row d-flex justify-content-center align-items-center">
        <div className="col col-xl-10">
          <div className="card-register">
            <div className="row g-0">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <FaBook className="book"/>
                      <span className="h1 fw-bold mb-0">-Learning</span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Créer votre compte</h5>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="username">Saisir votre nom</label>
                      <input 
                          name="name"
                          type="name"
                          id='name'
                          value={user.name}
                          autoFocus
                          onChange= {handleChange}
                          error={error.name}
                          required
                          className="input form-control form-control-lg" />
                      {error && error.name&& <p className='error-response'>{error.name}</p>}
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Adresse email</label>
                      <input 
                          name="email"
                          type="email"
                          id='email'
                          value={user.email}
                          autoFocus
                          onChange= {handleChange}
                          error={error.email}
                          required
                          className="input form-control form-control-lg" />
                          {error && error.email&& <p className='error-response'>{error.email}</p>}
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
                          error={error.password}
                          required      
                          className="input form-control form-control-lg" />
                          {error && error.password&& <p className='error-response'>{error.password}</p>}
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password2">Confirmer mot de passe</label>
                      <input 
                          name="password2"
                          id="password2"
                          value={user.password2}
                          type='password'
                          autoFocus
                          onChange= {handleChange}
                          error={error.password2}
                          required      
                          className="input form-control form-control-lg" />
                          {error && error.password2&& <p className='error-response'>{error.password2}</p>}
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block" type="submit">Register</button>
                    </div>
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

export default Signin