import { Link } from "react-router-dom";
import React from "react";

const EventCard = ({ event }) => {
  
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return date.toLocaleString('en-US', options); };


  return (
    <Link to={`/events/${event.id}`} className="event-card__link" aria-label={"View details for ${event.name}"}>
      <article className="event-card">
        <img
          className="event-card__image"
          src="/images/placeholder-event.jpg"
          alt={`Image for ${event.name}`}
        />
        <span className="event-card__badge badge badge--category">
          {event.category}
        </span>

        <div className="event-card__body">
          <div className="event-card__main">
            <time className="event-card__date" dateTime={event.date}>
                {formatDate(event.start)}
            </time>
            <h3 className="event-card__title">{event.name}</h3>
          </div>

          <div className="event-card__footer">
            <p className="event-card__location">{event.location}</p>
            <data className="event-card__price">${event.price}</data>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default EventCard;
