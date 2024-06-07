import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signup.css";
import { useState, React  } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const auth = localStorage.getItem('user');
  //   if(auth)
  //     {
  //       navigate('/')
  //     }

  // });

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch('http://localhost:5000/register', {
      method:'post',
      body: JSON.stringify({name, email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    

    });
    result = await result.json()
    console.log(result);
    if(result == "Email Already Exist")
      {
        toast.error('Email Already Exist', {
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
      else if(result == "User Created successfully")
      {
        toast.success('Account Created', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          onClose: () => navigate("/login")     
          });
          localStorage.setItem("user",JSON.stringify(result))
          setName("");
          setEmail("");
          setPassword(""); 

      }
      else
      {
        toast.error('Please Fill Fields', {
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

  };

  const HandleLogin = async() => {
    navigate("/login");
  }

  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
    <div className="signup-card p-4">
      <Form>
        <div className="form-group">
          <label htmlFor="txtName">Full Name</label>
          <Form.Control
            type="text"
            className="form-control"
            id="txtName"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="btn-submit">
          <span className="btnSubmit" > 
          <Button  type="button" onClick={collectData} variant="primary">
            Sign Up
          </Button>
          </span>
          <span>
          <Button type="button" onClick={HandleLogin} variant="primary">
            Login
          </Button>
          </span>

        </div>
      </Form>
    </div>
    <ToastContainer />
  </div>
  );
};
export default SignUp;
