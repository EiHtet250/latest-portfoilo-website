import { useState } from 'react';
import { contact } from '../data/portfolio.js';
import Icon from './Icon.jsx';

const empty = { name: '', email: '', message: '' };

// Sends to Formspree when `contact.formEndpoint` is set; otherwise opens the visitor's email app.
export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!contact.formEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name} (${values.email})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error('Request failed');
      setValues(empty);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" value={values.name} onChange={update} placeholder="Enter your name" required />
      </label>
      <label>
        Email address
        <input name="email" type="email" value={values.email} onChange={update} placeholder="you@example.com" required />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="4"
          value={values.message}
          onChange={update}
          placeholder="Write your message here..."
          required
        />
      </label>

      <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'} <Icon name="arrow" size={18} />
      </button>

      <p className="form-status" role="status">
        {status === 'sent' && 'Thank you! Your message has been sent.'}
        {status === 'error' && `Something went wrong. Please email me at ${contact.email}.`}
      </p>
    </form>
  );
}
