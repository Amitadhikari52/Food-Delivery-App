// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="header-slide">
          <img
            src="https://img.freepik.com/premium-vector/paneer-skewers-vector_953932-4318.jpg?ga=GA1.2.462622986.1716905857&semt=ais_user"
            alt="Burger"
            className="header-image"
          />
          <div className="header-contents">
            <h2>Discover new flavors</h2>
            <p>
              Join us to discover new and exciting flavors that will tantalize
              your taste buds.
            </p>
            <button>Explore Now</button>
          </div>
        </div>
        <div className="header-slide">
          <img
            src="https://img.freepik.com/premium-photo/indian-food-chicken-masala-curry-with-rice-vegetables_438099-26487.jpg?ga=GA1.2.462622986.1716905857&semt=sph"
            alt="Burger"
            className="header-image"
          />
          <div className="header-contents">
            <h2>Experience culinary excellence</h2>
            <p>
              Experience the best in culinary excellence with our expertly
              crafted dishes.
            </p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="header-slide">
          <img
            src="https://img.freepik.com/premium-photo/momo-steamed-dumpling-with-spice-traditional-nepali-food_958297-5287.jpg?ga=GA1.2.462622986.1716905857&semt=sph"
            alt="Burger"
            className="header-image"
          />
          <div className="header-contents">
            <h2>New Seasonal Menu</h2>
            <p>
              Our new seasonal menu is here! Enjoy fresh and delicious dishes
              made with the finest seasonal ingredients.
            </p>
            <button>Check It Out</button>
          </div>
        </div>
        <div className="header-slide">
          <img
            src="https://img.freepik.com/premium-photo/indian-traditional-food-biryani-with-chicken-basmati-rice-bowl_1003277-1966.jpg?ga=GA1.2.462622986.1716905857&semt=sph"
            alt="Burger"
            className="header-image"
          />
          <div className="header-contents">
            <h2>Special Offers</h2>
            <p>
              Don't miss out on our special offers. Great deals on your favorite
              dishes.
            </p>
            <button>View Offers</button>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default Header;
