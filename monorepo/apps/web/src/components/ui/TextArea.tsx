import React from "react";

interface TextAreaProps {
  defaultValue?: string;
  value?: string;
  rows?: number;
  resize?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  defaultValue,
  value,
  rows = 4,
  resize = false,
  onChange,
  disabled = false,
}) => {
  return (
    <textarea
      defaultValue={defaultValue}
      value={value}
      className={`border border-grey-2 text-black p-4 w-full rounded-[10px] ${resize ? 'resize' : 'resize-none'} ${disabled ? ' text-grey-3' : ''}`}
      rows={rows}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default TextArea;
