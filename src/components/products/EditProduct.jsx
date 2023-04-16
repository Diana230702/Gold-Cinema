import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const navigate = useNavigate();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setCategory(oneProduct.category);
      setCountry(oneProduct.country);
      setDirector(oneProduct.director);
    }
  }, [oneProduct]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [director, setDirector] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    let NewProduct = new FormData();
    NewProduct.append("title", title);
    NewProduct.append("description", description);
    NewProduct.append("category", category);
    NewProduct.append("country", country);
    NewProduct.append("director", director);
    NewProduct.append("image", image);
    editProduct(id, NewProduct);
  }

  return (
    <div>
      <div className="adminPage_wrapper">
        <div className="admin-content">
          <h2 className="adminPage_h2">Edit Product</h2>
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Director"
            onChange={(e) => setDirector(e.target.value)}
          />

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
