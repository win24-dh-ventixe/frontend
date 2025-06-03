import { Link } from 'react-router-dom'
import React from 'react'
import styles from "./EventCard.module.scss";


const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`} className={styles.link}>
    <article className={`card {$styles.card}`}>
        <img
          className={styles.image}
          src="/images/placeholder-event.jpg"
          alt={`Image for ${event.name}`}
        />
        <span className="badge badge--category">{event.category}</span>

        <div className={styles.body}>
          <header className={styles.title}>
            <h3 className={styles.titleHeader}>{event.name}</h3>
            <p className={styles.titleLocation}>{event.location}</p>
          </header>

          <div className={styles.details}>
            <div className={styles.date}>
              <img src="/images/icons/calendar-grey.svg" alt="" aria-hidden="true" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <p className={styles.price}>{event.price} kr</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default EventCard