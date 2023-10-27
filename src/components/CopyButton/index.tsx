import { Tooltip } from "@primer/react";
import { useMemo, useState } from "react";

interface CopyButtonProps {
  value: string;
  tooltipProps?: React.ComponentProps<typeof Tooltip>;
}
export const CopyButton = ({ value, tooltipProps }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const text = useMemo(() => {
    if (copied) {
      return "Copied!";
    }
    return "Copy";
  }, [copied]);

  return (
    <Tooltip text={text} noDelay {...tooltipProps}>
      <i className="bi bi-copy cursor-pointer" onClick={handleClick}></i>
    </Tooltip>
  );
};
