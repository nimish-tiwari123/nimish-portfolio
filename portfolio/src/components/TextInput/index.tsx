import React from "react";
import { FormikProps } from "formik";
import "./style.css";

interface TextInputProps {
  name: string;
  placeholder: string;
  formik: FormikProps<any>;
  type?: string;
  disabled?: boolean;
  icon?:any;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    name,
    placeholder,
    formik,
    type = "text",
    disabled = false,
    icon = false
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
  {icon ? 
 <span className="custom-primary-f position-absolute auth-icon ms-3"> {icon}</span>:""  
}

     
     <input
       type={type}
       id={name}
       name={name}
       disabled={disabled}
       className={`${icon ? "rounded-3 input-auth ps-5" : "rounded-3 input-auth1"} d-block py-3 bg-transparent w-100 ${disabled ? "input-disabled" : ""}`}
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

export default TextInput;
