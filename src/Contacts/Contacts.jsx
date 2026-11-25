import { useState } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';

const contactRows = [
  { label: 'EMAIL', value: 'sedillozandro720@gmail.com', href: 'mailto:sedillozandro720@gmail.com' },
  { label: 'PHONE', value: '+63 9770311641', href: 'tel:+639770311641' },
  { label: 'LOCATION', value: 'Cubao, Quezon City' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/zandro-miguel-sedillo', href: 'https://www.linkedin.com/in/zandro-miguel-sedillo' },
  { label: 'GITHUB', value: 'github.com/ZSedillo', href: 'https://github.com/ZSedillo' },
  { label: 'ITCH.IO', value: 'zanduro.itch.io', href: 'https://zanduro.itch.io' },
];

const Contacts = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [formData, setFormData] = useState({ subject: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) return { isValid: false, message: 'Email is required.' };
    if (!emailRegex.test(email)) return { isValid: false, message: 'Please enter a valid email address.' };
    return { isValid: true, message: '' };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' && emailTouched) {
      if (value.length === 0) {
        setEmailError('');
      } else {
        const validation = validateEmail(value);
        setEmailError(validation.isValid ? '' : validation.message);
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (formData.email.length > 0) {
      const validation = validateEmail(formData.email);
      setEmailError(validation.isValid ? '' : validation.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      setEmailError(emailValidation.message);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'a0376732-b681-486f-9884-5cee5fddcf28');
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ subject: '', email: '', message: '' });
        setEmailError('');
        setEmailTouched(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled =
    isSubmitting || !formData.subject || !formData.email || !formData.message || Boolean(emailError);

  return (
    <section id="Contacts" className="section-wrap">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-kicker">06 / Contact</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to conversations about software engineering, game development, or collaborations.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '0.95fr 1.15fr',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Direct Contact Details */}
          <div className="card" style={{ padding: isMobile ? '20px' : '24px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  style={{
                    paddingBottom: '12px',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--accent)',
                      marginBottom: '2px',
                    }}
                  >
                    {row.label}
                  </div>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        wordBreak: 'break-word',
                      }}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Message Form */}
          <div className="card" style={{ padding: isMobile ? '20px' : '26px' }}>
            <h3
              style={{
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '18px',
              }}
            >
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div
                style={{
                  backgroundColor: 'var(--status-live-tint)',
                  border: '1px solid rgba(63, 185, 80, 0.3)',
                  color: 'var(--status-live)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '16px',
                  fontSize: '13px',
                }}
              >
                Message sent. Thanks for reaching out.
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                style={{
                  backgroundColor: 'var(--accent-tint)',
                  border: '1px solid var(--accent-border)',
                  color: 'var(--accent)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '16px',
                  fontSize: '13px',
                }}
              >
                Something went wrong. Please try again or email directly.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="contact-subject" className="field-label">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry or hello"
                  className="field-input"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="field-label">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  placeholder="you@example.com"
                  className="field-input"
                />
                {emailError && (
                  <p style={{ color: 'var(--accent)', fontSize: '12px', marginTop: '6px' }}>
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="field-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message..."
                  className="field-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <button type="submit" disabled={isSubmitDisabled} className="btn-primary" style={{ width: '100%' }}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
