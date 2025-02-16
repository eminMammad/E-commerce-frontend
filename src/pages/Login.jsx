import React, {useContext, useState, useEffect} from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

    const[currentState, setCurrentState] = useState("Login");
    const {token, setToken, navigate, backendURL} = useContext(ShopContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (currentState === "Sign Up"){ //Sign Up API or register API
                const response = await axios.post('/api/users/register', {username, email, password})
                // console.log(response.data);
                if (response.data.token) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            } else{ //Login API
                const response = await axios.post('/api/users/login', {username, password});
                // console.log(response.data);
                if (response.data.token) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                } else {
                    toast.error(response.data.message);
                }

            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token])

    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
            </div>
            { currentState === "Login" ? "" : <input onChange={(e) => setEmail(e.target.value)} value={email} className="w-full px-3 py-2 border border-gray-800" placeholder="Email" type="email" required/>}
            <input onChange={(e) => setUsername(e.target.value)} value={username} className="w-full px-3 py-2 border border-gray-800" placeholder="Name" type="text" required/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className="w-full px-3 py-2 border border-gray-800" placeholder="Password" type="password" required/>
            <div className="w-full flex justify-between text-sm mt-[8px]">
                <p className="cursor-pointer">
                    Forgot your password?
                </p>
                {
                    currentState === "Login" ? <p className="cursor-pointer" onClick={()=> (setCurrentState("Sign Up"))}> Create Account </p> : <p className="cursor-pointer" onClick={()=> (setCurrentState("Login"))}> Already have an account? </p>
                }
            </div>
            <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
        </form>
    );
}

export default Login;