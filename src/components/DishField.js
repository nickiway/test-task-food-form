import useFieldError from "../hooks/useFieldError.hook";

export default function DishField({ field, name }) {
  const [values, style] = useFieldError(field);

  return (
    <div className="dish__field">
      <div className={style}>
        <p>{name}:</p>
        <p>{values[field]}</p>
      </div>
    </div>
  );
}
