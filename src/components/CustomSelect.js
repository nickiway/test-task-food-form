import { useField } from "formik";
import { Select, MenuItem } from "@material-ui/core";

// custom select component
export default function CustomSelect({ name, label, selectValues }) {
  const [field, meta] = useField(name);
  const isInvalid = meta.error && meta.touched;

  return (
    <div className="form__item">
      <Select
        {...field}
        className="form__select"
        variant="outlined"
        displayEmpty
      >
        {selectValues.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>

      {isInvalid ? (
        <div className="error">{meta.error}</div>
      ) : (
        <div className="hint">Hint: {label}</div>
      )}
    </div>
  );
}
