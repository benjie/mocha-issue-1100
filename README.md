Steps to reproduce:

    npm install
    npm test

and then in a different terminal

    touch test/test.js; sleep 1; touch test/test.js

**NOTE**: `npm test` in this case runs `--watch` so it won't exit
automatically.
