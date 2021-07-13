import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="container-fluid" className="coro">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="home_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/GW_1500x600-min._CB406905169_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="home_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="home_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OPPO/A74/SUD_June/V3/D24159374_IN_WLD_SUD_June_OPPO_A74_DesktopTallHero_1500x600._CB666814121_.jpg"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="home_img"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="home_row">
          <Product
            id={1}
            title="Matrix Opti.care Smooth Straight Professional Ultra Smoothing Shampoo and Conditioner Combo (200ml + 98g)"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81WeZlNZqhL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={3}
            title="Lenovo Ideapad L340 Intel Core i5 9th Gen 15.6” FHD Gaming Laptop (8GB/1TB HDD/Windows 10/NVIDIA GeForce GTX 10503GB GDDR5/Granite Black/2.19kg),81LK01QTIN"
            price={502.88}
            image="https://images-na.ssl-images-amazon.com/images/I/81oeSUav6lL._SX679_.jpg"
            rating={5}
          />
          <Product
            id={3}
            title="Skybags Trooper 55 Cms Polycarbonate Blue Hardsided Cabin Luggage"
            price={222.88}
            image="https://images-na.ssl-images-amazon.com/images/I/71j-llSCXyS._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={2}
            title="boAt Rockerz 550 Over-Ear Wireless Headphone with Ergonomic Aesthetics, Plush Padded Earcups, Immersive Audio, Bluetooth v5.0 & Upto 20H Playback (Black)"
            price={209.99}
            image="https://images-na.ssl-images-amazon.com/images/I/710XhG8bO3L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={4}
            title="OPPO F19 Pro (Fluid Black, 8GB RAM, 128GB Storage)"
            price={500.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/712PBW8cGBL._SL1500_.jpg "
          />
          <Product
            id={5}
            title="LG 668 L Wi-Fi Inverter Side-by-Side Refrigerator (GC-X247CQAV, Matt Black)"
            price={2000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/615TKQmb6LL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id={5}
            title="New Apple iPhone 12 Pro Max (256GB) - Silver"
            price={1299.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71umuN8XVeL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
            id={6}
            rating={4}
            price={480.52}
            title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
