import React, { useState } from 'react';

const MenuItemsGrid = ({ menuItems, currency }) => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const getPriceDisplay = (item) => {
    if (currency === 'colon') {
      return `₡${item.price_colon}`;
    }
    return `$${item.price_dollar.toFixed(2)}`;
  };

  return (
    <div className="menu-grid">
      {menuItems.map(item => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
            <div className="card-footer">
              <span className="card-price">{getPriceDisplay(item)}</span>
              <button className="info-btn" onClick={() => setSelectedInfo(item)}>i</button>
            </div>
          </div>
        </div>
      ))}

      {selectedInfo && (
        <div className="modal-overlay" onClick={() => setSelectedInfo(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="modal-title">{selectedInfo.title}</h3>
            <p className="modal-text">{selectedInfo.information}</p>
            <button className="modal-close" onClick={() => setSelectedInfo(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItemsGrid;
