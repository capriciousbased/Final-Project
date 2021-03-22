import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const { data: event } = useFetch(
    "https://motivity-event-api.herokuapp.com/events/" + id
  );

  return (
    <div className="event-details">
      {event && (
        <>
          <img
            className="singleEvent-image"
            src={event.image}
            alt={event.name}
          />
          <div className="event-info">
            <h4 className="bolder">{event.name}</h4>
            <span>
              <b>Date:</b>
              {event.date}
            </span>
            <span>
              <b>Time:</b>
              {event.time}
            </span>
          </div>

          <div className="event-description">{event.description}</div>
        </>
      )}
    </div>
  );
}

export default EventDetails;
