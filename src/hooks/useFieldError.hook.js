import { useField, useFormikContext } from "formik";

export default function useFieldError(field) {
  const { values } = useFormikContext();
  const [, meta] = useField(field);
  const style = meta.error && meta.touched ? "dish__field--error" : "";

  return [values, style];
}
