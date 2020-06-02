import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.css';
import lang from '../../libs/lang';
import { gitHubLink } from '../../libs/constants';

const Header = ({ title }) => (
    <div className={styles.header}>
        <h1 className={styles.title} data-id="title">
            {title}
        </h1>

        <a href={gitHubLink} target="_blank" rel="noreferrer" className={styles.button} data-id="link">
            {lang.link}
        </a>
    </div>
);

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
