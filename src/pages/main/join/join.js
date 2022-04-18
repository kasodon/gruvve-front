import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";

import './join.scss';

function Join() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("developer");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [post, setPost] = useState(null);

    // const newUser = ()  => {
    //     console.log("htmlForm data:", {
    //        name,
    //        username,
    //        email,
    //        role,
    //        password,
    //        confirm_password
    //     })
    //     axios.post(baseURL, {
    //         name,
    //         username,
    //         email,
    //         role,
    //         password,
    //         confirm_password
    //   })
    //   .then((response) => {
    //     setPost(response.data);
    //     console.log("returned data:", post);
    //   });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: name,
            username: username,
            email: email,
            role: role,
            password: password,
            confirm_password: confirm_password
        };
         axios.post('http://localhost:4200/users/register', {user})
         .then((res) => {
        setPost(res.data);
        console.log("returned data:", post);
      }).catch(error => {
        console.log(error.response)
    });
      }

    return (
        <div className="join">
            <div className="logo"><span><i>GRUVVE</i></span></div>
            <div className="action-box">
                {/* <div className="wallet">
                    <span>
                    <img />
                    <p></p>
                    </span>
                    No wallet connected
                </div> */}
                <div className="discord">
                    <span>Skip to Discord </span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="row">
          <label htmlFor="fullName">Full Name</label>
          <input
            className=""
            placeholder="FullName"
            type="text"
            autoFocus
            name="fullName"
            required
            onChange = {e => setName({name: e.target.value})}
          />
      </div>
      <div className="row">
          <label htmlFor="userName">Username</label>
          <input
            className=""
            placeholder="Username"
            type="text"
            name="userName"
            required
            onChange = {e => setUsername({username: e.target.value})}
          />
      </div>
      <div className="row">
          <label htmlFor="email">Email</label>
          <input
            className=""
            placeholder="Email"
            type="email"
            name="email"
            required
            onChange ={e => setEmail({email: e.target.value})}
          />
      </div>
      <div className="row">
      <label htmlFor="role">
          Choose Role
          </label>
          <select name="role" required onChange ={e => setRole({role: e.target.value})}>
            <option value="developer">Developer</option>
            <option value="marketer">Marketer</option>
            <option value="biz_analyst">Biz Analyst</option>
            <option value="designer">Designer</option>
            <option value="content_creator">Content Creator</option>
          </select>
      </div>
      <div className="row">
          <label htmlFor="password">Password</label>
          <input
            className=""
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange = {e => setPassword({password: e.target.value})}
          />
      </div>
      <div className="row">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className=""
            placeholder="Confirm Password"
            type="password"
            name="confirm_password"
            required
            onChange = {e => setConfirmPassword({confirm_password: e.target.value})}
          />
      </div>
      <input type="submit" />
            </form>
        </div>
    )
}

export default Join