import { Field, ErrorMessage } from "formik";

// custom select component
export default function CustomSelect({ name, label, selectValues }) {
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
