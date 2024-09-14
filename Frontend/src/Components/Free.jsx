import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";

function Free() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await axios.get("http://localhost:4001/car");
        console.log(res.data);

        setCar(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getCar();
  }, []);

  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
      <div className="max-w-screen-2xl  mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Vehicles</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            perferendis ab quae delectus quasi iure itaque tempora vel molestias
            praesentium, sit quo ex animi recusandae inventore ratione
            accusantium.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {car.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Free;
