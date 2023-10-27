import TransformLayout from "@/components/Layout/Transform";
import { useTransform } from "@/hooks/useTransform";
import { cssMinify } from "./utils";

export const CSSMinify = () => {
  const { input, output, setInput, error } = useTransform(
    async (input?: string) => {
      if (!input) {
        return "";
      }
      const result = await cssMinify(input);
      return result.css;
    }
  );

  return (
    <div className="h-[100vh]">
      <TransformLayout
        input={input}
        output={output}
        setInput={setInput}
        error={error}
        title="CSS Minify"
        language="css"
      ></TransformLayout>
    </div>
  );
};
