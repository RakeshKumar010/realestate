import React from "react";
import HeaderImg from "../../assets/img/headerimg.jpg";
import Card from "../Card";
const Featured = () => {
    
  const data = [
    {
      img: HeaderImg,
      launch: "Lounch",
      price: "3000000",
      title: "Studia Apartment",
      location: "Pune,India",
      size: "3bhk",
      sqrt: "1776",
    },
    {
      img: HeaderImg,
      launch: "Lounch",
      price: "7900000",
      title: "Galliard Homes Apartmentt",
      location: "Pune,India",
      size: "3bhk",
      sqrt: "2000",
    },
    {
      img: HeaderImg,
      launch: "Lounch",
      price: "2000000",
      title: "Tine studio ",
      location: "Pune,India",
      size: "3bhk",
      sqrt: "1600",
    },
  ];
  return (
    <div className="p-20 px-10 flex flex-col gap-5 ">
      <p className="text-4xl font-semibold text-center">Featured Apartment</p>
      <p className="text-center font-semibold text-gray-400">
        The Most Frequently Searched and most popular apartment of the
        applicatin will be in the list
      </p>
      <div className="flex items-center flex-wrap justify-between ">
        {data.map((value, Index) => {
          return <Card key={Index} value={value} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
