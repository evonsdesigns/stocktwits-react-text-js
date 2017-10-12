import {expect} from 'chai';
import CashtagLink from '../src/stocktwits-react-text';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';


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
});