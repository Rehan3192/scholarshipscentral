/* eslint-disable no-console */

const fs = require("fs");

function registerTypeScriptRequire() {
  // Minimal TS/TSX loader for Node (project does not ship ts-node/tsx).
  // This allows scripts to `require()` TS modules from src/.
  // eslint-disable-next-line global-require
  const ts = require("typescript");

  const compile = (code, filename) =>
    ts.transpileModule(code, {
      fileName: filename,
      compilerOptions: {
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    }).outputText;

  const prevTs = require.extensions[".ts"];
  const prevTsx = require.extensions[".tsx"];

  // eslint-disable-next-line no-underscore-dangle
  require.extensions[".ts"] = (module, filename) => {
    const code = fs.readFileSync(filename, "utf8");
    // eslint-disable-next-line no-underscore-dangle
    module._compile(compile(code, filename), filename);
  };
  // eslint-disable-next-line no-underscore-dangle
  require.extensions[".tsx"] = (module, filename) => {
    const code = fs.readFileSync(filename, "utf8");
    // eslint-disable-next-line no-underscore-dangle
    module._compile(compile(code, filename), filename);
  };

  return () => {
    require.extensions[".ts"] = prevTs;
    require.extensions[".tsx"] = prevTsx;
  };
}

module.exports = { registerTypeScriptRequire };

