import { useField } from "formik";
import { TextField } from "@mui/material";

// custom input component
export default function CustomInput({ name, type, label, hint, ...args }) {
  const [field, meta] = useField(name);
  const isInvalid = meta.error && meta.touched;

  return (
    <div className="form__item">
      <TextField
        {...field}
        type={type}
        label={isInvalid ? "" : label}
        variant="outlined"
        error={meta.error && meta.touched}
        {...args}
        className="form__input"
      />
      {isInvalid ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="hint">Hint: {hint}</div>
      )}
    </div>
  );
}
