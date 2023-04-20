import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../HomePage/FlimCarousel.css';
import { useNavigate } from 'react-router-dom';

const FilmCarousel = ({ films }) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="App">
      <Slider {...settings}>
        {films.map((film) => (
          <div key={film.id} className="cardsSlides">
            <div className="decsr">
              <h3>{film.name}</h3>
              {/* <p>{film.description}</p> */}
            </div>
            <img
              className="imgSlde"
              src={film.img}
              onClick={() => navigate(`/productList/${film.id}`)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FilmCarousel;
