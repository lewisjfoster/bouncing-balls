import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';

const requiredProps = { title: 'test title' };

describe('Header', () => {
    it('should render the component', () => {
        const wrapper = mount(<Header {...requiredProps} />);

        expect(wrapper.find(Header).exists()).toBeTruthy();
    });

    it('should render with the correct props', () => {
        const wrapper = mount(<Header {...requiredProps} />);

        const header = wrapper.find(Header);

        expect(header.props().title).toBe(requiredProps.title);
        expect(header.text()).toBe(requiredProps.title);
    });
});
