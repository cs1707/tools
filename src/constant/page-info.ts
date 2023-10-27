import { keyBy, sortBy } from "lodash-es";

export const tools = sortBy(
  [
    {
      path: "/json-formatter",
      title: "JSON Formatter",
      description:
        "An online JSON formatter is a helpful tool that can quickly and easily format JSON data in a readable and organized format.",
    },
    {
      path: "/typescript-formatter",
      title: "Typescript Formatter",
      description:
        "An online Typescript Formatter is a tool used to automatically format and organize your Typescript code, making it more readable and consistent. ",
    },
    {
      path: "/javascript-formatter",
      title: "JavaScript formatter",
      description:
        "An online JavaScript formatter is a tool that helps you format and beautify your JavaScript code for improved readability. ",
    },
    {
      path: "/html-formatter",
      title: "HTML Formatter",
      description:
        "An online HTML Formatter is a tool that helps you beautify and format your HTML code for better readability and organization. Use this HTML formatter to easily clean up your code and make it more visually appealing.",
    },
    {
      path: "/css-formatter",
      title: "CSS Formatter",
      description:
        "A CSS formatter is a tool or software that helps you automatically format your CSS code, making it more readable and consistent.",
    },
    {
      path: "/scss-formatter",
      title: "SCSS Formatter",
      description:
        "An SCSS formatter is a helpful tool that automatically formats your SCSS (Sassy CSS) code to improve readability and consistency. ",
    },
    {
      path: "/less-formatter",
      title: "Less Formatter",
      description:
        "Less Formatter is a tool used to format Less (Leaner CSS) code for better readability and maintainability. ",
    },

    {
      path: "/yaml-formatter",
      title: "YAML Formatter",
      description:
        "A YAML formatter is a tool that allows you to format your YAML code in a more readable and organized way. This page provides information on how to use a YAML formatter and its benefits for writing clean and maintainable YAML files.",
    },
    {
      path: "/markdown-formatter",
      title: "Markdown Formatter",
      description:
        "A Markdown formatter is a tool designed to format and style Markdown text into a visually appealing and organized format. Learn how to use a Markdown formatter to enhance your documents and make them more readable and presentable.",
    },

    {
      path: "/css-minify",
      title: "CSS Minify",
      description:
        "CSS minification is the process of removing unnecessary characters and spaces from your CSS code to make it more compact. This helps improve website loading times and overall performance. ",
    },

    {
      path: "/javascript-minify",
      title: "JavaScript Minify",
      description:
        "JavaScript minification is the process of reducing the size of JavaScript code by removing unnecessary characters and spaces. Learn how to minify your JavaScript code for improved website performance and faster loading times.",
    },

    {
      path: "/json-to-typescript",
      title: "JSON to TypeScript",
      description:
        "Converting JSON to TypeScript can help improve code organization and type safety. Learn the different methods and tools available to perform this conversion effectively and efficiently.",
    },
  ],
  "title"
);

const home = {
  path: "/",
  title: "FE Tools",
  description: "A collection of useful tools for developers and creators.",
};

export const routeList = [...tools, home];

export const routeDict = keyBy(routeList, "path");
