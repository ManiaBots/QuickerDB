# QuickerDB

### What is QuickerDB?
#### QuickerDB is a wrapper made for the well known NodeJS module "quick.db".

### Is QuickerDB actually "quicker"?
#### Well yes and no, while QuickerDB may not be "quicker" and contains many shortcuts as a workaround to many unncecesary lines of code your project may have!

### Installation
```
npm install @maniabots/quickerdb@latest --registry=https://npm.pkg.github.com
```

### Usage
```js
const DBClass = require("@maniabots/quickerdb");
const db = new DBClass({
              debug: true // When 'true', enabled debug, every database action is logged
            });
            
// WIP
```
