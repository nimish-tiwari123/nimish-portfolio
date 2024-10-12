import React from "react";
import { FormikProps } from "formik";

interface SelectFieldProps {
    label:string;
    optional?: boolean;
  name: string;
  placeholder: string;
  formik: FormikProps<any>;
  options: Array<{ label: string; value: string }>;
  disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
  const { label, optional, name, placeholder, formik, options, disabled = false } = props;

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    }
    return "";
  };

  return (
    <>
      <div className="position-relative">
      <label htmlFor={name} className="form-label fw-medium mt-3">
          {label} {optional &&
          <span className="text-secondary fw-light">
          (optional)
        </span>}
        </label>
        <select
          id={name}
          name={name}
          disabled={disabled}
          className={`rounded-3 input-auth d-block w-100 bg-transparent py-3 px-3 ${disabled ? "input-disabled" : ""}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name] || ""}
          style={{
            border: `1.5px solid ${
              formik.touched[name] && formik.errors[name]
                ? "rgb(200, 23, 23)"
                : "#E3E3E3"
            }`,
          }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {formik.touched[name] && formik.errors[name] ? (
          <div className="text-danger error err1">
            {getErrorMessage(formik.errors[name])}
          </div>
        ) : (
          <div className="error2 err1"></div>
        )}
      </div>
    </>
  );
};

export default SelectField;
