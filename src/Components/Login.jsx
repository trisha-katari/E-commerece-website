// import React, { useState } from 'react';
// import './Login.css';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Logging in with:', { email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input 
//         type="email" 
//         placeholder="Email" 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)} 
//       />
//       <input 
//         type="password" 
//         placeholder="Password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can add your login logic (e.g., API call)
//         console.log('Email:', email, 'Password:', password);
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//             <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//     );
// };

// export default Login;


import React from "react";
import './Login.css'
export default function Login(){
    const logValid=()=>{
           let log=document.getElementById("email1") 
           let log1=document.getElementById("pass1")
           if((log.value)===window.localStorage.getItem("email")&&(log1.value)===window.localStorage.getItem("password"))
            {
           window.open("./")
        }else{
            alert("enter valid details")
        }
    }
    return(
        <>
        <h1 id="lform">Login Form</h1>
       <div className="login">
    
    <label htmlFor="">Email</label>
    <input type="text" id='email1'/><br></br>
    <label htmlFor="">Password</label>
    <input type="password" maxLength={6} id='pass1'/><br></br>
    <button onClick={logValid}>Login</button>
       </div>
        </>
    )
}