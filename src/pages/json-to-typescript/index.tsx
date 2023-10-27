import TransformLayout from "@/components/Layout/Transform";
import { useTransform } from "@/hooks/useTransform";
import {
  quicktype,
  jsonInputForTargetLanguage,
  InputData,
} from "quicktype-core";

export const JsonToTypeScript = () => {
  const { input, output, setInput, error } = useTransform(async (v) => {
    const jsonInput = jsonInputForTargetLanguage("typescript");
    await jsonInput.addSource({
      name: "Root",
      samples: [v],
    });
    const inputData = new InputData();
    inputData.addInput(jsonInput);
    const result = await quicktype({
      inputData,
      lang: "typescript",
      rendererOptions: {
        "just-types": "true",
      },
    });
    return result.lines.join("\n");
  });

  return (
    <div className="h-[100vh]">
      <TransformLayout
        input={input}
        output={output}
        setInput={setInput}
        error={error}
        title="JSON to TypeScript"
        language="json"
        outputLanguage="typescript"
      ></TransformLayout>
    </div>
  );
};
