import { Field, ErrorMessage } from "formik";

// custom input component
export function InputComponent({ name, type, label, ...args }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} {...args}></Field>
      <ErrorMessage name={name} component={"div"}></ErrorMessage>
    </div>
  );
}

// custom select component
export function SelectComponent({ name, label, selectValues }) {
  return (
    <div>
      <label htmlFor="type">{label}</label>
      <Field as="select" name={name} id={name}>
        {selectValues.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name}></ErrorMessage>
    </div>
  );
}
