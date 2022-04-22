import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from "axios";
import './login.scss'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     axios.post('https://guvve-backend.herokuapp.com/users/login', {
      username,
      password
     })
     .then((res) => {
      console.log(res);
       setData(res.data)
       console.log("data:", data);
       if (data.success == true) {
        navigate("/user")
       } else if (data.success == false) {
         alert('Login unsuccessful, please try again')
         navigate("/")
       } else {
          navigate("/")
       }
  }).catch(error => {
})
  }

    return (
        <div className="login">
            <div className="logo"><span><i>GRUVVE</i></span></div>
            <h4>Please login to access your DAO membership account</h4>
            <form onSubmit={handleSubmit}>
  <label htmlFor="username">
    Username:
    </label>
    <input type="text" name="username" onChange = {e => setUsername(e.target.value)} />
  <label htmlFor="password">
    Password:
    </label>
    <input type="password" name="password" onChange = {e => setPassword(e.target.value)} />
  <button>Login</button>
</form>
        </div>
    )
}

export default Login