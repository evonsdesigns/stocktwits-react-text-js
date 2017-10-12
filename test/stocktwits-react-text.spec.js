import {expect} from 'chai';
import CashtagLink from '../src/stocktwits-react-text';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Chance from 'chance';

const chance = new Chance();

describe('Stocktwits React Text', () => {

    function shallowRenderComponent(props) {
        const renderer = new ShallowRenderer();

        renderer.render(<CashtagLink {...props} />);
        
        return renderer.getRenderOutput();
    }

    it('should build an anchor with correct props', () => {
        const component = shallowRenderComponent({
            text: 'FB'
        });

        expect(component.type).to.equal('a');
        expect(component.props.className).to.equal('stwt-url cashtag');
        expect(component.props.href).to.equal('http://stocktwits.com/symbol/FB');
        expect(component.props.children).to.equal('$FB');
    });

    it('should use custom classes if supplied', () => {
        const urlClass = chance.word();
        const component = shallowRenderComponent({
            text: 'FB',
            urlClass
        });

        expect(component.props.className).to.equal(urlClass);
    });

    it('should set rel=nofollow when urlNoFollow true', () => {
        const component = shallowRenderComponent({
            text: 'FB',
            urlNofollow: true
        });

        expect(component.props.rel).to.equal('nofollow');
    });

    it('should set target on anchor when provided', () => {
        const urlTarget = chance.word();
        const component = shallowRenderComponent({
            text: 'FB',
            urlTarget
        });

        expect(component.props.target).to.equal(urlTarget);
    });
});