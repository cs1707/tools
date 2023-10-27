import TransformLayout from "@/components/Layout/Transform";
import { useTransform } from "@/hooks/useTransform";
import { prettierFormat } from "@/utils/prettier";

export const PrettierLayout = ({
  title,
  language,
}: {
  title?: string;
  language: Parameters<typeof prettierFormat>[1];
}) => {
  const { input, output, setInput, error } = useTransform((v) => {
    return prettierFormat(v, language);
  });

  return (
    <>
      <div className="h-[100vh]">
        <TransformLayout
          input={input}
          output={output}
          setInput={setInput}
          error={error}
          title={title}
          language={language}
        ></TransformLayout>
      </div>
    </>
  );
};
