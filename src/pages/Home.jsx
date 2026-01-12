import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Bienvenido a <span className="gradient-text">HidroPlus</span>
            </h1>
            <p className="hero-slogan">
              "En HidroPlus trabajamos día a día con calidad, pasión y respeto para ofrecerle a nuestros clientes excelencia en nuestros servicios; porque somos <strong>"Más que un producto, una solución"</strong>."
            </p>
            <p className="hero-services">
              Suministros de tubería en diferentes sistemas
              <span className="hero-services-sub">Cᴏɴᴅᴜᴄᴄɪᴏ́ɴ • ᴄᴏɴᴛʀᴏʟ • ᴍᴇᴅɪᴄɪᴏ́ɴ • ʀᴇᴘᴀʀᴀᴄɪᴏ́ɴ</span>
            </p>
            <div className="hero-buttons">
              <a href="/productos" className="btn btn-primary">Ver Productos</a>
              <a href="/contacto" className="btn btn-outline">Contáctanos</a>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid animate-on-scroll" id="about">
            <div className={`about-image ${isVisible.about ? 'visible' : ''}`}>
              <div className="image-placeholder">
                <div className="image-icon">💧</div>
              </div>
            </div>
            <div className={`about-content ${isVisible.about ? 'visible' : ''}`}>
              <h2 className="section-title">¿Quiénes Somos?</h2>
              <p className="about-text">
                Somos una empresa 100% mexicana, legalmente constituida desde 2014, especializada en servicios de sistemas hidráulicos, alcantarillado y riego. Desde nuestros inicios, desarrollamos nuestra infraestructura para atender a empresas exigentes que requieren calidad, eficiencia y soluciones confiables.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Años de experiencia</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Proyectos completados</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Mexicana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="section mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card animate-on-scroll" id="mission">
              <div className={`mv-card-inner ${isVisible.mission ? 'visible' : ''}`}>
                <div className="mv-icon blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Nuestra Misión</h3>
                <p>
                  Ofrecer soluciones integrales en sistemas hidráulicos, alcantarillado y riego con los más altos estándares de calidad, brindando a nuestros clientes productos y servicios confiables que superen sus expectativas.
                </p>
              </div>
            </div>

            <div className="mv-card animate-on-scroll" id="vision">
              <div className={`mv-card-inner ${isVisible.vision ? 'visible' : ''}`}>
                <div className="mv-icon green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                <h3>Nuestra Visión</h3>
                <p>
                  Ser la empresa líder en México en soluciones hidráulicas, reconocida por nuestra calidad, innovación y compromiso con la satisfacción del cliente, expandiendo nuestra presencia a nivel nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card animate-on-scroll" id="value1">
              <div className={`value-icon ${isVisible.value1 ? 'visible' : ''}`}>✓</div>
              <h4>Calidad</h4>
              <p>Compromiso con la excelencia en cada proyecto</p>
            </div>
            <div className="value-card animate-on-scroll" id="value2">
              <div className={`value-icon ${isVisible.value2 ? 'visible' : ''}`}>❤️</div>
              <h4>Pasión</h4>
              <p>Amor por lo que hacemos día a día</p>
            </div>
            <div className="value-card animate-on-scroll" id="value3">
              <div className={`value-icon ${isVisible.value3 ? 'visible' : ''}`}>🤝</div>
              <h4>Respeto</h4>
              <p>Consideración hacia clientes y colaboradores</p>
            </div>
            <div className="value-card animate-on-scroll" id="value4">
              <div className={`value-icon ${isVisible.value4 ? 'visible' : ''}`}>💡</div>
              <h4>Innovación</h4>
              <p>Soluciones creativas y efectivas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para iniciar tu proyecto?</h2>
            <p>Contáctanos hoy y descubre cómo podemos ayudarte</p>
            <a href="/contacto" className="btn btn-primary btn-large">Solicitar Cotización</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
