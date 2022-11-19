import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      <h2>{foodItems.itemName}</h2>
      <h3>{foodItems.description}</h3>
      {/* <{foodItems.foodImage} /> */}
    </div>
  );
}

export default MenuList;
