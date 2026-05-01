import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  HiOutlineUser, HiOutlineMail, HiOutlineCash,
  HiChevronRight, HiChevronLeft,
  HiOutlineCheckCircle, HiOutlineXCircle,
} from 'react-icons/hi';
import { BiWorld, BiHotel, BiMessageDetail, BiCheck } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';
import './TailorPage.css';

const STEPS = [
  { id: 1, title: 'Personal',    sub: 'Who you are',   icon: <HiOutlineUser /> },
  { id: 2, title: 'Destination', sub: 'Where & when',  icon: <BiWorld /> },
  { id: 3, title: 'Comfort',     sub: 'Final touches', icon: <BiHotel /> },
];

const DESTINATIONS = [
  'Everest Region', 'Annapurna Circuit', 'Pokhara Valley',
  'Langtang Valley', 'Mustang Kingdom',
];

const CONTACT_MODES = ['Email', 'WhatsApp', 'Phone'];
const STAR_LABELS   = { 3: 'Comfort', 4: 'Superior', 5: 'Luxury' };

const StepBadge = ({ item, current }) => {
  const active    = current === item.id;
  const completed = current > item.id;
  return (
    <div className={`tp-step ${active ? 'tp-step--active' : ''} ${completed ? 'tp-step--done' : ''}`}>
      <div className="tp-step__bubble">
        {completed ? <BiCheck /> : item.icon}
        {active && <span className="tp-step__ping" aria-hidden />}
      </div>
      <div className="tp-step__text">
        <span className="tp-step__label">Step 0{item.id}</span>
        <strong className="tp-step__title">{item.title}</strong>
        <em className="tp-step__sub">{item.sub}</em>
      </div>
    </div>
  );
};

const Field = ({ label, children, error }) => (
  <div className={`tp-field${error ? ' tp-field--error' : ''}`}>
    <label className="tp-field__label">{label}</label>
    {children}
    {error && <span className="tp-field__error">{error}</span>}
  </div>
);

