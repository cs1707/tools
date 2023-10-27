import { useLocalStorageState, useRequest } from "ahooks";
import { useLocation } from "react-router-dom";

export const useTransform = (transform: (input: string) => Promise<string>) => {
  const { pathname } = useLocation();
  const [input, setInput] = useLocalStorageState<string>(pathname, {
    defaultValue: "",
  });
  // console.log(pathname, input);

  const { data, error, loading } = useRequest(
    async () => {
      if (!input) {
        return "";
      }
      return transform(input);
    },
    {
      refreshDeps: [input],
    }
  );

  return {
    input,
    setInput,
    loading,
    output: loading ? "" : data,
    error: loading ? "" : error?.message,
  };
};
