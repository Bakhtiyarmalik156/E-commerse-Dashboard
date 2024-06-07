import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, React  } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const Login =() =>{

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

   const signup = () =>{
    navigate("/signup");
   }

    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:5000/login', {
          method:'post',
          body: JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        
    
        });
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result))
        if(result == "Incorrect Email or Password")
          {
               
                toast.error('Incorrect Credentials', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"       
                    });
    
          }        
          else if(result)
            {       
                localStorage.setItem("user", JSON.stringify(result))     
                toast.success('Login successful', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    onClose: () => navigate("/")
                  });
            }
        setEmail("");
        setPassword("");   
      };



    return(
        <div className="signup-container d-flex justify-content-center align-items-center vh-100">
        <div className="signup-card p-4">
          <Form>       
            <div className="form-group">
              <label htmlFor="txtEmail">Email address</label>
              <Form.Control
                type="email"
                className="form-control"
                id="txtEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="txtpass">Password</label>
              <Form.Control
                type="password"
                className="form-control"
                id="txtpass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div id="btnSubmit" className="btn-submit">

            <span className="btnSubmit" > 
          <Button  type="button" onClick={signup} variant="primary">
            Sign Up
          </Button>
          </span>
          <span>
          <Button type="button" onClick={handleLogin} variant="primary">
            Login
          </Button>
          </span>            
            </div>
          </Form>
        </div>
        <ToastContainer />
      </div>
)};

export default Login;