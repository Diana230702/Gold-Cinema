import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, editProduct, getProducts } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setCategory(oneProduct.category);
      setCountry(oneProduct.country);
      setDirector(oneProduct.director);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [director, setDirector] = useState("");
  const [image, setImage] = useState("");

  function handleSave(event) {
    // event.preventDefault();
    // if (!title.trim() || !description || !category || !director || !image) {
    //   alert("Inputs are empty");
    //   return;
    // }
    let NewProduct = new FormData();
    NewProduct.append("title", title);
    NewProduct.append("description", description);
    NewProduct.append("category", category);
    NewProduct.append("country", country);
    NewProduct.append("director", director);
    NewProduct.append("image", image);
    editProduct(id, NewProduct);
    navigate("/productList");
  }

  return (
    <div>
      <div className="adminPage_wrapper">
        <div className="admin-content">
          <h3 className="adminPage_h2">Edit Product</h3>
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <p>image before</p>
          <img src={oneProduct?.image} />
          <input
            className="adminPage_inputs"
            type="file"
            placeholder="Image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button className="crud-btn-add" onClick={handleSave}>
            save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
