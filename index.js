import { WASI, File, OpenFile } from '@bjorn3/browser_wasi_shim';

window.startReactor = async function startReactor(wasmUri) {
  const stdin = new OpenFile(new File([]));
  const stdout = new OpenFile(new File([]));
  const stderr = new OpenFile(new File([]));
  const wasi = new WASI([], [], [
    stdin, // stdin
    stdout, // stdout
    stderr, // stderr
  ]);
  const wasm = await WebAssembly.compileStreaming(fetch(wasmUri));
  const inst = await WebAssembly.instantiate(wasm, {
    "wasi_snapshot_preview1": wasi.wasiImport
  });
  wasi.inst = inst;
  inst.exports.hs_init_with_sanity_checks();
  return wasi;
};
