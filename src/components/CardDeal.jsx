import React, { useState } from 'react';
import { boy, boy2, boy3 } from '../assets'; // Adjust these imports based on your actual file structure
import styles from '../style';

// Define your image paths as objects
const characterImages = [boy, boy2, boy3];

const CardDeal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapImage = (direction) => {
    console.log('Swapping image:', direction);
    setCurrentIndex(prevIndex => {
      const numberOfImages = characterImages.length;
      if (direction === 'next') {
        return (prevIndex + 1) % numberOfImages;
      } else {
        // Ensure the index stays within bounds when decrementing
        return (prevIndex - 1 + numberOfImages) % numberOfImages;
      }
    });
  };

  return (
    <div>
      <div id="swap-controls" className="flex justify-between">
        <button onClick={() => swapImage('prev')} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] `}>←</button>
        <button onClick={() => swapImage('next')} className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>→</button>
      </div>

      <div id="images-container">
        <img src={characterImages[currentIndex]} alt="Character" style={{ zIndex: 3 }} />
      </div>
    </div>
  );
};

export default CardDeal;
