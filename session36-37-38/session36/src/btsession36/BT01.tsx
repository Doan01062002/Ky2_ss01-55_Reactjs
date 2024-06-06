import React, { useState } from 'react';

export default function BT01() {
    const [title, setTitle] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    document.title = title

    return (
        <div>
            BT01:
            <label htmlFor="title-input">Nhập tiêu đề:</label>
            <input
                id="title-input"
                onChange={handleChange}
                type="text"
                value={title}
            />
        </div>
    );
}
