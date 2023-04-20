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
  const { deleteProduct, likeProduct } = useProducts();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(true);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      body: comment,
      product: film.id,
      username: 'John Doe', // replace with actual username when authentication is implemented
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setComment('');
  };

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
              setIsLiked(true);
            }}>
            <FavoriteIcon />
          </div>
        )}
        <input
          className="card-comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="leave comment"
        />
        <button onClick={handleCommentSubmit}>Send</button>
        <div className="comments-section">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <h4>{comment.username}</h4>
              <p>{comment.body}</p>
              <p>Movie: {comment.product}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
