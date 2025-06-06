import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // TODO: Hämta riktig data från backend
    const fetchEvent = async () => {
      // Här kan du byta till en riktig API-anrop när du har det
      const mockEvents = [
        {
          id: "1",
          name: "Trappramlarn Fest",
          category: "Music",
          date: "2025-07-11T17:00:00",
          location: "Etern",
          price: 299,
        },
        // Lägg till fler testevent om du vill
      ];
      const found = mockEvents.find((e) => e.id === eventId);
      setEvent(found);
    };

    fetchEvent();
  }, [eventId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking sent (placeholder)");
  };

  if (!event) return <p>Loading event...</p>;

  return (
    <div className="layout-wrapper">
    <div className="container">
      <main className="event-details-page">

        <section className="event-details">
          <h1>{event.name}</h1>
          <p><strong>Category:</strong> {event.category}</p>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Price:</strong> ${event.price}</p>
        </section>


        <form onSubmit={handleSubmit} className="form booking-form" noValidate>
          <header className="form__header">
            <h1 className="form__title">Book Your Spot</h1>
          </header>      
          <div className="form-auth">

            <div className="form__group-horizontal">
              {/* First name */}
              <div className="form__group">
                <label htmlFor="first-name" className="form__label">First Name</label>
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
                <label htmlFor="last-name" className="form__label">Last Name</label>
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
                <label htmlFor="email" className="form__label">Email Address</label>
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
              <div className="form__group">
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
              </div>
            </div>
              
            <div className="form__group-horizontal">
              {/* Quantity */}
              <div className="form__group form__group--small">
                <label htmlFor="quantity" className="form__label">Tickets: </label>              
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
                <button type="submit" className="form__submit btn btn-primary btn-large">Book</button>
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