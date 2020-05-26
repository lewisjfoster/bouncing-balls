import React, { useState } from 'react';

import styles from './App.css';

import BouncyBall from '../BouncyBall';

const App = () => {
    const [bouncyBalls, setBouncyBalls] = useState([]);

    const addNewBall = (e) => {
        setBouncyBalls([...bouncyBalls, { id: bouncyBalls.length + 1, x: e.clientX, y: e.clientY }]);
    };

    return (
        <div className={styles.clickableArea} onClick={addNewBall}>
            {bouncyBalls.map((ball) => (
                <BouncyBall key={ball.id} initialX={ball.x} initialY={ball.y} />
            ))}
        </div>
    );
};

export default App;
