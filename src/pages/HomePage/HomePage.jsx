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

const collection = [
  {
    img: 'https://i.imgur.com/2GCHO0D.jpg',
    name: 'Sonic',
    price: 'free',
  },
];

const HomePage = () => {
  const { getProducts, products } = useProducts();
  console.log(localStorage.getItem('token'));
  const useNaviage = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="MainHomePage">
      <FilmCarousel films={products} />
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
