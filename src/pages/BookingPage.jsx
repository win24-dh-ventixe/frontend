import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
const { eventId } = useParams();

const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Skicka bokningsdata till API
    alert("Booking sent (placeholder)");
};

return (
    <main className="booking-page">
        {/* <div className="container"> */}
        <form className="booking-page__form" onSubmit={handleSubmit}>
            <h1 className="booking-page__title">Book Event</h1>

            <p className="booking-page__event-id">Event ID: {eventId}</p>

            <label className="booking-page__label">
                Your Name
                <input
                    type="text"
                    name="name"
                    required
                    className="booking-page__input"
                />
            </label>

            <label className="booking-page__label">
                Number of tickets
                <input
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="booking-page__input"
                />
            </label>

            <button type="submit" className="booking-page__button">
                Book
            </button>
        </form>
           {/* </div> */}
    </main>
    );
};

export default BookingPage;
