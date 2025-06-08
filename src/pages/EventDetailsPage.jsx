import React, { useEffect, useState } from "react";
import { API_BASE_BOOKINGS } from "../config/api";
import { API_BASE_EVENTS } from "../config/api";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${API_BASE_EVENTS}/${eventId}`);
        if (!res.ok) throw new Error("Event not found");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error("Error retrieving event:", err);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const booking = {
      eventId: event.id,
      firstName: form["first-name"].value,
      lastName: form["last-name"].value,
      email: form["email"].value,
      quantity: parseInt(form.quantity.value, 10),
    };

    try {
      const res = await fetch(API_BASE_BOOKINGS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });

      const resultText = await res.text();

      if (!res.ok) {
        console.error("Booking failed:", res.status, resultText);
        alert("Unable to book. Server responded with: " + resultText);
        return;
      }

      const result = JSON.parse(resultText);
      console.log("Booking success:", result);
      alert("Booking sent!");
    } catch (err) {
      console.error("Error booking:", err);
      alert("Something went wrong. Try again later.");
    }
  };

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="layout-wrapper">
      <div className="container">
        <main className="event-details-page">
          <section className="event-details">
            <h1>{event.title}</h1>
            <p><strong>Description:</strong> {event.description}</p>
            <p>
              <strong>Category:</strong> {event.category}
            </p>
            <p>
              <strong>Date:</strong> {new Date(event.start).toLocaleString()}
            </p>
            <p>
              <strong>Location:</strong> {event.location}
            </p>
            <p>
              <strong>Price:</strong> ${event.price}
            </p>
          </section>

          <form
            onSubmit={handleSubmit}
            className="form booking-form"
            noValidate
          >
            <header className="form__header">
              <h1 className="form__title">Book Your Spot</h1>
            </header>
            <div className="form-auth">
              <div className="form__group-horizontal">
                {/* First name */}
                <div className="form__group">
                  <label htmlFor="first-name" className="form__label">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    className="form__input"
                    type="text"
                    name="first-name"
                    required
                    placeholder="First name"
                  />
                </div>

                {/* Last name */}
                <div className="form__group">
                  <label htmlFor="last-name" className="form__label">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    className="form__input"
                    type="text"
                    name="last-name"
                    required
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="form__group-horizontal">
                {/* Email */}
                <div className="form__group">
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="form__input"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone number */}
                {/* <div className="form__group">
                <label htmlFor="phone" className="form__label">Phone Number</label>
                <input
                  id="phone"
                  className="form__input"
                  type="tel"
                  name="phone"
                  required
                  pattern="[\d\s\-]{6,20}"
                  placeholder="012-345 67 89"
                />
              </div> */}
              </div>

              <div className="form__group-horizontal">
                {/* Quantity */}
                <div className="form__group form__group--small">
                  <label htmlFor="quantity" className="form__label">
                    Tickets:{" "}
                  </label>
                  <input
                    id="quantity"
                    className="form__input form__input--quantity"
                    type="number"
                    name="quantity"
                    min="1"
                    max="10"
                    defaultValue="1"
                  />
                </div>

                {/* Submit */}
                <div className="form__action">
                  <button
                    type="submit"
                    className="form__submit btn btn-primary btn-large"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EventDetailsPage;
