import React from 'react';

const MenuItemsGrid = ({ menuItems }) => {
  return (
    <div className="menu-grid">
      {menuItems.map(item => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
            <div className="card-footer">
              <span className="card-price">${item.price.toFixed(2)}</span>
              <button className="info-btn">i</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemsGrid;
