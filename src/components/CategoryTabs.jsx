import React from 'react';

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  const categories = ['Todo', 'Desayuno', 'Almuerzo', 'Cena', 'Festividades', 'Bebidas'];
  
  return (
    <div className="tabs-container">
      {categories.map(tab => (
        <div 
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
