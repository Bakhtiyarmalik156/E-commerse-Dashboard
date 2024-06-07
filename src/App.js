import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/signup";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>

          <Route element={<PrivateComponent></PrivateComponent>}></Route>
          <Route path="/" element={<ProductList></ProductList>}></Route>
          <Route path="/add" element={<AddProduct></AddProduct>}></Route>
          <Route path="/update" element={<h1>Update Products</h1>}></Route>
          <Route path="/logout" element={<h1>Logout</h1>}></Route>
          <Route path="/profile" element={<h1>User Profile</h1>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
