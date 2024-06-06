import React, { useState } from 'react';

export default function BT03() {
    const [activeButtons, setActiveButtons] = useState<string[]>(['white', 'white', 'white', 'white']);

    const handleClick = (index: number) => {
        setActiveButtons((prevState) =>
            prevState.map((item, i) => (i === index ? 'brown' : 'white'))
        );
    };

    return (
        <div>BT03:
            <button onClick={() => handleClick(0)} style={{ backgroundColor: activeButtons[0] }}>Trang chủ</button>
            <button onClick={() => handleClick(1)} style={{ backgroundColor: activeButtons[1] }}>Sản phẩm</button>
            <button onClick={() => handleClick(2)} style={{ backgroundColor: activeButtons[2] }}>Giới thiệu</button>
            <button onClick={() => handleClick(3)} style={{ backgroundColor: activeButtons[3] }}>Liên hệ</button>
        </div>
    );
}
