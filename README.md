<p align="center">
 <img src="https://i.imgur.com/9CVBorr.png" alt="ac-banner">
</p>

[![Build Status](https://travis-ci.com/brodao2/ac-banner.svg?branch=master)](https://travis-ci.com/brodao2/ac-banner)

Easily integrate ASCII flavoured banner to your CLI utility.

## Usage

```md
npm install --save ac-banner
```

```js
const showBanner = require('ac-banner');

(async () => {
 await showBanner('The Title', 'This is a suitable tagline');
})();

```

![Demo](https://i.imgur.com/btVf53N.png)

## API

### showBanner(title, tagLine?, titleColor?, tagLineColor?)

- `title`: Name of the utility.
- `tagLine`: A suitable tagline.
- `titleColor`: Override the default title-color that defaults to `red`.
- `tagLineColor`: Override the default tagline-color that defaults to `yellow`.

## Testing

```bash
 npm test
```

## License

[GNU GPL V3](https://github.com/brodao2/ac-banner/blob/master/LICENSE)
