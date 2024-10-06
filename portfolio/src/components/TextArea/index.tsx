import React from "react";
import { FormikProps } from "formik";
import "./style.css";

interface TextAreaProps {
  name: string;
  placeholder: string;
  formik: FormikProps<any>;
  rows?: number;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    name,
    placeholder,
    formik,
    rows = 3,
    disabled = false,
  } = props;

  const getErrorMessage = (error: any) => {
    if (typeof error === "string") {
      return error;
    }
    return "";
  };

  return (
    <>
      <div className="position-relative">
        <textarea
          id={name}
          name={name}
          rows={rows}
          disabled={disabled}
          className={`rounded-3 textarea-auth d-block w-100 bg-transparent py-3 ${disabled ? "input-disabled" : ""}`}
          placeholder={placeholder}
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

export default TextArea;
