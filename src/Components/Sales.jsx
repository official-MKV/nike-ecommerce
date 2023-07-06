import React from "react";
import Title from "./utils/Title";
import Card from "./utils/Card";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  console.log(title);
  console.log("Length of items: ", items.length);

  return (
    <div className="nike-container">
      <Title title={title} />
      <div
        className={`grid items-center justify-items-center grid-cols-4
      xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
      gap-7 lg:gap-5 mt-7 ${
        ifExists
          ? "grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7"
      }`}
      >
        {items?.map((val, i) => {
          return <Card {...val} ifExists={ifExists} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Sales;
