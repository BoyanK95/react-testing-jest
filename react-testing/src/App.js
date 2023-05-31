import './App.css';
import { useState } from 'react';

function App() {
    const [changeColor, setChangeColor] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <div>
            {changeColor ? (
                <button disabled={isDisabled} onClick={() => setChangeColor(!changeColor)} style={{ background: 'red' }}>Change to blue</button>
            ) : (
                <button disabled={isDisabled} onClick={() => setChangeColor(!changeColor)} style={{ background: 'blue' }}>Change to red</button>
            )}
            <input type='checkbox' onClick={() => setIsDisabled(!isDisabled)}/>
        </div>
    );
}

export default App;
