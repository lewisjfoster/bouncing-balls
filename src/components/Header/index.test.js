import React from 'react';
import { mount } from 'enzyme';

import Header from './Header';
import lang from '../../libs/lang';
import { gitHubLink } from '../../libs/constants';

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
    });

    it('should render with the correct title', () => {
        const wrapper = mount(<Header {...requiredProps} />);

        const header = wrapper.find(Header);

        expect(header.find('[data-id="title"]').text()).toBe(requiredProps.title);
    });

    it('should render with the correct link', () => {
        const wrapper = mount(<Header {...requiredProps} />);

        const header = wrapper.find(Header);
        const link = header.find('[data-id="link"]');

        expect(link.text()).toBe(lang.link);
        expect(link.props().href).toBe(gitHubLink);
    });
});
