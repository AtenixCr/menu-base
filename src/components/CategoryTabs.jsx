import React from 'react';

const CategoryTabs = ({ activeTab, setActiveTab }) => {
  const categories = ['SABOR LOCAL', 'DE LA TIERRA', 'PLATOS CASEROS'];
  
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
