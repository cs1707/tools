import { PrettierLayout } from "@/components/Layout/Prettier";
import { usePageInfo } from "@/hooks/usePageInfo";

export const CSSFormatter = () => {
  const { title } = usePageInfo();
  return <PrettierLayout title={title} language="css" />;
};
