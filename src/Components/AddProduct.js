import {React, useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = ()=>{
    const [name, setname] = useState("");
    const [price , setprice] = useState("");
    const [category , setcategory ] = useState("");
    const [company, setcompany] = useState("");
   

    const addproduct = async () =>
        {
            if(!name || !price || !category || !company)
                {
                    toast.error('Enter All Fields', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                          
                        });

                    
                    return false;   
                }
                else
                {
                    let userId =JSON.parse(localStorage.getItem('user'))._id;
                    let productData = {
                        name,
                        price,
                        category,
                        userId,
                        company,
                      };
                      console.log(productData);
                   
                     let result = await fetch("http://localhost:5000/addproduct", {
                        method:'post',
                        body: JSON.stringify(productData),
                        headers:{
                            'Content-Type':'application/json'
                          }
                     });
        
                     result = await result.json();
                     console.log(result);
                     if(result == "Product Added")
                        {
                            toast.success('Product Added', {
                                position: "top-right",
                                autoClose: 3000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                  
                                });
                                setname("");
                                setprice("");
                                setcategory("");
                                setcompany("");

                        }                     

                } 
             
        }

    return(
        <div>
            <h2 className="productheading">Add Product</h2>
             <Form className="addproduct">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" required value={name} onChange={(e)=>setname(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Price" value = {price} onChange={(e) =>setprice(e.target.value)} />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group>
          <Form.Label>Product Category</Form.Label>
          <Form.Control type="text" placeholder="Enter Category" value={category} onChange={(e)=>setcategory(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Comapny</Form.Label>
          <Form.Control type="text" placeholder="Enter Company Name" value={company} onChange={(e)=>setcompany(e.target.value)}/>
        </Form.Group>

      </Row>

      <Button variant="primary" type="button" onClick={addproduct}>
        Add product
      </Button>
    </Form>

    <ToastContainer />
        </div>
    )
}

export default AddProduct;