import React from 'react';
import PropTypes from 'prop-types';

export default class CashtagLink extends React.Component {
    render() {
        const {text, urlClass} = this.props;
        const url = `http://stocktwits.com/symbol/${text}`;
        const displayText = '$' + text;
        const classes = urlClass || 'stwt-url cashtag';

        return (
            <a className={classes} href={url}>
                {displayText}
            </a>
        );
    }
}

CashtagLink.PropTypes = {
    text: PropTypes.string.isRequired,
    urlClass: PropTypes.string
}