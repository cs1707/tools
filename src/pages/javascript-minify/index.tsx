import TransformLayout from "@/components/Layout/Transform";
import { useTransform } from "@/hooks/useTransform";

export const JavaScriptMinify = () => {
  const { input, output, setInput, error } = useTransform(async (v) => {
    const { minify } = await import("terser");
    const result = await minify(v, {});
    return result.code || "";
  });

  return (
    <div className="h-[100vh]">
      <TransformLayout
        input={input}
        output={output}
        setInput={setInput}
        error={error}
        title="JavaScript Minify"
        language="javascript"
      ></TransformLayout>
    </div>
  );
};
