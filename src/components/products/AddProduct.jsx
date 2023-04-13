import { useNavigate } from "react-router-dom";
import ProductContextProvider, {
  useProducts,
} from "../../contexts/ProductContextProvider";
import { useContext } from "react";

const AddProduct = () => {
  const { useProducts } = useContext(ProductContextProvider);
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
        <h2 className="adminPage_h2">Admin Page</h2>
        <input
          className="adminPage_inputs"
          type="text"
          placeholder="title"
          name="title"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          type="text"
          placeholder="description"
          name="description"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          type="text"
          placeholder="category"
          name="category"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          name="image"
          type="text"
          placeholder="image"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          type="number"
          placeholder="year"
          name="year"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          type="text"
          placeholder="country"
          name="country"
          onChange={handleInput}
        />
        <input
          className="adminPage_inputs"
          type="text"
          placeholder="director"
          name="director"
          onChange={handleInput}
        />
        {/* <input type="file" accept="image/*" placeholder="image" /> */}
        {/* <input type="text" placeholder="image" onChange={handleInput} /> */}

        <button
          onClick={() => {
            addProduct(product);
            navigate("/productList");
          }}
        >
          add movie
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
