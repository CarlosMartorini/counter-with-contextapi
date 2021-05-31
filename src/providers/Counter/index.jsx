import { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const addCount = () => {
        setCounter(counter + 1);
    }

    const subCount = () => {
        setCounter(counter - 1);
    }

    const add10 = () => {
        setCounter(counter + 10);
    }

    const sub10 = () => {
        setCounter(counter - 10);
    }

    return (
        <CounterContext.Provider
            value={{counter, setCounter, addCount, subCount, add10, sub10}}
        >
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => useContext(CounterContext);