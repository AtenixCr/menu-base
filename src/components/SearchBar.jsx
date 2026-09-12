import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, currency, setCurrency }) => {
  return (
    <>
      <header className="header">
        <div className="brand-title">SODA EL BUEN SABOR</div>
        <div className="search-bar">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Buscar platos o ingredientes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
