import React, { useState } from 'react';
import { boy, boy2, boy3, wildWestTheme, midievalTheme, cityTheme, ballItem, coinItem, rockItem } from '../assets';
import styles from '../style';

const characterImages = [boy, boy2, boy3];
const themeImages = [wildWestTheme, midievalTheme, cityTheme];
const itemImages = [ballItem, coinItem, rockItem];

// const buttonStyle = `py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mr-8`;
const selectedStyle = `py-4 px-6 bg-blue-600 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mr-8`; // Slightly darker background for the selected type
const notSelectedStyle = `py-4 px-6 bg-blue-500 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mr-8`; // Normal background for not selected


const CardDeal = () => {
  const [currentIndex, setCurrentIndex] = useState({
    character: 0,
    theme: 0,
    item: 0,
  });
  const [selectedType, setSelectedType] = useState('character');

  const swapImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const typeImages = selectedType === 'character' ? characterImages : selectedType === 'theme' ? themeImages : itemImages;
      const numberOfImages = typeImages.length;
      let newIndex = prevIndex[selectedType];
      if (direction === 'next') {
        newIndex = (newIndex + 1) % numberOfImages;
      } else {
        newIndex = (newIndex - 1 + numberOfImages) % numberOfImages;
      }
      return { ...prevIndex, [selectedType]: newIndex };
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center my-4">
        <button onClick={() => swapImage('prev')} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px] mr-8`}>←</button>

        <div>
          <button onClick={() => setSelectedType('character')} className={`${notSelectedStyle} ${selectedType === 'character' ? selectedStyle : notSelectedStyle}`}>Character</button>
          <button onClick={() => setSelectedType('theme')} className={`${notSelectedStyle} ${selectedType === 'theme' ? selectedStyle : notSelectedStyle}`}>Theme</button>
          <button onClick={() => setSelectedType('item')} className={`${notSelectedStyle} ${selectedType === 'item' ? selectedStyle : notSelectedStyle}`}>Item</button>
        </div>

        <button onClick={() => swapImage('next')} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[15px] text-primary outline-none rounded-[10px]`}>→</button>
      </div>

      <div id="images-container" style={{ position: 'relative', width: '100%', height: '500px' }}>
        <img src={themeImages[currentIndex.theme]} alt="Theme" style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }} />
        <img src={characterImages[currentIndex.character]} alt="Character" style={{ maxWidth: '20%', maxHeight: '20%', position: 'absolute', zIndex: 2, left: '40%', top: '75%' }} />
        <img src={itemImages[currentIndex.item]} alt="Item" style={{ maxWidth: '10%', maxHeight: '10%', position: 'absolute', zIndex: 3, left: '50%', top: '80%' }} />
      </div>
    </div>
  );
};

export default CardDeal;
