import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
    const [changeColor, setChangeColor] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div>
            {changeColor ? (
                <button
                    disabled={isDisabled}
                    onClick={() => setChangeColor(!changeColor)}
                    style={{ background: isDisabled ? 'gray' : 'red' }}
                >
                    Change to blue
                </button>
            ) : (
                <button
                    disabled={isDisabled}
                    onClick={() => setChangeColor(!changeColor)}
                    style={{ background: isDisabled ? 'gray' : 'blue' }}
                >
                    Change to red
                </button>
            )}
            <input type='checkbox' id='disable-btn-checkbox' defaultChecked={isDisabled} onClick={(e) => setIsDisabled(e.target.checked)} />
            <label htmlFor='disable-btn-checkbox'>Disable button</label>
        </div>
    );
}

export default App;
