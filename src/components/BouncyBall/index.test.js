import React from 'react';
import { mount } from 'enzyme';

import BouncyBall from './BouncyBall';

const requiredProps = { initialX: 100, initialY: 100 };

describe('BouncyBall', () => {
    it('should render the component', () => {
        const wrapper = mount(<BouncyBall {...requiredProps} />);

        expect(wrapper.find(BouncyBall).exists()).toBeTruthy();
    });

    it('should render with the correct props', () => {
        const wrapper = mount(<BouncyBall {...requiredProps} />);

        const ball = wrapper.find(BouncyBall);

        expect(ball.props().initialX).toBe(requiredProps.initialX);
        expect(ball.props().initialY).toBe(requiredProps.initialY);
    });
});
