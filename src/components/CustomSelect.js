import { useField } from "formik";
import { Select, MenuItem } from "@material-ui/core";

// custom select component
export default function CustomSelect({ name, label, selectValues }) {
  const [field, meta] = useField(name);
  return (
    <div className="form__item">
      <Select
        {...field}
        className="form__select"
        type="select"
        id={name}
        displayEmpty
        value={field.value || ""}
        name={name}
        label={label}
        variant="outlined"
      >
        {selectValues.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>

      {meta.error && meta.touched && <div className="error">{meta.error}</div>}
    </div>
  );
}
