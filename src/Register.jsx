
import React,{useState} from "react";
export const Register = (props) => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
    console.log(email);
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
      <form className="register-form"onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} name="name" id="name" placeholder="full Name"/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
        </form>
        <button  className="login-form" onClick={()=> props.onFormSwitch('login')}>Login Here</button>
        </div>
    )
}