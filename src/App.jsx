import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import menuData from './data.json';

function App() {
  const [activeTab, setActiveTab] = useState('SABOR LOCAL');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Filter the imported data based on the active tab category
    const filteredItems = menuData.filter(item => item.category === activeTab);
    setMenuItems(filteredItems);
  }, [activeTab]);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="search-bar">
          <Search size={18} />
          <input type="text" placeholder="Buscar platos o ingredientes..." />
        </div>
      </header>

      {/* Banner*/}
      <div className="banner-container">
        <div className="banner">
          <div className="banner-overlay">
            <div className="brand-eyebrow">Soda Típica</div>
            <div className="brand-title">EL BUEN SABOR</div>
            <div className="brand-subtitle">Comida casera con sazón tico</div>
          </div>
        </div>
        <div className="banner-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {['SABOR LOCAL', 'DE LA TIERRA', 'PLATOS CASEROS'].map(tab => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Grid */}
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
    </div>
  );
}

export default App;