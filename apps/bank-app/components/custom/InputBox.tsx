import { Input } from "../ui/input";

interface InputBoxProps {
  icon: React.ReactNode;
  onChange: (value: string) => void;
  type: "text" | "number";
  placeholder: string;
  value?: string;
}
export function InputBox({
  icon,
  onChange,
  type,
  placeholder,
  value,
}: InputBoxProps) {
  return (
    <div className="w-full relative">
      <span className="absolute left-2 bottom-2">{icon}</span>
      <Input
        {...(value !== undefined && { value })}
        className="pl-8 focus-visible:border-2 focus-visible:border-red-700 placeholder:font-light font-bold text-slate-800"
        placeholder={placeholder}
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
