import "../scss/_dish.scss";
export default function Dish({ foodType }) {
  return (
    <div className="dish__container">
      <h2>Your current order is :{foodType}</h2>
    </div>
  );
}
