import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import SimpleSlider from './Slider/Slider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../HomePage/HomePage.css';
import FilmCarousel from './FilmCarousel';
import NewPremier from './FilmCards/NewPermier/NewPremier';
import { useProducts } from '../../contexts/ProductContextProvider';
import Collections from './FilmCards/Collections/Collections';
import dick1 from './Img/1_0000_maxresdefault.jpg';

export const collection = [
  {
    img: "https://wallpapers.moviemania.io/desktop/movie/122917/5cc497/the-hobbit-the-battle-of-the-five-armies-desktop-wallpaper.jpg?w=2032&h=1148",
    name: "Sonic",
  },
  {
    img: "https://wallpapers.moviemania.io/desktop/movie/157336/410e26/interstellar-desktop-wallpaper.jpg?w=2032&h=1148",
    name: "Sonic",
  },
  {
    img: "https://wallpapers.moviemania.io/desktop/tv/1399/26ba6e/game-of-thrones-desktop-wallpaper.jpg?w=2032&h=1148",
    name: "Sonic",
  },
  {
    img: "https://wallpapers.moviemania.io/desktop/movie/10527/aae39f/madagascar-escape-2-africa-desktop-wallpaper.jpg?w=2032&h=1148",
    name: "Sonic",
  
  },
];
const HomePage = () => {
  const { getProducts, products } = useProducts();
  // console.log(localStorage.getItem("token"));
  const useNaviage = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    // console.log(products);
  }, [products]);
  return (
    <div className="MainHomePage">
      <FilmCarousel films={collection} />
      <NewPremier films={products} />
      <NewPremier films={products} />

      <NewPremier films={products} />
      <NewPremier films={products} />

      {/* <Collections collection={films} /> */}

      {/* <div className="Collection">
        <div className="UpeersOfCollection"></div>
        <h3> Коллекции </h3>
        <Button>Посмотреть все </Button>
        <div className="MainCardOfCollection">
          {res.map((item) => (
            <button className="ListCardOfCollection">
              <img className="CardOfCollection_img" src={item.img} alt="" />
              <p className="CardOfCollection_p">{item.name}</p>
              <p className="CardOfCollection_p">{item.price}</p>
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default HomePage;
