import React, { useState } from 'react';

import styles from './App.css';
import lang from '../../libs/lang';

import Header from '../Header';
import BouncyBall from '../BouncyBall';

const App = () => {
    const [bouncyBalls, setBouncyBalls] = useState([]);

    const addNewBall = (e) => {
        setBouncyBalls([...bouncyBalls, { id: bouncyBalls.length + 1, x: e.clientX, y: e.clientY }]);
    };

    return (
        <>
            <Header title={lang.title + bouncyBalls.length} onClick={addNewBall} />
            <div className={styles.clickableArea} onClick={addNewBall} data-id="clickable-area">
                {bouncyBalls.map((ball) => (
                    <BouncyBall key={ball.id} initialX={ball.x} initialY={ball.y} />
                ))}
            </div>
        </>
    );
};

export default App;
