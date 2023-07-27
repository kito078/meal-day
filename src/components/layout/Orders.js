import React from "react";
import Cafe from "../../images/cafe.png";
import Foke from "../../images/fork.png";
import Skuter from "../../images/skuter.png";
import Wifi from "../../images/wifi.png";
import Order from "./Order";

const items = [
  {
    img: Wifi,
    num: "1",
    text: "Choose your location",
  },
  {
    img: Foke,
    num: "2",
    text: "Choose restaurant",
  },
  {
    img: Cafe,
    num: "3",
    text: "Make your order",
  },
  {
    img: Skuter,
    num: "4",
    text: "Food is on the way",
  },
];

function Orders() {
  return (
    <div className="bg-softBlueWhite">
      <div className="container mx-auto text-center my-32">
        <h1 class="mb-6 text-5xl text-slate-700 uppercase font-semibold text-center leading-tight md:text-6xl lg:text-7xl">
          How to Order?
        </h1>
        <p className="text-slate-500">Follow the Steps</p>
      </div>
      <div className=" mx-auto text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {items.map((item) => (
          <Order item={item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
