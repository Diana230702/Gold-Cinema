import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../NewPermier/NewPremier.css';
// import { useProducts } from '../../contexts/ProductContextProvider';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useProducts } from '../../../../contexts/ProductContextProvider';

const NewPremier = ({ films }) => {
  // const [isLiked, setIsLiked] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="NewPremier">
      <Slider {...settings}>
        {films.map((film) => {
          return <Item film={film} />;
        })}
      </Slider>
    </div>
  );
};

function Item({ film }) {
  const { likeProduct } = useProducts();
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div key={film.id} className="card">
      <div className="card-top">
        <img src={film.image} alt="" />
      </div>
      <div className="decsr">
        <h3>{film.title}</h3>
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
        <p>{film.description}</p>
      </div>
    </div>
  );
}

export default NewPremier;
