import React from 'react';
// import { FormikProps } from 'formik';

interface Option {
  value: string | number;
  label: string;
}

interface Option {
  value: string | number;
  label: string;
}

export interface BaseInputProps {
  name: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'select';
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string | false | undefined;
  touched?: boolean;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  options?: Option[];
}

const BaseInput = React.forwardRef<HTMLInputElement | HTMLSelectElement, BaseInputProps>(({
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required,
  disabled,
  icon,
  className,
  options
}, ref) => {
  


  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}

        {type === 'select' ? (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            id={name}
            name={name}
            className={`
              block w-full pl-10 pr-3 py-2.5
              bg-gray-50 border border-gray-300 rounded-lg
              text-gray-900 text-sm
              transition-colors duration-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed
              ${error && touched ? 'border-red-300 ring-1 ring-red-300' : ''}
              ${className || ''}
            `}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            id={name}
            name={name}
            className={`
              block w-full pl-10 pr-3 py-2.5
              bg-gray-50 border border-gray-300 rounded-lg
              text-gray-900 text-sm
              transition-colors duration-200
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed
              ${error && touched ? 'border-red-300 ring-1 ring-red-300' : ''}
              ${className || ''}
            `}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
          />
        )}
      </div>

      {error && touched && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

BaseInput.displayName = 'BaseInput';

export default BaseInput;