import React from "react";

function Order({ item }) {
  const { img, num, text } = item;
  return (
    <div className="flex flex-col items-center my-20">
      <img className="w-40 mx-auto" src={img} alt="" />
      <h3 className="flex items-center justify-center text-3xl bg-red-500 w-20 h-20 my-12  rounded-full text-softBlueWhite">
        {num}
      </h3>
      <p className="w-60 text-slate-600">{text}</p>
    </div>
  );
}

export default Order;
