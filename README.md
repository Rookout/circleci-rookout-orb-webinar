# Install Rookout using sdk

The [NodeJS SDK](https://www.npmjs.com/package/rookout) provides the ability to fetch debug data from a running application in real time.  
It can easily be installed by running the following command:
```bash
npm install --save rookout
```

## Setup

Import the SDK within your application:
```javascript
const rook = require('rookout');

rook.start({
    token: '[Your Rookout Token]'
})
```

## Usage on math-server:

See at source code: [server.js](https://github.com/Rookout/circleci-rookout-orb-webinar/blob/adding-rookout-to-server/src/server.js#L5)

## Further information:

https://docs.rookout.com/docs/sdk-setup.html