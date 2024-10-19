import React from "react";
import Select from "react-select";
import { FormikProps } from "formik";
import "./style.css";

interface MultiSelectFieldProps {
  label: string;
  optional?: boolean;
  name: string;
  placeholder: string;
  formik: FormikProps<any>;
  options: Array<{ label: string; value: string }>;
  disabled?: boolean;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = (props) => {
  const { label, optional, name, placeholder, formik, options, disabled = false } = props;

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    }
    return "";
  };

  const handleChange = (selectedOptions: any) => {
    const values = selectedOptions ? selectedOptions.map((option: any) => option.value) : [];
    formik.setFieldValue(name, values);
  };

  return (
    <>
      <div className="position-relative">
        <label htmlFor={name} className="form-label fw-medium mt-3">
          {label} {optional && (
            <span className="text-secondary fw-light">(optional)</span>
          )}
        </label>
        <Select
          id={name}
          name={name}
          isMulti
          options={options}
          isDisabled={disabled}
          placeholder={placeholder}
          classNamePrefix="react-select"
          onChange={handleChange}
          onBlur={() => formik.setFieldTouched(name, true)}
          value={options.filter(option => formik.values[name]?.includes(option.value))}
         
        />
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

export default MultiSelectField;
