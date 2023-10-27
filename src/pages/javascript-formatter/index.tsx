import { PrettierLayout } from "@/components/Layout/Prettier";
import { usePageInfo } from "@/hooks/usePageInfo";

export const JavaScriptFormatter = () => {
  const { title } = usePageInfo();
  return <PrettierLayout title={title} language="javascript" />;
};
