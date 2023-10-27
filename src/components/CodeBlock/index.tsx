import Editor from "@monaco-editor/react";

interface CodeBlockProps {
  value?: string;
  language?: string;
}
export const CodeBlock = ({ value, language }: CodeBlockProps) => {
  return (
    <Editor
      width="100%"
      height="100%"
      language={language}
      theme="vs-light"
      value={value}
      options={{
        renderLineHighlight: "none",
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 6,
        },
        overviewRulerBorder: false,
        wordWrap: "on",
        readOnly: true,
      }}
    />
  );
};
