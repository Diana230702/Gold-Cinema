import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';
import '../products/Products.css';

const ProductCard = ({ item }) => {
  const { deleteProduct, commentProduct } = useProducts();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  return (
    <div className="vvv">
      <div className="productCard_card">
        <img className="productCard_img" src={item.image} alt="" />
        <p className="productCard_p">{item.title}</p>
        <p>{item.year}</p>
        <p className="productCard_p">{item.price}</p>

        <button className="edit-btn" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => deleteProduct(item.id)}>
          Delete{' '}
        </button>
        <button>
          <a href={item.film}>watch now</a>
        </button>
        <input
          value={comment}
          onChange={(ivent) => setComment(ivent.target.value)}
          placeholder="WriteyourPenis"></input>
        {/* <button onClick={() => commentProduct({ body: comment, owner: user.id, product: item.id })}>
          send
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
