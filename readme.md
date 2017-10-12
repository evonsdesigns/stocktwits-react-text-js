# stocktwits-react-text-js

A Reactified version of the cash tag link from [stocktwits-text-js](https://github.com/stocktwits/stocktwits-text-js).

### Example Usage


```js
import React from 'react';
import {CashtagLink} from 'stocktwits-react-text-js';

export default class MyComponent extends React.Component {
  render() {

    // renders <a class="stwt-url cashtag" href="http://stocktwits.com/symbol/FB">$FB</a>
    return (
      <CashtagLink text='FB'/>
    );
  }
}

```
