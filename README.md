<div align="center">

# @skyra/jaro-winkler

**A string similarity utility that uses the Jaro-Winkler algorithm**

[![GitHub](https://img.shields.io/github/license/skyra-project/jaro-winkler)](https://github.com/skyra-project/jaro-winkler/blob/main/LICENSE.md)
[![codecov](https://codecov.io/gh/skyra-project/jaro-winkler/branch/main/graph/badge.svg?token=5Na1VXMxee)](https://codecov.io/gh/skyra-project/jaro-winkler)
[![npm](https://img.shields.io/npm/v/@skyra/jaro-winkler?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@skyra/jaro-winkler)

</div>

## Description

A string similarity function using the Jaro-Winkler distance metric. Returns a number between 0 and 1. A 0 being no
similarity and a 1 being an exact match.

Read more about it [on Wikipedia](http://en.wikipedia.org/wiki/Jaro–Winkler_distance).

## Installation

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @skyra/jaro-winkler
```

## Usage

```js
const { jaroWinkler } = require('@skyra/jaro-winkler');
```

```ts
import { jaroWinkler } from '@skyra/jaro-winkler';
```

---

## API Documentation

For the full API documentation please refer to the TypeDoc generated
[documentation](https://skyra-project.github.io/jaro-winkler).

### Buy us some doughnuts

Skyra Project is open source and always will be, even if we don't get donations. That said, we know there are amazing
people who may still want to donate just to show their appreciation. Thanks you very much in advance!

We accept donations through Patreon, BitCoin, Ethereum, and Litecoin. You can use the buttons below to donate through
your method of choice.

| Donate With |         QR         |                                                                  Address                                                                  |
| :---------: | :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------: |
|   Patreon   | ![PatreonImage][]  |                                               [Click Here](https://www.patreon.com/kyranet)                                               |
|   PayPal    |  ![PayPalImage][]  |                     [Click Here](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CET28NRZTDQ8L)                      |
|   BitCoin   | ![BitcoinImage][]  |         [3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco](bitcoin:3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco?amount=0.01&label=Skyra%20Discord%20Bot)          |
|  Ethereum   | ![EthereumImage][] | [0xcB5EDB76Bc9E389514F905D9680589004C00190c](ethereum:0xcB5EDB76Bc9E389514F905D9680589004C00190c?amount=0.01&label=Skyra%20Discord%20Bot) |
|  Litecoin   | ![LitecoinImage][] |         [MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM](litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot)         |

## Contributors

Please make sure to read the [Contributing Guide][contributing] before making a pull request.

Thank you to all the people who already contributed to Skyra Project!

<a href="https://github.com/skyra-project/jaro-winkler/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skyra-project/jaro-winkler" />
</a>

[contributing]: https://github.com/skyra-project/.github/blob/main/.github/CONTRIBUTING.md
[patreonimage]: https://cdn.skyra.pw/gh-assets/patreon.png
[paypalimage]: https://cdn.skyra.pw/gh-assets/paypal.png
[bitcoinimage]: https://cdn.skyra.pw/gh-assets/bitcoin.png
[ethereumimage]: https://cdn.skyra.pw/gh-assets/ethereum.png
[litecoinimage]: https://cdn.skyra.pw/gh-assets/litecoin.png
