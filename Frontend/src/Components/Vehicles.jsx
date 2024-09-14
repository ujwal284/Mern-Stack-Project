import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios";
import Car from "../../../Backend/model/car.model";

function Vehicles() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    const getCar = async () => {
      try {
        const res = await axios.get("http://localhost:4001/car");
        console.log(res.data);
        setCar(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCar();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            {" "}
            We're delighted to have you {""}
            <span className="text-pink-500">Here!:</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            minus magnam ea placeat iusto sapiente tempora, necessitatibus nulla
            aut expedita, unde est ducimus asperiores doloremque beatae eum
            laborum maiores praesentium. Vel cum accusantium corporis ex alias.
            Alias nam praesentium, nesciunt impedit, dolor, blanditiis
            accusantium fugiat asperiores explicabo ullam fuga molestiae.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {car.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Vehicles;
