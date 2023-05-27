import { TextField } from "@mui/material";
import { useField } from "formik";
import InputMask from "react-input-mask";

export default function TimeInputField({ label, name, hint, ...args }) {
  const [field, meta] = useField("preparation_time");
  const isInvalid = meta.error && meta.touched;
  const mask = [/[0-2]/, /[0-3]/, ":", /[0-5]/, /\d/, ":", /[0-5]/, /\d/];

  return (
    <>
      <InputMask mask={mask} {...field} disabled={false}>
        <TextField
          id={name}
          label={label}
          {...args}
          fullWidth
          variant="outlined"
        />
      </InputMask>
      {isInvalid ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="hint">Hint: {hint}</div>
      )}
    </>
  );
}
