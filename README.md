Steps to reproduce:

    npm install
    npm test

and then in a different terminal

    touch test/test.js; sleep 1; touch test/test.js

or to see how it deals with lots of watch triggers:

    for I in `seq 1 10`; do touch test/test.js; sleep 1; done

**NOTE**: `npm test` in this case runs `--watch` so it won't exit
automatically.
