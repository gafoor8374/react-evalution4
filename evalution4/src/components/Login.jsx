import {useDispatch} from "react-redux";
import {useState} from "react";
import {Login_Success}from  "../Redux/action"
import {login} from "../Redux/action"
import { Orders } from "./Order";
export const Login = () => {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [query, setQuery] = useState("")

    const dispatch = useDispatch();

 const handleChange =(e)=>{
      const {name,value}= e.target;
      setQuery({
          ...query,
          [name]:value})

    }

    const handleLogin =()=> {
        dispatch(login({username,password}))
    }
  return (
    <div>
      <input
        onChange={handleChange}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
      onChange={handleChange}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleLogin}>
        Login
      </button>
      <Orders />
    </div>
  );
};
