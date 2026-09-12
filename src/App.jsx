import React, { useState, useEffect } from 'react';
import menuData from './data.json';
import SearchBar from './components/SearchBar';
import PromoCarousel from './components/PromoCarousel';
import CategoryTabs from './components/CategoryTabs';
import MenuItemsGrid from './components/MenuItemsGrid';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('Todo');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [currency, setCurrency] = useState('colon');

  useEffect(() => {
    const normalizeText = (text) =>
      (text || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

    const cleanSearch = normalizeText(searchTerm.trim());

    const filteredItems = menuData.filter(item => {
      if (cleanSearch !== '') {
        const title = normalizeText(item.title);
        const description = normalizeText(item.description);
        const information = normalizeText(item.information);
        const categories = Array.isArray(item.category)
          ? item.category.map(normalizeText).join(' ')
          : normalizeText(item.category);

        return (
          title.includes(cleanSearch) ||
          description.includes(cleanSearch) ||
          information.includes(cleanSearch) ||
          categories.includes(cleanSearch)
        );
      }

      return activeTab === 'Todo' || (Array.isArray(item.category) ? item.category.includes(activeTab) : item.category === activeTab);
    });

    setMenuItems(filteredItems);
  }, [activeTab, searchTerm]);

  return (
    <div className="app-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} currency={currency} setCurrency={setCurrency} />
      <PromoCarousel />
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <MenuItemsGrid menuItems={menuItems} currency={currency} />
      <Contact />
    </div>
  );
}

export default App;