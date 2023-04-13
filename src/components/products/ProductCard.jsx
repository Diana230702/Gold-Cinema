import React from "react";
import "../products/Products.css";

const res = [
  {
    img: "https://play-lh.googleusercontent.com/4F-WwVKAs56rT6DGSfu1-9sW4MqSjenlIUqWS1K_8iB25ktsHKXXScAwJonvwo7DuMA",
    name: "Sonic",
    price: "free",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png",
    name: "SpongeBob",
    price: "по подписке",
  },
  {
    img: "https://play-lh.googleusercontent.com/4F-WwVKAs56rT6DGSfu1-9sW4MqSjenlIUqWS1K_8iB25ktsHKXXScAwJonvwo7DuMA",
    name: "Sonic",
    price: "free",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png",
    name: "SpongeBob",
    price: "по подписке",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png",
    name: "SpongeBob",
    price: "по подписке",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png",
    name: "SpongeBob",
    price: "по подписке",
  },
  {
    img: "https://play-lh.googleusercontent.com/4F-WwVKAs56rT6DGSfu1-9sW4MqSjenlIUqWS1K_8iB25ktsHKXXScAwJonvwo7DuMA",
    name: "Sonic",
    price: "free",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_main_characters.png/370px-SpongeBob_SquarePants_main_characters.png",
    name: "SpongeBob",
    price: "по подписке",
  },
];

const ProductCard = () => {
  return (
    <div className="vvv">
      <div className="film-list">
        {res.map((item) => (
          <div className="productCard_card">
            <img className="productCard_img" src={item.img} alt="" />
            <p className="productCard_p">{item.name}</p>
            <p className="productCard_p">{item.price}</p>

            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
