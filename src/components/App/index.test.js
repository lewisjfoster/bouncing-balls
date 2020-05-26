import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import BouncyBall from '../BouncyBall';

const mockedEvents = [
    { clientX: 100, clientY: 100 },
    { clientX: 150, clientY: 200 },
    { clientX: 200, clientY: 300 },
];

describe('App', () => {
    it('should render the component', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(App).exists()).toBeTruthy();
    });

    it('should render one ball in the correct location', () => {
        const wrapper = mount(<App />);

        wrapper.find('div').simulate('click', mockedEvents[0]);

        const ball = wrapper.find(BouncyBall);
        expect(ball.props().initialX).toBe(mockedEvents[0].clientX);
        expect(ball.props().initialY).toBe(mockedEvents[0].clientY);
    });

    it('should render multiple balls in the correct location', () => {
        const wrapper = mount(<App />);

        wrapper.find('div').simulate('click', mockedEvents[0]);
        wrapper.find('div').simulate('click', mockedEvents[1]);
        wrapper.find('div').simulate('click', mockedEvents[2]);

        const balls = wrapper.find(BouncyBall);
        balls.forEach((ball, index) => {
            expect(ball.props().initialX).toBe(mockedEvents[index].clientX);
            expect(ball.props().initialY).toBe(mockedEvents[index].clientY);
        });
    });
});
