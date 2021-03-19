import React from "react";

export default function Card(props) {
  const { event } = props;
  return (
    <div className="resultCard">
      <figure className="gallery-frame">
        <img className="event-image" src={event.image} alt={event.name} />
      
      <h4 className="bolder">{event.name}</h4>
      <span>
        <b>Date:</b>
        {event.date}
      </span>
      <span>
        <b>Time:</b>
        {event.time}
      </span>
      </figure>
    </div>
  );
}
