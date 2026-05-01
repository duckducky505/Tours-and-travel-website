import React, { useState } from 'react';
import {
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiOutlineAnnotation,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from 'react-icons/hi';
import { BiCheck } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';

import img1 from '../../assets/baoudha.jpg';
import img2 from '../../assets/annapurna.jpg';
import img3 from '../../assets/lumbini.jpg';
import img4 from '../../assets/paragliding.jpg';
import img5 from '../../assets/pokhara-highway.jpg';
import img6 from '../../assets/temple.jpg';
import img7 from '../../assets/trek.jpg';
import img8 from '../../assets/swing-by-peak.jpg';
import img9 from '../../assets/mountain_peak.jpg';

import './Quote.css';

const PACKAGES = [
  { value: 'kathmandu-valley-tour',     label: 'Vibrant Kathmandu Tour',       grade: 'Cultural & Heritage',   fees: '$350',    duration: '4 Days',  img: img1 },
  { value: 'annapurna-panorama-trek',   label: 'Annapurna Panorama Trek',       grade: 'Easy-Paced Trekking',   fees: '$630',    duration: '12 Days', img: img2 },
  { value: 'lumbini-pilgrimage',        label: 'Lumbini Buddhist Circuit',      grade: 'Pilgrimage & Spiritual',fees: '$650',    duration: '5 Days',  img: img3 },
  { value: 'sarangkot-paragliding',     label: 'Sarangkot Paragliding',         grade: 'Adventure',             fees: '$120',    duration: '1 Day',   img: img4 },
  { value: 'pokhara-highway-drive',     label: 'Scenic Highway Drive',          grade: 'Road Trip',             fees: '$60',     duration: '1 Day',   img: img5 },
  { value: 'pashupatinath-temple-tour', label: 'Pashupatinath Spiritual Tour',  grade: 'Religious',             fees: '$40',     duration: '1 Day',   img: img6 },
  { value: 'everest-base-camp-classic', label: 'Everest Base Camp Trek',        grade: 'Trekking Adventure',    fees: '$1,420',  duration: '14 Days', img: img7 },
  { value: 'cliff-kushma-swing',        label: 'Kushma Canyon Swing',           grade: 'Extreme Adventure',     fees: '$90',     duration: '1 Day',   img: img8 },
  { value: 'phewa-lake-boating',        label: 'Phewa Lake Boating',            grade: 'Relaxation',            fees: '$30',     duration: '1 Day',   img: img9 },
  { value: 'chitwan-jungle-safari',     label: 'Chitwan Wildlife Safari',       grade: 'Wildlife Adventure',    fees: '$200',    duration: '3 Days',  img: img6 },
  { value: 'everest-mountain-flight',   label: 'Everest Mountain Flight',       grade: 'Scenic Luxury',         fees: '$236',    duration: '1 Day',   img: img9 },
  { value: 'custom',                    label: 'Custom / Tailor-made Trip',     grade: 'Bespoke',               fees: 'On Request', duration: 'Flexible', img: null },
];

const STEPS = [
  { id: 1, icon: <HiOutlineClipboardList />, title: 'Package',  sub: 'Pick your adventure' },
  { id: 2, icon: <HiOutlineUser />,          title: 'Personal', sub: 'About you'            },
  { id: 3, icon: <MdFlightTakeoff />,        title: 'Travel',   sub: 'Dates & preferences'  },
];

const StepBadge = ({ item, current }) => {
  const active    = current === item.id;
  const completed = current > item.id;
  return (
    <div className={`qp-step ${active ? 'qp-step--active' : ''} ${completed ? 'qp-step--done' : ''}`}>
      <div className="qp-step__bubble">
        {completed ? <BiCheck /> : item.icon}
        {active && <span className="qp-step__ping" aria-hidden />}
      </div>
      <div className="qp-step__text">
        <span className="qp-step__label">Step 0{item.id}</span>
        <strong className="qp-step__title">{item.title}</strong>
        <em className="qp-step__sub">{item.sub}</em>
      </div>
    </div>
  );
};

const Field = ({ label, children, error }) => (
  <div className={`qp-field${error ? ' qp-field--error' : ''}`}>
    <label className="qp-field__label">{label}</label>
    {children}
    {error && <span className="qp-field__error">{error}</span>}
  </div>
);

const QuotePage = () => {
  const [step,      setStep]      = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [isError,   setIsError]   = useState(false);
  const [result,    setResult]    = useState('');

  const [fields, setFields] = useState({
    package:          '',
    first_name:       '',
    middle_name:      '',
    last_name:        '',
    phone:            '',
    email:            '',
    departure_city:   '',
    travellers:       '',
    departure_date:   '',
    return_date:      '',
    requirements:     '',
  });

  const [errors, setErrors] = useState({});

  const set = (name, value) => {
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }));
  };

  const validate = (s) => {
    const e = {};
    if (s === 1) {
      if (!fields.package)                               e.package     = 'Please select a package.';
    }
    if (s === 2) {
      if (!fields.first_name.trim())                     e.first_name  = 'First name is required.';
      if (!fields.last_name.trim())                      e.last_name   = 'Last name is required.';
      if (!fields.phone.trim())                          e.phone       = 'Phone number is required.';
      else if (fields.phone.replace(/\D/g,'').length<7)  e.phone       = 'Enter a valid phone number.';
      if (!fields.email.trim())                          e.email       = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(fields.email))       e.email       = 'Enter a valid email.';
    }
    if (s === 3) {
      if (!fields.departure_city.trim())                 e.departure_city = 'Departure city is required.';
      if (!fields.travellers || fields.travellers < 1)   e.travellers     = 'Enter number of travellers.';
      if (!fields.departure_date)                        e.departure_date = 'Departure date is required.';
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
    setResult('Sending your quote request…');

    const formData = new FormData();
    Object.entries(fields).forEach(([k,v]) => formData.append(k, v));
    formData.append('access_key', 'e2c2f621-23e3-4a36-b046-29918ac2eccd');

    try {
      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setIsError(false);
        setResult(`Your quote request has been sent! We'll be in touch within 24 hours.`);
        setFields({ package:'', first_name:'', middle_name:'', last_name:'', phone:'', email:'', departure_city:'', travellers:'', departure_date:'', return_date:'', requirements:'' });
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
  const selectedPkg = PACKAGES.find(p => p.value === fields.package) || null;

  return (
    <section className="qp section">

      {showPopup && (
        <div className="qp-popup" role="dialog" aria-modal="true">
          <div className="qp-popup__card">
            <div className={`qp-popup__icon ${isError ? 'qp-popup__icon--err' : 'qp-popup__icon--ok'}`}>
              {isError ? <HiOutlineXCircle /> : <HiOutlineCheckCircle />}
            </div>
            <h3 className="qp-popup__heading">{isError ? 'Submission Failed' : 'Quote Requested!'}</h3>
            <p className="qp-popup__body">{result}</p>
            <button type="button" className="btn" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="container">

        <div className="qp-header">
          <span className="qp-header__eyebrow">Free Quote</span>
          <h2 className="qp-header__title">Request Your Quote</h2>
          <p className="qp-header__sub">Choose a package, share your details, and receive a personalised quote within 24 hours.</p>
        </div>

        <div className="qp-card">

          {/* Sidebar */}
          <aside className="qp-sidebar">
            <div className="qp-sidebar__orb" aria-hidden />
            <div className="qp-sidebar__brand">
              <MdFlightTakeoff />
              <span>Nepal Expeditions</span>
            </div>
            <nav className="qp-sidebar__steps">
              {STEPS.map(item => <StepBadge key={item.id} item={item} current={step} />)}
            </nav>
            <div className="qp-meter">
              <svg viewBox="0 0 100 100" className="qp-meter__svg">
                <circle cx="50" cy="50" r="40" className="qp-meter__track" />
                <circle cx="50" cy="50" r="40" className="qp-meter__fill"
                  strokeDasharray={`${progress * 2.513} 251.3`} />
              </svg>
              <div className="qp-meter__label">
                <strong>{step}</strong><span>/3</span>
              </div>
            </div>
          </aside>

          <main className="qp-main">
            <div className="qp-bar" aria-hidden>
              <div className="qp-bar__fill" style={{ width: `${progress}%` }} />
            </div>

            <form className="qp-form" onSubmit={handleSubmit} noValidate>

              <div className={`qp-slide ${step === 1 ? 'qp-slide--show' : ''}`}>
                <h3 className="qp-form__heading">Select Your Package</h3>

                <Field label="Package *" error={errors.package}>
                  <select
                    className={`qp-input qp-input--select${errors.package ? ' qp-input--err' : ''}`}
                    name="package"
                    value={fields.package}
                    onChange={e => set('package', e.target.value)}
                  >
                    <option value="">— Choose a package —</option>
                    {PACKAGES.map(p => (
                      <option key={p.value} value={p.value}>
                        {p.label} — {p.fees} · {p.duration}
                      </option>
                    ))}
                  </select>
                </Field>

                {selectedPkg && (
                  <div className="qp-preview">
                    {selectedPkg.img && (
                      <div className="qp-preview__img">
                        <img src={selectedPkg.img} alt={selectedPkg.label} />
                      </div>
                    )}
                    <div className="qp-preview__body">
                      <span className="qp-preview__grade">{selectedPkg.grade}</span>
                      <strong className="qp-preview__name">{selectedPkg.label}</strong>
                      <div className="qp-preview__meta">
                        <span>{selectedPkg.duration}</span>
                        <span className="qp-preview__dot">·</span>
                        <span>{selectedPkg.fees}</span>
                      </div>
                    </div>
                  </div>
                )}

                <p className="qp-grid-label">All Packages — click to select</p>
                <div className="qp-pkg-grid">
                  {PACKAGES.map(pkg => (
                    <div
                      key={pkg.value}
                      className={`qp-pkg-card${fields.package === pkg.value ? ' qp-pkg-card--selected' : ''}`}
                      onClick={() => set('package', pkg.value)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && set('package', pkg.value)}
                    >
                      {pkg.img && (
                        <div className="qp-pkg-card__img">
                          <img src={pkg.img} alt={pkg.label} />
                        </div>
                      )}
                      <div className="qp-pkg-card__body">
                        <span className="qp-pkg-card__grade">{pkg.grade}</span>
                        <strong className="qp-pkg-card__name">{pkg.label}</strong>
                        <div className="qp-pkg-card__meta">
                          <span>{pkg.duration}</span>
                          <span>{pkg.fees}</span>
                        </div>
                      </div>
                      {fields.package === pkg.value && (
                        <span className="qp-pkg-card__check"><HiOutlineCheckCircle /></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`qp-slide ${step === 2 ? 'qp-slide--show' : ''}`}>
                <h3 className="qp-form__heading">Personal Information</h3>

                {/* Package reminder chip */}
                {selectedPkg && (
                  <div className="qp-chip-reminder">
                    <span>{selectedPkg.label}</span>
                    <span className="qp-chip-reminder__fee">{selectedPkg.fees}</span>
                  </div>
                )}

                <div className="qp-row qp-row--3">
                  <Field label="First Name *" error={errors.first_name}>
                    <div className={`qp-input-icon${errors.first_name ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineUser className="qp-input-icon__glyph" />
                      <input className="qp-input" type="text" name="first_name" placeholder="John"
                        value={fields.first_name} onChange={e => set('first_name', e.target.value)} />
                    </div>
                  </Field>
                  <Field label="Middle Name">
                    <div className="qp-input-icon">
                      <HiOutlineUser className="qp-input-icon__glyph" />
                      <input className="qp-input" type="text" name="middle_name" placeholder="Optional"
                        value={fields.middle_name} onChange={e => set('middle_name', e.target.value)} />
                    </div>
                  </Field>
                  <Field label="Last Name *" error={errors.last_name}>
                    <div className={`qp-input-icon${errors.last_name ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineUser className="qp-input-icon__glyph" />
                      <input className="qp-input" type="text" name="last_name" placeholder="Doe"
                        value={fields.last_name} onChange={e => set('last_name', e.target.value)} />
                    </div>
                  </Field>
                </div>

                <div className="qp-row qp-row--2">
                  <Field label="Phone Number *" error={errors.phone}>
                    <div className={`qp-input-icon${errors.phone ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlinePhone className="qp-input-icon__glyph" />
                      <input className="qp-input" type="tel" name="phone" placeholder="+977 98XXXXXXXX"
                        value={fields.phone} onChange={e => set('phone', e.target.value)} />
                    </div>
                  </Field>
                  <Field label="Email Address *" error={errors.email}>
                    <div className={`qp-input-icon${errors.email ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineMail className="qp-input-icon__glyph" />
                      <input className="qp-input" type="email" name="email" placeholder="john@example.com"
                        value={fields.email} onChange={e => set('email', e.target.value)} />
                    </div>
                  </Field>
                </div>
              </div>

              <div className={`qp-slide ${step === 3 ? 'qp-slide--show' : ''}`}>
                <h3 className="qp-form__heading">Travel Preferences</h3>

                {selectedPkg && (
                  <div className="qp-chip-reminder">
                    <span>{selectedPkg.label}</span>
                    <span className="qp-chip-reminder__fee">{selectedPkg.fees} · {selectedPkg.duration}</span>
                  </div>
                )}

                <div className="qp-row qp-row--2">
                  <Field label="Departure City *" error={errors.departure_city}>
                    <div className={`qp-input-icon${errors.departure_city ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineLocationMarker className="qp-input-icon__glyph" />
                      <input className="qp-input" type="text" name="departure_city"
                        placeholder="e.g. New York, London…"
                        value={fields.departure_city} onChange={e => set('departure_city', e.target.value)} />
                    </div>
                  </Field>
                  <Field label="Number of Travellers *" error={errors.travellers}>
                    <div className={`qp-input-icon${errors.travellers ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineUsers className="qp-input-icon__glyph" />
                      <input className="qp-input" type="number" name="travellers"
                        placeholder="2" min="1" max="50"
                        value={fields.travellers} onChange={e => set('travellers', e.target.value)} />
                    </div>
                  </Field>
                </div>

                <div className="qp-row qp-row--2">
                  <Field label="Departure Date *" error={errors.departure_date}>
                    <div className={`qp-input-icon${errors.departure_date ? ' qp-input-icon--err' : ''}`}>
                      <HiOutlineCalendar className="qp-input-icon__glyph" />
                      <input className="qp-input" type="date" name="departure_date"
                        value={fields.departure_date} onChange={e => set('departure_date', e.target.value)} />
                    </div>
                  </Field>
                  <Field label="Return Date">
                    <div className="qp-input-icon">
                      <HiOutlineCalendar className="qp-input-icon__glyph" />
                      <input className="qp-input" type="date" name="return_date"
                        value={fields.return_date} onChange={e => set('return_date', e.target.value)} />
                    </div>
                  </Field>
                </div>

                <Field label="Special Requirements">
                  <div className="qp-input-icon qp-input-icon--top">
                    <HiOutlineAnnotation className="qp-input-icon__glyph" />
                    <textarea className="qp-input" name="requirements" rows={5}
                      placeholder="Dietary needs, fitness level, accommodation preferences, medical conditions, special occasions…"
                      value={fields.requirements} onChange={e => set('requirements', e.target.value)} />
                  </div>
                </Field>
              </div>

              <div className="qp-form__footer">
                {step > 1 && (
                  <button type="button" className="qp-btn-back" onClick={prev}>
                    <HiChevronLeft /> Back
                  </button>
                )}
                {step < 3 ? (
                  <button type="button" className="btn qp-btn-next" onClick={next}>
                    Continue <HiChevronRight />
                  </button>
                ) : (
                  <button type="submit" className="btn qp-btn-submit">
                    Request My Quote ✦
                  </button>
                )}
              </div>

            </form>
          </main>
        </div>

         <div className="qp-trust">
          {[
            { icon: '🕐', text: 'Response within 24 hours' },
            { icon: '🔒', text: 'No payment required' },
            { icon: '🌍', text: '500+ expeditions organised' },
          ].map(item => (
            <div key={item.text} className="qp-trust__item">
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuotePage;