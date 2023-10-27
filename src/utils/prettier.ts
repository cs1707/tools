// import { prettier } from "prettier/standalone";
import prettier from "prettier/standalone";
// import babel from "prettier/plugins/babel";
// import estree from "prettier/plugins/estree";
// import html from "prettier/plugins/html";
// import angular from "prettier/plugins/angular";
// import flow from "prettier/plugins/flow";
// import glimmer from "prettier/plugins/glimmer";
// import graphql from "prettier/plugins/graphql";
// import markdown from "prettier/plugins/markdown";
// import postcss from "prettier/plugins/postcss";
// import typescript from "prettier/plugins/typescript";
// import yaml from "prettier/plugins/yaml";

import("prettier/plugins/yaml");

const modules = {
  yaml: () => import("prettier/plugins/yaml"),
  babel: () => import("prettier/plugins/babel"),
  estree: () => import("prettier/plugins/estree"),
  html: () => import("prettier/plugins/html"),
  angular: () => import("prettier/plugins/angular"),
  glimmer: () => import("prettier/plugins/glimmer"),
  markdown: () => import("prettier/plugins/markdown"),
  postcss: () => import("prettier/plugins/postcss"),
  typescript: () => import("prettier/plugins/typescript"),
};

// const plugins = [
//   babel,
//   estree,
//   html,
//   angular,
//   flow,
//   glimmer,
//   graphql,
//   markdown,
//   postcss,
//   typescript,
// ];

export const prettierPresets = {
  json: {
    parser: "json-stringify",
    // plugins: [babel, estree],
  },
  typescript: {
    parser: "typescript",
  },
  javascript: {
    parser: "babel",
  },
  html: {
    parser: "html",
  },
  css: {
    parser: "css",
  },
  scss: {
    parser: "scss",
  },
  less: {
    parser: "less",
  },
  vue: {
    parser: "vue",
  },
  markdown: {
    parser: "markdown",
  },
  graphql: {
    parser: "graphql",
  },
  yaml: {
    parser: "yaml",
  },
  mdx: {
    parser: "mdx",
  },
  json5: {
    parser: "json5",
  },
  jsonc: {
    parser: "json",
  },
  toml: {
    parser: "toml",
  },
};

export const prettierFormat = async (
  code: string,
  lauguage: keyof typeof prettierPresets
) => {
  const plugins = await Promise.all(
    Object.values(modules).map((fn) => fn().then((m) => m.default))
  );
  const options = {
    ...prettierPresets[lauguage],
    plugins,
  };

  return prettier.format(code, options);
};
