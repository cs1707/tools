import { ChangeEventHandler, useRef } from "react";

interface SelectFileProps {
  children: React.ReactNode;
  onChange?: (value?: string) => void;
}
export const SelectFile = ({ children, onChange }: SelectFileProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        onChange?.(e.target?.result?.toString() || "");
      };
      reader.readAsText(file);
    } else {
      onChange?.("");
    }
    ref.current!.value = "";
  };
  return (
    <label>
      {children}
      <input
        type="file"
        ref={ref}
        onChange={handleChange}
        className="hidden"
      ></input>
    </label>
  );
};
