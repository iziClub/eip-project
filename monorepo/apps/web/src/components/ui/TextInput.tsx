import React, { useState } from 'react';

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  name?: string;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  labelClassName?: "small" | "large";
  inputClassName?: string;
  hideToggle?: boolean;
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  required = false,
  defaultValue,
  value,
  onChange,
  type = 'text',
  name,
  id,
  disabled = false,
  error,
  className = '',
  labelClassName = '',
  inputClassName = '',
  hideToggle = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const inputType = hideToggle ? (isVisible ? 'text' : 'password') : type;

  return (
    <div className={`relative flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`${labelClassName === 'small' ? 'text-sm font-medium' : ''} ${labelClassName === 'large' ? 'text-base font-semibold' : ''} text-black`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          defaultValue={defaultValue}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={!onChange}
          required={required}
          disabled={disabled}
          className={`
            w-full p-4 
            border border-grey-2 rounded-[10px] placeholder:text-grey-3 ${disabled ? "text-grey-3" : "text-black"}
            focus:outline-none focus:ring-2 focus:ring-grey-3 focus:border-transparent
            disabled:cursor-not-allowed
            ${error ? 'border-error-primary bg-error-secondary focus:ring-error-primary' : ''}
            ${hideToggle ? 'pr-12' : ''}
            ${inputClassName}
          `}
        />
        {hideToggle && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            disabled={disabled}
          >
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;