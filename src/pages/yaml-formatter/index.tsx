import { PrettierLayout } from "@/components/Layout/Prettier";
import { usePageInfo } from "@/hooks/usePageInfo";

export const YAMLFormatter = () => {
  const { title } = usePageInfo();
  return <PrettierLayout title={title} language="yaml" />;
};
