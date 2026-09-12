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
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(timer);
  }, [promos.length]);

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-text">{promos[currentIndex]}</div>
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
