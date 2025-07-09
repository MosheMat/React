import React from 'react';
import HelloWorld from './components/HelloWorld';
import { Counter } from './components/Counter';
import { FancyButton } from './components/FancyButton';
import { capitalize } from './utils/helpers';

const App: React.FC = () => {
    const handleClick = () => alert('Fancy button clicked!');

    return (
        <div>
            <HelloWorld name={capitalize('world')} />
            <Counter />
            <FancyButton label="Click Me" onClick={handleClick} />
        </div>
    );
};

export default App;
