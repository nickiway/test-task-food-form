import { Field, ErrorMessage } from "formik";

// custom input component
export default function CustomInput({ name, type, label, ...args }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} {...args}></Field>
      <ErrorMessage name={name} component={"div"}></ErrorMessage>
    </div>
  );
}
