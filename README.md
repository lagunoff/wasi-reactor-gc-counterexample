Build Instructions

```sh
# Build WASM module
nix shell ./ghc-wasm-meta -c wasm32-wasi-cabal build wasi-reactor-gc-counterexample --offline
# Build JavaSript runtime
yarn install
yarn run webpack --mode production
```

Run results in browser [Here](https://lagunoff.github.io/wasi-reactor-gc-counterexample).
