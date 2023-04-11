import React from "react";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <input type="number" placeholder="price" />
      <input type="text" placeholder="category" />
      <input type="number" placeholder="year" />

      <input type="file" accept="image/*" placeholder="title" />
    </div>
  );
};

export default AdminPage;
