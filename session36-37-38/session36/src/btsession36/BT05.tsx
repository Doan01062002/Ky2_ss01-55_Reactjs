import React, { useEffect, useState } from 'react';

export default function BT05() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;
            setTime(currentTime);
        };

        updateTime();
        const timerId = setInterval(updateTime, 1000);

        
        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            BT05:
            <p>Thời gian hiện tại: {time}</p>
        </div>
    );
}
