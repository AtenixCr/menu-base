import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
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
  );
};

export default SearchBar;
