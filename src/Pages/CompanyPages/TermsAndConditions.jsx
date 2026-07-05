import React from 'react';
import './CompanyPages.css'; 

const TermsAndConditions = () => {
  return (
    <section className="legal-page section container">
      <div className="legal-header">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to Sacred Nepal Tours & Travel. By booking a tour with us, you agree to the following Terms & Conditions. Please read them carefully before confirming your reservation.
        </p>
      </div>

      <div className="legal-content">
        <div className="legal-section">
          <h2><span>1.</span> Booking Confirmation</h2>
          <ul>
            <li>A booking is confirmed only after receiving the required deposit or full payment.</li>
            <li>All bookings are subject to availability.</li>
            <li>Sacred Nepal Tours & Travel reserves the right to decline any booking if necessary.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>2.</span> Payment Policy</h2>
          <ul>
            <li>A 20% non-refundable advance payment of the total tour cost is required at the time of booking to confirm your reservation.</li>
            <li>The remaining 80% balance must be paid before the commencement of the tour, unless otherwise agreed in writing by Sacred Nepal Tours & Travel.</li>
            <li>Bookings will only be confirmed after the advance payment has been received.</li>
            <li>Payments can be made via bank transfer, online payment, or other approved payment methods.</li>
            <li>Failure to pay the remaining balance on time may result in cancellation of the booking without a refund of the advance payment.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>3.</span> Cancellation Policy</h2>
          <ul>
            <li>Cancellation requests must be made in writing.</li>
            <li>Cancellation charges may apply depending on the cancellation date and reservations already made with hotels, transportation providers, or other suppliers.</li>
            <li>Any non-refundable expenses paid to third-party suppliers will be deducted from the refund amount.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>4.</span> Refund Policy</h2>
          <ul>
            <li>Refunds, where applicable, will be processed after deducting applicable cancellation charges and non-refundable costs.</li>
            <li>No refunds will be provided for unused services, missed activities, late arrivals, or early departures after the tour has started.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>5.</span> Changes to Itinerary</h2>
          <ul>
            <li>Sacred Nepal Tours & Travel reserves the right to modify the itinerary due to weather conditions, road closures, natural disasters, government regulations, flight cancellations, strikes, or other circumstances beyond our control.</li>
            <li>Any changes will be made in the best interest of the safety and comfort of our guests.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>6.</span> Travel Documents</h2>
          <ul>
            <li>Guests are responsible for ensuring they have a valid passport, visa, travel permits, and any other required travel documents before arrival.</li>
            <li>The company is not responsible for costs arising from incomplete or invalid travel documentation.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>7.</span> Travel Insurance</h2>
          <p>
            Comprehensive travel insurance covering medical expenses, accidents, emergency evacuation, trip cancellation, and personal belongings is strongly recommended for all travelers.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>8.</span> Health & Fitness</h2>
          <ul>
            <li>Travelers are responsible for ensuring they are physically fit for their chosen tour.</li>
            <li>Guests must inform Sacred Nepal Tours & Travel of any medical conditions, dietary requirements, or special needs before the tour begins.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>9.</span> Responsibility & Liability</h2>
          <ul>
            <li>Sacred Nepal Tours & Travel acts as an agent for hotels, airlines, transport operators, and other service providers.</li>
            <li>While every effort is made to ensure a safe and enjoyable trip, the company shall not be held liable for delays, injuries, accidents, loss, theft, damage, natural disasters, political unrest, or any events beyond its reasonable control.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>10.</span> Client Responsibilities</h2>
          <ul>
            <li>Guests are expected to respect local customs, cultures, religious sites, wildlife, and environmental regulations.</li>
            <li>Any damage caused by a guest to hotel property, vehicles, or equipment shall be the guest’s responsibility.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>11.</span> Prices</h2>
          <ul>
            <li>Tour prices are based on current transportation, accommodation, and operational costs.</li>
            <li>Sacred Nepal Tours & Travel reserves the right to adjust prices before booking confirmation due to significant changes in taxes, fuel prices, government regulations, or supplier costs.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2><span>12.</span> Force Majeure</h2>
          <p>
            Sacred Nepal Tours & Travel shall not be liable for delays, changes, or cancellations caused by events beyond its reasonable control, including but not limited to natural disasters, earthquakes, floods, pandemics, strikes, civil unrest, road blockages, or government restrictions.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>13.</span> Governing Law</h2>
          <p>
            These Terms & Conditions shall be governed by the laws of Nepal. Any disputes arising from these Terms & Conditions shall be subject to the jurisdiction of the competent courts of Nepal.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>14.</span> Acceptance</h2>
          <p>
            By confirming a booking with Sacred Nepal Tours & Travel, the client acknowledges that they have read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;