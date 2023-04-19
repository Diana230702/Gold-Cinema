import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';
import '../products/Products.css';
import { IconButton } from '@mui/material';
import { TurnedIn } from '@mui/icons-material';
import { useFavorite } from '../../contexts/FavoriteContextProvider';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({ item, film }) => {
  const { postFavoriteProduct, deleteFavoriteProduct } = useFavorite();
  const { deleteProduct, commentProduct } = useProducts();
  const navigate = useNavigate();
  const { likeProduct } = useProducts();
  const [comment, setComment] = useState('');
  const [isLiked, setIsLiked] = useState(true);

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
        <RatingComponent />
        <IconButton onClick={() => postFavoriteProduct(item)}>
          <TurnedIn sx={{ color: 'white' }} />
        </IconButton>
        <button className="watch-btn">
          <a className="watch-a" href={item.film}>
            watch now
          </a>
        </button>
        {isLiked ? (
          <div
            onClick={() => {
              setIsLiked(false);
              likeProduct({ product: film.id });
            }}>
            <FavoriteBorderIcon />
          </div>
        ) : (
          <div
            onClick={() => {
              console.log('TEST');
              setIsLiked(true);

              // if (user && user.id) {
              //   likeProduct({ owner: user.id, product: film.id });
              // }
            }}>
            <FavoriteIcon />
          </div>
        )}
        <input
          className="card-comment"
          value={comment}
          onChange={(ivent) => setComment(ivent.target.value)}
          placeholder="leave comment"></input>
        <button onClick={() => commentProduct({ body: comment, product: film.id })}>send</button>
      </div>
    </div>
  );
};

export default ProductCard;
