import {useDispatch} from "react-redux";
import {useState} from "react";
import {Login_Success}from  "../Redux/action"
export const Login = () => {
    const [user, setUser] = useState("");
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
        dispatch(Login_Success({setQuery}))
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
    </div>
  );
};
