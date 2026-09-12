import React from 'react';

const PromoCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const promos = [
    "SABOR LOCAL",
    "2X1 EN HAMBURGUESAS",
    "BEBIDA GRATIS",
    "POSTRE DE LA CASA",
    "MENÚ EJECUTIVO"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [promos.length]);

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-overlay">
          <span className="brand-eyebrow">SODA EL BUEN SABOR</span>
          <div className="brand-title">{promos[currentIndex]}</div>
          <span className="brand-subtitle">Tradición en Cada Plato</span>
        </div>
      </div>
      <div className="banner-dots">
        {promos.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            style={{ cursor: 'pointer' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;