const TailorPage = () => {
  const [step,      setStep]      = useState(1);
  const [result,    setResult]    = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isError,   setIsError]   = useState(false);

  const [fields, setFields] = useState({
    first_name:     '',
    middle_name:    '',
    last_name:      '',
    email:          '',
    phone:          '',
    contact_method: 'Email',
    destination:    '',
    arrival_date:   '',
    departure_date: '',
    budget:         '',
    accommodation:  '',
    message:        '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const set = (name, value) => {
    setFields(f => ({ ...f, [name]: value }));
    // clear error on change
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  // ── Per-step validation ───────────────────────────────────
  const validate = (s) => {
    const e = {};
    if (s === 1) {
      if (!fields.first_name.trim())               e.first_name = 'First name is required.';
      if (!fields.last_name.trim())                e.last_name  = 'Last name is required.';
      if (!fields.email.trim())                    e.email      = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email      = 'Enter a valid email.';
      if (!fields.phone.trim())                              e.phone = 'Phone number is required.';
      else if (fields.phone.replace(/\D/g, '').length < 7)  e.phone = 'Enter a valid phone number.';
    }
    if (s === 2) {
      if (!fields.destination)          e.destination = 'Please select a destination.';
      if (!fields.budget || fields.budget < 100)
                                        e.budget      = 'Enter a budget of at least $100.';
    }
    if (s === 3) {
      if (!fields.accommodation)        e.accommodation = 'Please choose an accommodation tier.';
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep(s => s + 1);
  };

  const prev = () => { setErrors({}); setStep(s => s - 1); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e3 = validate(3);
    if (Object.keys(e3).length) { setErrors(e3); return; }

    setResult('Sending your itinerary to our team…');

    const formData = new FormData();
    Object.entries(fields).forEach(([k, v]) => formData.append(k, v));
    formData.append('access_key', '6a4a939a-9f42-4015-a215-9973feb3dad5');

    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setIsError(false);
        setResult('Your trip plan has been sent successfully!');
        setFields({
          first_name:'', middle_name:'', last_name:'', email:'',
          phone:'', contact_method:'Email', destination:'', arrival_date:'',
          departure_date:'', budget:'', accommodation:'', message:'',
        });
        setStep(1);
      } else {
        setIsError(true);
        setResult(data.message || 'Something went wrong.');
      }
    } catch {
      setIsError(true);
      setResult('Network error. Please try again later.');
    }
    setShowPopup(true);
  };

  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <section className="tp section">

      {showPopup && (
        <div className="tp-popup" role="dialog" aria-modal="true">
          <div className="tp-popup__card" data-aos="zoom-in">
            <div className={`tp-popup__icon ${isError ? 'tp-popup__icon--err' : 'tp-popup__icon--ok'}`}>
              {isError ? <HiOutlineXCircle /> : <HiOutlineCheckCircle />}
            </div>
            <h3 className="tp-popup__heading">{isError ? 'Submission Failed' : 'Plan Received!'}</h3>
            <p className="tp-popup__body">{result}</p>
            <button type="button" className="btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="container">

        <div className="tp-header" data-aos="fade-up">
          <span className="tp-header__eyebrow">Itinerary Architect</span>
          <h2 className="tp-header__title">Design Your Perfect Trip</h2>
          <p className="tp-header__sub">Tell us your dream — we'll craft every detail.</p>
        </div>

        <div className="tp-card" data-aos="fade-up" data-aos-delay="120">

          <aside className="tp-sidebar">
            <div className="tp-sidebar__orb" aria-hidden />
            <div className="tp-sidebar__brand">
              <MdFlightTakeoff />
              <span>Nepal Expeditions</span>
            </div>
            <nav className="tp-sidebar__steps">
              {STEPS.map(item => <StepBadge key={item.id} item={item} current={step} />)}
            </nav>
            <div className="tp-meter">
              <svg viewBox="0 0 100 100" className="tp-meter__svg">
                <circle cx="50" cy="50" r="40" className="tp-meter__track" />
                <circle cx="50" cy="50" r="40" className="tp-meter__fill"
                  strokeDasharray={`${progress * 2.513} 251.3`} />
              </svg>
              <div className="tp-meter__label">
                <strong>{step}</strong><span>/3</span>
              </div>
            </div>
          </aside>

          {/* Form area */}
          <main className="tp-main">
            <div className="tp-bar" aria-hidden>
              <div className="tp-bar__fill" style={{ width: `${progress}%` }} />
            </div>

            <form className="tp-form" onSubmit={handleSubmit} noValidate>
              <div className={`tp-slide ${step === 1 ? 'tp-slide--show' : ''}`}>
                <h3 className="tp-form__heading">Tell us who you are</h3>
                <div className="tp-row tp-row--3">
                  <Field label="First Name *" error={errors.first_name}>
                    <input className={`tp-input${errors.first_name ? ' tp-input--err' : ''}`}
                      type="text" name="first_name" placeholder="John"
                      value={fields.first_name}
                      onChange={e => set('first_name', e.target.value)} />
                  </Field>
                  <Field label="Middle Name">
                    <input className="tp-input" type="text" name="middle_name" placeholder="Optional"
                      value={fields.middle_name}
                      onChange={e => set('middle_name', e.target.value)} />
                  </Field>
                  <Field label="Last Name *" error={errors.last_name}>
                    <input className={`tp-input${errors.last_name ? ' tp-input--err' : ''}`}
                      type="text" name="last_name" placeholder="Doe"
                      value={fields.last_name}
                      onChange={e => set('last_name', e.target.value)} />
                  </Field>
                </div>
                <Field label="Email Address *" error={errors.email}>
                  <div className={`tp-input-icon${errors.email ? ' tp-input-icon--err' : ''}`}>
                    <HiOutlineMail className="tp-input-icon__glyph" />
                    <input className="tp-input" type="email" name="email"
                      placeholder="john@example.com"
                      value={fields.email}
                      onChange={e => set('email', e.target.value)} />
                  </div>
                </Field>
                <Field label="Phone Number *" error={errors.phone}>
                  <div className={`tp-input-icon${errors.phone ? ' tp-input-icon--err' : ''}`}>
                    <span className="tp-input-icon__glyph tp-input-icon__glyph--text">+</span>
                    <input className="tp-input" type="tel" name="phone"
                      placeholder="e.g. +977 98XXXXXXXX"
                      value={fields.phone}
                      onChange={e => set('phone', e.target.value)} />
                  </div>
                </Field>
                <Field label="Preferred Contact">
                  <div className="tp-chips">
                    {CONTACT_MODES.map(mode => (
                      <label key={mode} className="tp-chip">
                        <input type="radio" name="contact_method" value={mode}
                          checked={fields.contact_method === mode}
                          onChange={() => set('contact_method', mode)} />
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                </Field>
              </div>

              {/* ── Step 2 ───────────────────────────────── */}
              <div className={`tp-slide ${step === 2 ? 'tp-slide--show' : ''}`}>
                <h3 className="tp-form__heading">Where &amp; When?</h3>
                <Field label="Dream Destination *" error={errors.destination}>
                  <select className={`tp-input tp-input--select${errors.destination ? ' tp-input--err' : ''}`}
                    name="destination"
                    value={fields.destination}
                    onChange={e => set('destination', e.target.value)}>
                    <option value="">Select a region</option>
                    {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </Field>
                <div className="tp-row tp-row--2">
                  <Field label="Arrival Date">
                    <input className="tp-input" type="date" name="arrival_date"
                      value={fields.arrival_date}
                      onChange={e => set('arrival_date', e.target.value)} />
                  </Field>
                  <Field label="Departure Date">
                    <input className="tp-input" type="date" name="departure_date"
                      value={fields.departure_date}
                      onChange={e => set('departure_date', e.target.value)} />
                  </Field>
                </div>
                <Field label="Budget (USD) *" error={errors.budget}>
                  <div className={`tp-input-icon${errors.budget ? ' tp-input-icon--err' : ''}`}>
                    <HiOutlineCash className="tp-input-icon__glyph" />
                    <input className="tp-input" type="number" name="budget"
                      placeholder="1500" min="100"
                      value={fields.budget}
                      onChange={e => set('budget', e.target.value)} />
                  </div>
                </Field>
              </div>

              {/* ── Step 3 ───────────────────────────────── */}
              <div className={`tp-slide ${step === 3 ? 'tp-slide--show' : ''}`}>
                <h3 className="tp-form__heading">Final Touches</h3>
                <Field label="Accommodation Category *" error={errors.accommodation}>
                  <div className="tp-stars">
                    {[3, 4, 5].map(star => (
                      <label key={star} className="tp-star">
                        <input type="radio" name="accommodation"
                          value={`${star} Star`}
                          checked={fields.accommodation === `${star} Star`}
                          onChange={() => set('accommodation', `${star} Star`)} />
                        <div className="tp-star__card">
                          <span className="tp-star__glyphs">{'★'.repeat(star)}</span>
                          <strong className="tp-star__name">{STAR_LABELS[star]}</strong>
                          <span className="tp-star__sub">{star} Star</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </Field>
                <Field label="Special Requests">
                  <div className="tp-input-icon tp-input-icon--top">
                    <BiMessageDetail className="tp-input-icon__glyph" />
                    <textarea className="tp-input" name="message" rows={4}
                      placeholder="Dietary needs, honeymoon setups, accessibility requirements…"
                      value={fields.message}
                      onChange={e => set('message', e.target.value)} />
                  </div>
                </Field>
              </div>

              <div className="tp-form__footer">
                {step > 1 && (
                  <button type="button" className="tp-btn-back" onClick={prev}>
                    <HiChevronLeft /> Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" className="btn tp-btn-next" onClick={next}>
                    Continue <HiChevronRight />
                  </button>
                ) : (
                  <button type="submit" className="btn tp-btn-submit">
                    Send My Plan
                  </button>
                )}
              </div>

            </form>
          </main>
        </div>
      </div>
    </section>
  );
};

export default TailorPage;