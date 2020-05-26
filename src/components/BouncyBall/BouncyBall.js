import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BouncyBall.css';

const generateRandomNumber = (max, min) => Math.random() * (max - min) + min;

class BouncyBall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: this.props.initialX,
            xSpeed: generateRandomNumber(1, 5),
            y: this.props.initialY,
            ySpeed: -generateRandomNumber(5, 10),
        };
    }

    componentDidMount() {
        const maxY = window.innerHeight - 5;

        const bouncing = setInterval(() => {
            const { x, y } = this.state;
            let { xSpeed, ySpeed } = this.state;

            if (xSpeed < 0.05) {
                this.setState({ y: maxY });
                clearTimeout(bouncing);
            }

            if (y > maxY) {
                xSpeed *= 0.8;
                ySpeed = -Math.abs(ySpeed) * 0.75;
            }

            this.setState({
                x: x + xSpeed,
                xSpeed,
                y: y + ySpeed,
                ySpeed: ySpeed + 0.25,
            });
        }, 10);
    }

    render() {
        const spanStyle = {
            left: this.state.x,
            top: this.state.y,
        };

        return <span className={styles.ball} style={spanStyle} />;
    }
}

BouncyBall.propTypes = {
    initialX: PropTypes.number.isRequired,
    initialY: PropTypes.number.isRequired,
};

export default BouncyBall;
