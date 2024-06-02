import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signup.css";
import { useState, React } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const colletData = () => {
    console.warn(name, email, password);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 signcard">
          <Form>
            <div className="form-group">
              <label for="exampleInputPassword1">Full Name</label>
              <Form.Control
                type="text"
                class="form-control"
                id="txtName"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <Form.Control
                type="email"
                class="form-control"
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
              <label for="exampleInputPassword1">Password</label>
              <Form.Control
                type="password"
                class="form-control"
                id="txtpass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div id="btnSubmit" className="btnsubmit">
              <Button type="button" onClick={colletData} variant="primary">
                Sign Up
              </Button>{" "}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
