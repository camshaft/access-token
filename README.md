access-token
============

Get/format an access token

Installation
------------

```sh
$ component install CamShaft/access-token
```

API
---

```js
var token = require('access-token');

token();
// my-access-token

token.bearer();
// Bearer my-access-token

token.auth();
// {authorization: 'Bearer my-access-token'}
```

## License

MIT
