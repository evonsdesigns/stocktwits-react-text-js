import React from 'react';
import PropTypes from 'prop-types';

export default class CashtagLink extends React.Component {
    render() {
        const {text} = this.props;
        const url = `http://stocktwits.com/symbol/${text}`;
        const displayText = '$' + text;
        return (
            <a className="stwt-url cashtag" href={url}>
                {displayText}
            </a>
        );
    }
}

CashtagLink.PropTypes = {
    text: PropTypes.string
}