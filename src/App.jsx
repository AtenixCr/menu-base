import React, { useState, useEffect } from 'react';
import menuData from './data.json';
import SearchBar from './components/SearchBar';
import PromoCarousel from './components/PromoCarousel';
import CategoryTabs from './components/CategoryTabs';
import MenuItemsGrid from './components/MenuItemsGrid';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('SABOR LOCAL');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Filter the imported data based on the active tab category and search term
    const filteredItems = menuData.filter(item => {
      const matchesTab = item.category === activeTab;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTab && matchesSearch;
    });
    setMenuItems(filteredItems);
  }, [activeTab, searchTerm]);

  return (
    <div className="app-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PromoCarousel />
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MenuItemsGrid menuItems={menuItems} />
      <Contact />
    </div>
  );
}

export default App;
