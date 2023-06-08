/* eslint-disable no-unused-vars */
// const pkg = require("../package.json");
const getCommon = (isDev = false, isClient = false) => {
  const opt = {
    // "source-maps":true,
    jsc: {
      // externalHelpers: true,
      transform: {
        legacyDecorator: true,
        decoratorMetadata: true,
        react: {
          runtime: "automatic", // or classic
          throwIfNamespace: true,
          useBuiltins: true,
          development: isDev,
        },
      },
      loose: true,
      parser: {
        decorators: true,
        dynamicImport: true,
      },
      target: "es5",
    },
  };
  // 禁止服务端拆分成chunks
  if (!isClient) {
    opt.module = {
      type: "commonjs",
      // ignoreDynamic: true,
    };
  }
  // 非本地开发
  if (!isDev) {
    // swc polyfill 策略，会复用 babel 链路，但效率比 babel 低
    opt.env = {
      mode: "entry",
      coreJs: 3,
      forceAllTransforms: true,
      dynamicImport: true,
      // targets: {
      //  ...(isClient
      //    ? { browsers: pkg.browserslist }
      //    : { node: pkg.engines.node.match(/(\d+\.?)+/)[0] }),
      // },
    };
  }
  return opt;
};
const getTsSwcOptions = (isDev = false, isClient = false) => {
  const com = getCommon(isDev, isClient);
  return {
    // test: ".(ts|tsx)$",
    ...com,
    jsc: {
      ...com.jsc,
      parser: {
        ...com.jsc.parser,
        syntax: "typescript",
        tsx: true,
      },
    },
  };
};
const getJSSwcOptions = (isDev = false, isClient = false) => {
  const com = getCommon(isDev, isClient);
  return {
    // test: ".(js|jsx|mjs|cjs)$",
    ...com,
    jsc: {
      ...com.jsc,
      parser: {
        ...com.jsc.parser,
        syntax: "ecmascript",
        jsx: true,
      },
    },
  };
};
module.exports = {
  getTsSwcOptions,
  getJSSwcOptions,
};
