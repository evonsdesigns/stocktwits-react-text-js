import React from 'react';
import PropTypes from 'prop-types';

export default class CashtagLink extends React.Component {
    render() {
        const {text, urlClass, urlNofollow, urlTarget} = this.props;
        const url = `http://stocktwits.com/symbol/${text}`;
        const displayText = '$' + text;
        const classes = urlClass || 'stwt-url cashtag';

        const anchorProps = {
            className: classes,
            href: url
        }

        if(urlNofollow) {
            anchorProps.rel = 'nofollow';
        }

        if(urlTarget) {
            anchorProps.target = urlTarget;
        }

        return (
            <a {...anchorProps}>
                {displayText}
            </a>
        );
    }
}

CashtagLink.propTypes = {
    text: PropTypes.string.isRequired,
    urlTarget: PropTypes.string,
    urlNofollow: PropTypes.bool,
    urlClass: PropTypes.string
}
