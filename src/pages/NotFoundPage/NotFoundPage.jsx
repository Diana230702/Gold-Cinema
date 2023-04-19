import React from "react";
import "../NotFoundPage/NotFountPage.css";
import { useNavigate } from "react-router";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
        <h1 className="text-center ">404</h1>
      </div>

      <div className="contant_box_404">
        <h3 className="h2">Страница не найдена</h3>

        <p>Такой страницы не существут, или она на другом пути</p>

        <p onClick={(e) => navigate("/")} className="link_404">
          Go to Home
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
