import {useState} from 'react'
//import Button from "../Button/Button"

const Counter = ({initial,stock ,title}) => {

    const [count, setCount] = useState(initial) //Seteamos el estado

    const decrement = () => {
        //setCount(count - 1)
        for(let i = 0; i < 2; i++) {
            setCount(count - 1)
            //setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(initial)
    }



    return (
        <div>
            <h1>{title}</h1>
        
            <button onClick={decrement}>-</button>
                <h1>{count}</h1>
          
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter