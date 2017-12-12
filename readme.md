# stocktwits-react-text-js
[![npm version](https://badge.fury.io/js/stocktwits-react-text-js.svg)](https://badge.fury.io/js/stocktwits-react-text-js)
[![dependency status][deps-svg]][deps-url]
[![Downloads][downloads-image]][downloads-url]
[![GitHub issues](https://img.shields.io/github/issues/evonsdesigns/stocktwits-react-text-js.svg)](https://github.com/evonsdesigns/stocktwits-react-text-js/issues)
[![License][license-image]][license-url]

A Reactified version of the cash tag link from [stocktwits-text-js](https://github.com/stocktwits/stocktwits-text-js). 

This simple component was created to abstract display requirements from stocktwits on 3rd party websites.

## Example Usage

```js
import React from 'react';
import CashtagLink from 'stocktwits-react-text-js';

export default class MyComponent extends React.Component {
  render() {
    return (
      <CashtagLink text='FB'/>
    );
  }
}

```
### Output 
```html
<a class="stwt-url cashtag" href="http://stocktwits.com/symbol/FB">$FB</a>
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Joseph Evans** - [evonsdesigns](https://github.com/evonsdesigns)

See also the list of [contributors](https://github.com/evonsdesigns/stocktwits-react-text-js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Stocktwits for providing a sweet API!

[license-image]: http://img.shields.io/npm/l/react-dates.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/react-dates.svg
[downloads-url]: http://npm-stat.com/charts.html?package=stocktwits-react-text-js
[deps-svg]: https://david-dm.org/evonsdesigns/stocktwits-react-text-js.svg
[deps-url]: https://david-dm.org/evonsdesigns/stocktwits-react-text-js
