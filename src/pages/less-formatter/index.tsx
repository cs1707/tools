import { PrettierLayout } from "@/components/Layout/Prettier";
import { usePageInfo } from "@/hooks/usePageInfo";

export const LessFormatter = () => {
  const { title } = usePageInfo();
  return <PrettierLayout title={title} language="less" />;
};
