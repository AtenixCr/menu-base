import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, currency, setCurrency }) => {
  return (
    <>
      <header className="header">
        <div className="header-brand">
          <span className="header-subtitle">Menú Digital</span>
          <h1 className="header-title">Soda El Buen Sabor</h1>
        </div>
        <div className="search-bar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Buscar platos o ingredientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              type="button"
              onClick={() => setSearchTerm('')} 
              className="clear-search-btn"
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </header>
      <div className="currency-selector">
        <button
          className={`currency-btn ${currency === 'colon' ? 'active' : ''}`}
          onClick={() => setCurrency('colon')}
        >
          Colones (₡)
        </button>
        <button
          className={`currency-btn ${currency === 'dollar' ? 'active' : ''}`}
          onClick={() => setCurrency('dollar')}
        >
          Dólares ($)
        </button>
      </div>
    </>
  );
};

export default SearchBar;
