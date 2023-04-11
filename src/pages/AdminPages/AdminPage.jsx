import React from "react";
import "../AdminPages/AdminPage.css";

const AdminPage = () => {
  return (
    <div className="adminPage_wrapper">
      <h2 className="adminPage_h2">Admin Page</h2>
      <input className="adminPage_inputs" type="text" placeholder="title" />
      <input
        className="adminPage_inputs"
        type="text"
        placeholder="description"
      />
      <input className="adminPage_inputs" type="number" placeholder="price" />
      <input className="adminPage_inputs" type="text" placeholder="category" />
      <input className="adminPage_inputs" type="number" placeholder="year" />

      <input type="file" accept="image/*" placeholder="title" />
      <button> add movie</button>
    </div>
  );
};

export default AdminPage;
