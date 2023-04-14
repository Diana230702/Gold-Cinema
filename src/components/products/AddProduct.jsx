import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { createProduct, product, setProduct } = useProducts();
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [country, setCountry] = useState();
  const [director, setDirector] = useState();
  const [year, setYear] = useState();
  const [image, setImage] = useState();

  function handleSave() {
    let NewProduct = new FormData();
    NewProduct.append("title", title);
    NewProduct.append("description", description);
    NewProduct.append("category", category);
    NewProduct.append("country", country);
    NewProduct.append("director", director);
    NewProduct.append("year", year);
    NewProduct.append("image", image);
    createProduct();
  }

  return (
    <div>
      <div className="adminPage_wrapper">
        <div className="admin-content">
          <h2 className="adminPage_h2">Admin Page</h2>
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Director"
            name="director"
            onChange={(e) => setDirector(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="number"
            placeholder="Year"
            name="year"
            onChange={(e) => setYear(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            name="image"
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />

          <button
            className="crud-btn-add"
            onClick={() => {
              handleSave(product);
              navigate("/productList");
            }}
          >
            Add movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
