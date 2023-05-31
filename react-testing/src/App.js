import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [changeColor, setChangeColor] = useState(true);



    return (
        <div>
            {changeColor ? (
                <button onClick={() => setChangeColor(!changeColor)} style={{ background: 'red' }}>Change to blue</button>
            ) : (
                <button onClick={() => setChangeColor(!changeColor)} style={{ background: 'blue' }}>Change to red</button>
            )}
        </div>
    );
}

export default App;
