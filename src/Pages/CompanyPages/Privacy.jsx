import React from 'react';
import './CompanyPages.css'; 

const Privacy = () => {
  return (
    <section className="legal-page section container">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p>
          At Sacred Nepal Tours & Travel, we are committed to protecting your privacy and ensuring your personal information is handled responsibly.
        </p>
      </div>

      <div className="legal-content">
        <div className="legal-section">
          <h2><span>1.</span> Information Collection and Use</h2>
          <p>
            Personal information provided by guests will be used only for booking, operational, and customer service purposes. This ensures we can provide you with the best possible travel experience.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>2.</span> Third-Party Disclosure</h2>
          <p>
            We respect your privacy and do not sell or share your personal information with third parties, except where strictly required to provide travel services (such as booking flights, hotels, or permits) or to comply with applicable laws.
          </p>
        </div>

        <div className="legal-section">
          <h2><span>3.</span> Data Security</h2>
          <p>
            We take appropriate measures to ensure your personal and payment information is kept secure and protected from unauthorized access or disclosure during your transactions with Sacred Nepal Tours & Travel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;