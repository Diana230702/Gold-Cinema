import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import dick1 from '../Img/1_0000_maxresdefault.jpg';
import dick2 from '../Img/1_0001_Large_3909.jpg';
import dick3 from '../Img/1_0002_Joker-2019-Movie-Still-Joaquin-Phoenix-Arthur-Fleck-The-Joker-joker-2019-43061795-600-351.jpg';
import dick4 from '../Img/1_0003_wp11726689.jpg';
import dick5 from '../Img/1_0004_No-Time-to-Die-James-Bond-movie--636x382.jpg';
import AbcIcon from '@mui/icons-material/Abc';
import { display } from '@mui/system';
import './Slider.css';

function Slider() {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      img: dick1,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick2,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick3,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick4,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick5,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick5,
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      img: dick5,
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={3009}
      animation={'slide'}
      duration={1000}
      cycleNavigation={'boolean'}
      height={500}
      stopAutoPlayOnHover
      swipe
      navButtonsAlwaysVisible
      // NextIcon={<AbcIcon />}
      className="CarouselSX">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      className="itemsSlider"
      sx={{ backgroundColor: '#343434', color: 'white', pading: '0,2%,0,2%' }}>
      {/* <Button className="CheckButton">Dick</Button> */}
      {/* <h2>{props.item.name}</h2>
      <h2>{props.item.description}</h2> */}
      <Button className="imageSlider">
        <img src={props.item.image} />
      </Button>
    </Paper>
  );
}

export default Slider;
