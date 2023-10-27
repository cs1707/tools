import { CodeBlock } from "@/components/CodeBlock";
import { CopyButton } from "@/components/CopyButton";
import { MonacoEditor } from "@/components/MonacoEditor";
import { SelectFile } from "@/components/SelectFile";
import { Tooltip } from "@primer/react";
import { useSize } from "ahooks";
import { ReactNode, useMemo } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface TransformLayoutProps {
  input?: string;
  setInput: (v: string) => void;
  output?: string;
  error?: string;
  title: ReactNode;
  language: string;
  outputLanguage?: string;
}

export default function TransformLayout({
  input,
  setInput,
  output,
  error,
  title,
  language,
  outputLanguage,
}: TransformLayoutProps) {
  const size = useSize(document.body);
  const direction = useMemo(() => {
    if (size?.width && size.width >= 640) {
      return "horizontal";
    }
    return "vertical";
  }, [size?.width]);

  return (
    <PanelGroup direction={direction}>
      <Panel defaultSize={50} minSize={30}>
        <div className="h-full flex flex-col">
          <div className="px-[16px] py-[12px] border-b border-b-light-50 flex items-center h-[52px]">
            <h1 className="p-0 m-0 mr-auto font-semibold">{title}</h1>
            <div className="flex gap-[16px] justify-end">
              <Tooltip text="Select a file" direction="s" noDelay>
                <SelectFile
                  onChange={(v) => {
                    setInput(v || "");
                  }}
                >
                  <i className="bi bi-arrow-up-square cursor-pointer"></i>
                </SelectFile>
              </Tooltip>
              <Tooltip text="Clear" direction="s" noDelay>
                <i
                  onClick={() => {
                    setInput("");
                  }}
                  className="bi bi-trash cursor-pointer"
                ></i>
              </Tooltip>
            </div>
          </div>
          <div className="flex-1 min-h-0 p-[8px]">
            <MonacoEditor
              value={input}
              onChange={(v) => {
                setInput(v || "");
              }}
              language={language}
            />
          </div>
        </div>
      </Panel>
      <PanelResizeHandle className="hidden w-[1px] h-full border-l border-light-50 sm:block" />
      <Panel defaultSize={50} minSize={30}>
        <div className="h-full flex flex-col">
          <div className="px-[16px] py-[12px] pr-[24px] border-b border-b-light-50 flex items-center h-[52px]">
            <div className="p-0 m-0 mr-auto font-semibold">Output</div>
            <div className="flex gap-[16px] justify-end">
              {output ? (
                <CopyButton
                  value={output}
                  tooltipProps={{
                    direction: "s",
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="flex-1 min-h-0 p-[8px]">
            {error ? (
              <div className="border-[2px] border-[#f56c6c] rounded-lg p-6 text-[#f56c6c] bg-[#fef0f0] text-[12px]">
                <pre>{error}</pre>
              </div>
            ) : output ? (
              <CodeBlock value={output} language={outputLanguage || language} />
            ) : null}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  );
}
