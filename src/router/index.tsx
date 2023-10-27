import { PageLayout } from "@/components/Layout/Page";
import { CSSFormatter } from "@/pages/css-formatter";
import { CSSMinify } from "@/pages/css-minify";
import { HTMLFormatter } from "@/pages/html-formatter";
import { JavaScriptFormatter } from "@/pages/javascript-formatter";
import { JavaScriptMinify } from "@/pages/javascript-minify";
import { JSONFormatter } from "@/pages/json-formatter";
import { JsonToTypeScript } from "@/pages/json-to-typescript";
import { LessFormatter } from "@/pages/less-formatter";
import { MarkdownFormatter } from "@/pages/markdown-formatter";
import { NotFound } from "@/pages/not-found";
import { SCSSFormatter } from "@/pages/scss-formatter";
import { TypeScriptFormatter } from "@/pages/typescript-formatter";
import { YAMLFormatter } from "@/pages/yaml-formatter";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        async lazy() {
          const module = await import("@/pages/home");
          return {
            Component: module.default,
          };
        },
      },
      {
        path: "json-formatter",
        element: <JSONFormatter />,
      },
      {
        path: "/typescript-formatter",
        element: <TypeScriptFormatter />,
      },
      {
        path: "javascript-formatter",
        element: <JavaScriptFormatter />,
      },
      {
        path: "html-formatter",
        element: <HTMLFormatter />,
      },
      {
        path: "css-formatter",
        element: <CSSFormatter />,
      },
      {
        path: "scss-formatter",
        element: <SCSSFormatter />,
      },
      {
        path: "less-formatter",
        element: <LessFormatter />,
      },
      {
        path: "yaml-formatter",
        element: <YAMLFormatter />,
      },

      {
        path: "markdown-formatter",
        element: <MarkdownFormatter />,
      },
      {
        path: "css-minify",
        element: <CSSMinify />,
      },
      {
        path: "javascript-minify",
        element: <JavaScriptMinify />,
      },
      {
        path: "json-to-typescript",
        element: <JsonToTypeScript />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
