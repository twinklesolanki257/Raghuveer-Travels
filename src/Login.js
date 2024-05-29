import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adminlogin } from "./adminSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();
        let url = `http://localhost:4000/admin/?email=${email}`;

        try {
            const res = await axios.get(url);
            if (res.data.length === 1) {
                if (res.data[0].password === password) {
                    let adminname = res.data[0].name;
                    let adminid = res.data[0].id;
                    dispatch(adminlogin({ adname: adminname, adid: adminid }));
                    navigate("/dashboard");
                } else {
                    alert("Password does not match!");
                }
            } else {
                alert("Invalid Email!");
            }
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <body id='login'>
            <div className="registerbox">
                <center>
                    <div className="screen__content">
                        <div className="container-register">
                            <div className="screen">
                                <form className="login" onSubmit={submitHandle}>
                                    <h1 className="h1 heading">LOGIN FORM</h1>
                                    <div className="login__field">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className="login__field">
                                        <input input type="password" name="password" placeholder="Password" value={password} id="myInput" onChange={(e) => { setPassword(e.target.value) }} required
                                        />
                                    </div>
                                    <br />
                                    <button id="btn" className="btn" type="submit" onClick={submitHandle}>
                                        Log In
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </center>
            </div>

        </body>
    );
};

export default Login;
