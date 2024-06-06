import React, { useState } from 'react';

export default function RandomGender() {
  const genders = ['Nam', 'Nữ', 'Khác'];
  const [currentGender, setCurrentGender] = useState('Nam');

  const handleRandomGender = () => {
    const randomIndex = Math.floor(Math.random() * genders.length);
    const randomGender = genders[randomIndex];
    setCurrentGender(randomGender);
  };

  return (
    <div>
      <button onClick={handleRandomGender}>Random gender</button>
      <p>Giới tính hiện tại: {currentGender}</p>
    </div>
  );
}