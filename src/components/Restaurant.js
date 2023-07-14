import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Menucards from './Menucards';
import Navbar from './Navbar';
import './style.css';

const uniqueCategory = [
    ...new Set (Menu.map( (currElem) => {
    return currElem.category;
})
), "All"
];

console.log(uniqueCategory);

const Restaurant = () => {
    // console.log(Menu);
    const [menuItems, setMenuItmes] = useState(Menu);
    const [menuLists, setMenuList] = useState(uniqueCategory);

    const filterMenuItmes = (category) => {
        if(category === "All") {
            setMenuItmes(Menu);
            return;
        }
      const updatedList =   Menu.filter( (currElem) => {
          return currElem.category === category;
        })
        setMenuItmes(updatedList);
    }
    
  return (
    <>
      <div className='container my-4'>
        
        <Navbar filterMenuItmes={filterMenuItmes} menuLists={menuLists} />
        <Menucards menuItems={menuItems} />
        
        
      </div>
    </>
  );
}

export default Restaurant;
