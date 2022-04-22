import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router';
import axios from "axios";

import './join.scss';

function Join() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("developer");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");

    const [data, setData] = useState();

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
         axios.post('https://guvve-backend.herokuapp.com/users/register', {
          name,
          username,
          email,
          role,
          password,
          confirm_password
         })
         .then((res) => {
          console.log(res);
          //  const data = res.data;
           setData(res.data);
           console.log(data);
            navigate("/user");
      }).catch(error => {
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
            onChange = {e => setName(e.target.value)}
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
            onChange = {e => setUsername(e.target.value)}
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
            onChange ={e => setEmail(e.target.value)}
          />
      </div>
      <div className="row">
      <label htmlFor="role">
          Choose Role
          </label>
          <select name="role" required onChange ={e => setRole(e.target.value)}>
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
            onChange = {e => setPassword(e.target.value)}
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
            onChange = {e => setConfirmPassword(e.target.value)}
          />
      </div>
      <input type="submit" />
            </form>
        </div>
    )
}

export default Join