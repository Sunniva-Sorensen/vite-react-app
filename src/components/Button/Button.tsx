import {useState} from "react";
import "./Button.css";

export function Button() {{
    const [count, setCount] = useState(0);

    function getIncrementValue(current: number) {
        if (current > 100) return 100;
        if (current > 20) return 10;
        return 1;
    }

function getColor(current: number) {
    const divisibleBy3 = current % 3 === 0;
    const divisibleBy5 = current % 5 === 0;

    if (divisibleBy3 && divisibleBy5) return "purple";
    if (divisibleBy3) return "red";
    if (divisibleBy5) return "green";
    return "grey";
}

function handleClick() {
    const incrementValue = getIncrementValue(count);
    setCount(count + incrementValue);
}

return (
    <button
        className="button"
        style={{ backgroundColor: getColor(count) }}
        onClick={handleClick}
    >
        Count: {count}
    </button>
);
}}