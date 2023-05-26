import { useField } from "formik";
import { TextField } from "@material-ui/core";

// custom input component
export default function CustomInput({ name, type, label, hint, ...args }) {
  const [field, meta] = useField(name);

  return (
    <div className="form__item">
      <TextField
        {...field}
        id={name}
        name={name}
        type={type}
        label={label}
        variant="outlined"
        autoComplete="off"
        error={false}
        {...args}
        className="form__input"
      />
      {meta.error && meta.touched ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="hint">Hint: {hint}</div>
      )}
    </div>
  );
}
