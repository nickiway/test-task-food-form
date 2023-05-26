import { useField } from "formik";

import { Field, ErrorMessage } from "formik";

// custom select component
export default function CustomSelect({ name, label, selectValues }) {
  const [_, meta] = useField(name);
  const styles =
    "form__select" + (meta.error && meta.touched ? " form__select_error" : "");

  return (
    <div className="form__item">
      <div className="label__container">
        <label htmlFor="type">{label}</label>
      </div>
      <Field className={styles} as="select" name={name} id={name}>
        {selectValues.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </Field>
      <ErrorMessage
        name={name}
        className="error__title"
        component={"div"}
      ></ErrorMessage>
    </div>
  );
}
