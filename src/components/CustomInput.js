import { useField } from "formik";

import { Field, ErrorMessage } from "formik";

import "../scss/_errors.scss";

// custom input component
export default function CustomInput({ name, type, label, ...args }) {
  const [field, meta] = useField(name);
  const styles =
    "form__input" + (meta.error && meta.touched ? " form__input_error" : "");

  return (
    <div className="form__item">
      <div className="label__container">
        <label htmlFor={name}>{label}</label>
      </div>
      <Field
        className={styles}
        id={name}
        name={name}
        type={type}
        {...args}
      ></Field>
      <ErrorMessage
        className="error__title"
        name={name}
        component={"div"}
      ></ErrorMessage>
    </div>
  );
}
