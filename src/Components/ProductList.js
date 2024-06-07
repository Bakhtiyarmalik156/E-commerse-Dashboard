import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id) =>{
    let result = await fetch(`http://localhost:5000/product/${id}`,{
    method:"Delete"
    });
    result = await result.json();
    if(result == "Product Deleted")
        {
            toast.success('Product Deleted', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                getProducts();
        }
  }

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/getproducts");
    result = await result.json();
    if (Array.isArray(result)) {
        setProducts(result);
      }
      else {
        console.error("API response is not an array:", result);
      }
  };
  console.log("Total Products", products);
  return (
    <div>
      <h3 className="productheading">Product List</h3>
      <table id="example" class="table table-striped" >
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Campany Name</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.company}</td>
                <td>
                <button onClick={() => deleteProduct(product._id)} className="btn btn-danger btn-sm">
                    <FontAwesomeIcon icon={faTrashAlt} /> {/* Use FontAwesomeIcon */}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products available</td>
            </tr>
          )}
        </tbody>
        <tfoot>
            <tr>
            
            <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Campany Name</th>
                <th>Delete</th>
            </tr>
        </tfoot>
    </table>

    <ToastContainer />
    </div>
  );
};
export default ProductList;
