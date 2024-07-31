'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const dayColors: { [key: string]: string } = {
  'Sunday': '#FF6347', 
  'Monday': '#4682B4', 
  'Tuesday': '#3CB371', 
  'Wednesday': '#FFD700', 
  'Thursday': '#FFA500',
  'Friday': '#800080', 
  'Saturday': '#FF69B4'
};

const ColoredDropdown: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<string>();

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const handleSelectedDay = (day: string) => {
    setSelectedDay(day);
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <span 
        style={{ 
          color: selectedDay ? 'white' : 'black', 
          backgroundColor: selectedDay ? dayColors[selectedDay] : 'transparent',
          padding: '5px 10px',
          borderRadius: '4px',
          marginLeft: '10px',
        }}
      >
        {selectedDay ? selectedDay : 'Select a day'}
      </span>
      <span className={styles.dropdownText} onClick={toggleOpen}>
        &#9662;
      </span> 
      {isOpen && (
        <div className={styles.content}>
          {Object.keys(dayColors).map(option => (
            <div 
              key={option} 
              className={styles.text} 
              style={{ backgroundColor: dayColors[option], color: 'white', padding: '5px 10px', borderRadius: '4px', margin: '2px 0' }}
              onClick={() => handleSelectedDay(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColoredDropdown;
