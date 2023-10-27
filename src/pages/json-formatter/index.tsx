import { PrettierLayout } from "@/components/Layout/Prettier";
import { usePageInfo } from "@/hooks/usePageInfo";

export const JSONFormatter = () => {
  const { title } = usePageInfo();
  return <PrettierLayout title={title} language="json" />;
};
