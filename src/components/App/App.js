import React, { useState } from 'react';

import styles from './App.css';

import BouncyBall from '../BouncyBall';

const App = () => {
    const [bouncyBalls, setBouncyBalls] = useState([]);

    const addNewBall = (e) => {
        setBouncyBalls([...bouncyBalls, { id: bouncyBalls.length, x: e.clientX, y: e.clientY }]);
    };

    const renderBalls = () => {
        const balls = bouncyBalls.map((ball) => <BouncyBall key={ball.id} initialX={ball.x} initialY={ball.y} />);

        return balls;
    };

    return (
        <div className={styles.clickableArea} onClick={addNewBall}>
            {renderBalls()}
        </div>
    );
};

export default App;
