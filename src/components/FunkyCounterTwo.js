import React from 'react'

function FunkyCounterTwo() {
    
    const initialCount = 0;
    const [count, setCount ] = useState(initialCount);
    const incrementFive = () =>{
        for(let i = 0; i < 5; i++) {
            //setCount(count + 1)
            
            setCount(prevCount => prevCount + 1)

        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(incrementFive)}>Increment 5</button>
        </div>
    )
}

export default FunkyCounterTwo
