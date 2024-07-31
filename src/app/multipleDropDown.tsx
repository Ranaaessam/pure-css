'use client';
import React, { useState } from 'react';
import styles from './page.module.css';

const MultipleDropDown: React.FC = () => {
    
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<string[]>([]);

  const toggleOpen = () => {
    setOpen(prev => !prev);
  };

  const handleSelectedDay = (day: string) => {
    setSelectedDay(prev => prev.includes(day)? prev.filter(x => x!== day) :[...prev, day]
    );
    setOpen(false);
  };

  return (
    <div className={styles.dropdownMultiple}>
      <span 
        style={{ 
          padding: '5px 3px',
          borderRadius: '4px',
          fontSize:'16px'
        }}
      >
        {selectedDay.length > 0 ? selectedDay.join(' , ') : 'Select Days'}
      </span>
      <span className={styles.dropdownText} onClick={toggleOpen}>
        &#9662;
      </span> 
      {isOpen && (
        <div className={styles.content}>
          {days.map(day => (
            <div 
              key={day} 
              className={styles.text} 
              onClick={() => handleSelectedDay(day)}
              style={{
                backgroundColor: selectedDay.includes(day) ? '#ddd' : 'transparent',
                padding: '5px 10px',
                cursor: 'pointer'
              }}
            >
              {day}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultipleDropDown;
