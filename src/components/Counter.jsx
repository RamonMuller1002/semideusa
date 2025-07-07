import './Counter.css';
import {useEffect, useState} from "react";

const targetDate = new Date(2025, 3, 14, 14, 35); // mês 3 = abril

function getCounterText() {
    const hora = Date.now();
    const now = new Date();
    const diff = now - targetDate;
    const totalMinutes = Math.floor(diff / (1000 * 60));
    let days = Math.floor(totalMinutes / (60 * 24));
    let hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    let minutes = totalMinutes % 60;
    let seconds = Math.floor((diff / 1000) % 60);
    return `${days} dias, ${hours} horas, ${minutes < 10 ? '0' : ''}${minutes} minutos e ${seconds < 10 ? '0' : ''}${seconds} segundos de namoro!`
}

function Counter() {
    const [text, setText] = useState(getCounterText()); // Initialize immediately

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(getCounterText());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="max-width center">
            <div className="counter">
                <h2 id="counter">{text}</h2>
            </div>
        </div>
    );
}

export default Counter;