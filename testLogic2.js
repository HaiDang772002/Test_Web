let state = [];

function useState(initialValue) {
    let currentIndex = state.length;

    if (state[currentIndex] === undefined) {
        state[currentIndex] = initialValue;
    }

    const setState = (newValue) => {
        state[currentIndex] = newValue;
    };

    return [state[currentIndex], setState];
}

// Example usage
const [count, setCount] = useState(0);
console.log(count); // Output: 0

setCount(5);
console.log(count); // Output: 0 (since re-rendering is not implemented)

console.log(state); // Output: [0, 5]
