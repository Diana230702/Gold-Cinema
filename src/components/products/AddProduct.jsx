import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProduct, product, setProduct } = useProducts();
  const navigate = useNavigate();

  function handleInput(e) {
    if (e.target.name === "year") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
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
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Category"
            name="category"
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            name="image"
            type="text"
            placeholder="Image"
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            type="number"
            placeholder="Year"
            name="year"
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleInput}
          />
          <input
            className="adminPage_inputs"
            type="text"
            placeholder="Director"
            name="director"
            onChange={handleInput}
          />
          {/* <input type="file" accept="image/*" placeholder="image" /> */}
          {/* <input type="text" placeholder="image" onChange={handleInput} /> */}

          <button
            className="crud-btn-add"
            onClick={() => {
              addProduct(product);
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
