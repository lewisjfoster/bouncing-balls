import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './BouncyBall.css';

const generateRandomNumber = (max, min) => Math.random() * (max - min) + min;

const BouncyBall = ({ initialX, initialY }) => {
    const [x, setX] = useState(initialX);
    const [xSpeed, setXSpeed] = useState(generateRandomNumber(1, 5));

    const [y, setY] = useState(initialY);
    const [ySpeed, setYSpeed] = useState(-generateRandomNumber(5, 10));

    useEffect(() => {
        const maxY = window.innerHeight - 5;

        const bouncing = setInterval(() => {
            let newXSpeed = xSpeed;
            let newYSpeed = ySpeed;

            if (xSpeed < 0.025) {
                setY(maxY);
                clearTimeout(bouncing);
            } else {
                if (y > maxY) {
                    newXSpeed = xSpeed * 0.8;
                    newYSpeed = -Math.abs(ySpeed) * 0.9;
                }

                setX(x + xSpeed);
                setY(y + ySpeed);
                setXSpeed(newXSpeed);
                setYSpeed(newYSpeed + 0.25);
            }
        }, 10);

        return () => clearInterval(bouncing);
    });

    const spanStyle = {
        left: x,
        top: y,
    };

    return <span className={styles.ball} style={spanStyle} />;
};

BouncyBall.propTypes = {
    initialX: PropTypes.number.isRequired,
    initialY: PropTypes.number.isRequired,
};

export default BouncyBall;
