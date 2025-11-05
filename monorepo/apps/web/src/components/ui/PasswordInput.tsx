"use client";

import React, { useState, useMemo } from 'react';
import TextInput from './TextInput';

interface PasswordRequirement {
  label: string;
  validator: (password: string) => boolean;
}

interface PasswordInputProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  showForgotPassword?: boolean;
  onForgotPasswordClick?: () => void;
  forgotPasswordText?: string;
  showRequirements?: boolean;
  requirements?: PasswordRequirement[];
}

const defaultRequirements: PasswordRequirement[] = [
  {
    label: 'At least 8 characters',
    validator: (pwd) => pwd.length >= 8,
  },
  {
    label: 'Contains uppercase letter',
    validator: (pwd) => /[A-Z]/.test(pwd),
  },
  {
    label: 'Contains lowercase letter',
    validator: (pwd) => /[a-z]/.test(pwd),
  },
  {
    label: 'Contains number',
    validator: (pwd) => /[0-9]/.test(pwd),
  },
  {
    label: 'Contains special character',
    validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
  },
];

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  placeholder,
  required = false,
  value = '',
  onChange,
  name,
  id,
  disabled = false,
  error,
  className = '',
  labelClassName = '',
  inputClassName = '',
  showForgotPassword = false,
  onForgotPasswordClick,
  forgotPasswordText = 'Forgot password?',
  showRequirements = false,
  requirements = defaultRequirements,
}) => {
  const requirementStatus = useMemo(() => {
    return requirements.map((req) => ({
      ...req,
      met: req.validator(value),
    }));
  }, [value, requirements]);

  return (
    <div className={className}>
    <TextInput
    label={label}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    name={name}
    id={id}
    disabled={disabled}
    error={error}
    labelClassName={labelClassName}
    inputClassName={inputClassName}
    hideToggle={true}
    className={showForgotPassword ? '' : undefined}
    />
      {showForgotPassword && (
        <div className="flex justify-end items-center mt-1.5">
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="cursor-pointer text-xs text-grey-3 font-semibold underline underline-grey-3 hover:text-black focus:outline-none"
          >
            {forgotPasswordText}
          </button>
        </div>
      )}
      {showRequirements && (
        <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-700 mb-2">Password requirements:</p>
          <ul className="space-y-1">
            {requirementStatus.map((req, index) => (
              <li key={index} className="flex items-center gap-2 text-xs">
                {req.met ? (
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
                <span className={req.met ? 'text-gray-700' : 'text-gray-500'}>
                  {req.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;