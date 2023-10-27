import Editor from "@monaco-editor/react";

interface MonacoEditorProps {
  value?: string;
  language?: string;
  onChange?: (value?: string) => void;
}

export const MonacoEditor = ({
  value,
  language,
  onChange,
}: MonacoEditorProps) => {
  return (
    <Editor
      width="100%"
      height="100%"
      language={language}
      theme="vs"
      value={value}
      loading=""
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
      }}
      onChange={onChange}
    />
  );
};
