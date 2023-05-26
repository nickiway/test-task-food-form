import { useFormikContext } from "formik";

import DishField from "./DishField";
import DishPreparationTime from "./DishPreparationTime";

import "../scss/_dish.scss";
import pizza from "../images/pizza.png";
import soup from "../images/soup.png";
import sandwich from "../images/sandwich.png";
import dish from "../images/dish.png";

export default function Dish() {
  const { type, name, preparation_time } = useFormikContext().values;

  const image = { pizza, soup, sandwich }[type]
    ? { pizza, soup, sandwich }[type]
    : dish;

  const dishName = name ? `"${name}"` : "My dish name";
  return (
    <div className="dish">
      <div className="d-flex">
        <div className="dish__image">
          <img src={image} alt={type} />
        </div>
        <div className="dish__container align">
          <div>
            <h2 className="dish__title">{dishName}</h2>

            {/* <DishField
              field={"name"}
              name={"My dish name "}
              message={"Enter correct name"}
            /> */}
            <DishPreparationTime preparation_time={preparation_time} />
            <DishField
              field={"type"}
              name={"The type of dish "}
              message={"Enter the dish type"}
            />
            <View type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Compare this snippet from src/components/DynamicFormComponent.js
function View({ type }) {
  switch (type) {
    case "pizza":
      return (
        <>
          <DishField
            field={"diameter"}
            name={"The pizza diametr "}
            message={"The pizza diametr should be between 10 and 60"}
          />
          <DishField
            field={"no_of_slices"}
            name={"The number of slices "}
            message={"The number of slices should be between 3 and 12"}
          />
        </>
      );
    case "soup":
      return (
        <>
          <DishField
            field={"spiciness_scale"}
            name={"Soup spice level "}
            message={"The spice level should be between 1 and 10"}
          />
        </>
      );
    case "sandwich":
      return (
        <>
          <DishField
            field={"slices_of_bread"}
            name={"Sandwich number of bread slices "}
            message={"The number of slices should be between 1 and 10"}
          />
        </>
      );
    default:
      return null;
  }
}
