import useFieldError from "../hooks/useFieldError.hook";

export default function DishPreparationTime({ preparation_time }) {
  const [values, style] = useFieldError(preparation_time);
  const time = values.preparation_time.split(":").map((item) => parseInt(item));

  return (
    <div>
      <div className={style}>
        <span>The preparation time</span>
      </div>
      <div className="dish__preperation-time">
        <p>{time[0]} hours</p>
        <p>{time[1]} minutes</p>
        <p>{time[2]} seconds</p>
      </div>
    </div>
  );
}
