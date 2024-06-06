import React, { useEffect, useState } from 'react'

export default function BT10() {
    const [keyInfo, setKeyInfo] = useState({ keyName: '', keyCode: '' });

    useEffect(() => {
      const handleKeyPress = (event:any) => {
        setKeyInfo({
          keyName: event.key,
          keyCode: event.keyCode,
        });
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    return (
      <div>
        <h2>Press any key</h2>
        <p>Key Name: {keyInfo.keyName}</p>
        <p>Key Code: {keyInfo.keyCode}</p>
      </div>
    );
}
