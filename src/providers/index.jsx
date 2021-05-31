import { CounterProvider } from './Counter';

const Providers = ({children}) => {
    return (
        <CounterProvider>
            {children}
        </CounterProvider>
    )
}

export default Providers;