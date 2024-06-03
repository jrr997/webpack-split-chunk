# SplitChunk Doesn't Work

## What happen

I try to split "src/util.js" from 'src/index.js', but it doesn't work.

## Reproduce

1. `npm i`

2. `npm run build`

3. open `index.html` in browser, I expect `src/index.js` was loaded but it didn't.
