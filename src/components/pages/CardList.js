import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    console.log(results.data);
    data = results.data || [];
  }
  // console.log(data);
  return (
    <section className="section">
      <div className="events-center">
        {data.map((item) => (
          <Card key={item.id} event={item} />
        ))}
      </div>
    </section>
  );
}

export default CardList;
