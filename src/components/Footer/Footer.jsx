import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footerMainContainer">
        <div class="footerDataContainer">
          <div class="footerInnerContainer">
            <div class="about-us">
              <div class="footHeader">About Us</div>
              <div class="footBody">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div class="fotLinks">
              <div class="footHeader" style={{ marginLeft: "30%" }}>
                Links
              </div>
              <div class="footBody">
                <ul class="links-list">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                  <li>
                    <a>Link 3</a>
                  </li>
                  <li>
                    <a>Link 4</a>
                  </li>
                  <li>
                    <a>Link 5</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="fotLinks">
              <div class="footHeader">Categories</div>
              <div class="footBody">
                <ul class="links-list">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                  <li>
                    <a>Link 3</a>
                  </li>
                  <li>
                    <a>Link 4</a>
                  </li>
                  <li>
                    <a>Link 5</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
