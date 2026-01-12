import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'Hidráulica'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'Hidráulica'
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contáctanos</h1>
          <p className="page-subtitle">
            Estamos listos para atender tus necesidades y ofrecerte la mejor solución
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="info-card">
              <div className="info-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3>Ubicación</h3>
              <p>Ciudad de México<br/>México, C.P. 01234</p>
            </div>

            <div className="info-card">
              <div className="info-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Teléfono</h3>
              <p>+52 (555) 123-4567<br/>+52 (555) 890-1234</p>
            </div>

            <div className="info-card">
              <div className="info-icon blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>info@hidroplus.com.mx<br/>ventas@hidroplus.com.mx</p>
            </div>

            <div className="info-card">
              <div className="info-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Horario</h3>
              <p>Lunes a Viernes: 8:00 - 18:00<br/>Sábado: 9:00 - 14:00</p>
            </div>

            <div className="slogan-card">
              <p className="slogan-text">
                "Más que un producto, una solución"
              </p>
              <p className="company-info">
                Empresa 100% mexicana desde 2014
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Solicita una Cotización</h2>
              <p>Completa el formulario y nos pondremos en contacto contigo</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>¡Mensaje enviado exitosamente!</h3>
                <p>Nos pondremos en contacto contigo a la brevedad</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="555-123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de interés *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="Hidráulica">Sistemas Hidráulicos</option>
                    <option value="Alcantarillado">Alcantarillado</option>
                    <option value="Riego">Sistemas de Riego</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2 className="section-title">Visítanos</h2>
          <div className="map-embed">
            <iframe
              title="Ubicación HidroPlus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9366739892675!2d-99.16658248509114!3d19.42847998688154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sCiudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1642000000000!5m2!1ses!2smx"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="map-note-wrapper">
            <p className="map-note">Ubicación: <a href="https://maps.app.goo.gl/8WpzSVHfZAURvjAD9" target="_blank" rel="noreferrer">Abrir en Google Maps</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
