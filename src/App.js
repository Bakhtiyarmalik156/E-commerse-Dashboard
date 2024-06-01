import './App.css';
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
      </Nav>   
      <Routes>
        <Route path='/' element={<h1>Product Listing</h1>}></Route>
        <Route path='/add' element={<h1>Adding Products</h1>}></Route>
        <Route path='/update' element={<h1>Update Products</h1>}></Route>
        <Route path='/logout' element={<h1>Logout</h1>}></Route>
        <Route path='/profile' element={<h1>User Profile</h1>}></Route>
      </Routes>
      </BrowserRouter>
      <div className='footer'>
      <Footer></Footer>
      </div>
  
     
    </div>
  );
}

export default App;
