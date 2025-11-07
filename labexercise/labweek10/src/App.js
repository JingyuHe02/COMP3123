import React, { useState } from 'react';

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Nova Scotia',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Northwest Territories',
  'Nunavut',
  'Yukon'
];

export default function App() {
  const [form, setForm] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <main className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="grid grid-2">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="field">
          <label>Address</label>
          <input
            type="text"
            name="address1"
            placeholder="1234 Main St"
            value={form.address1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={form.address2}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-3">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label>Province</label>
            <select
              name="province"
              value={form.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              {provinces.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <label className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
          />
          <span>Agree Terms &amp; Condition?</span>
        </label>

        <button className="btn" type="submit">Submit</button>

        {submitted && (
          <section className="result-box">
            <p><span className="label">Email:</span> {submitted.email}</p>
            <p><span className="label">Full Name:</span> {submitted.fullName}</p>
            <p><span className="label">Address:</span> {submitted.address1}</p>
            <p><span className="label">City:</span> {submitted.city}</p>
            <p><span className="label">Province:</span> {submitted.province}</p>
            <p><span className="label">Postal Code:</span> {submitted.postalCode}</p>
          </section>
        )}
      </form>
    </main>
  );
}
