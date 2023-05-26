import { useFormikContext } from "formik";

import pizza from "../images/pizza-bc.jpg";
import soup from "../images/soup-bc.jpg";
import sandwich from "../images/sandwich-bc.jpg";
import "../scss/_dish.scss";

export default function Dish({ children }) {
  const { type } = useFormikContext().values;
  const images = { pizza, soup, sandwich };
  const background = images[type] ? images[type] : pizza;
  return (
    <div className="dish" style={{ backgroundImage: `url(${background})` }}>
      <div className="dish__form">{children}</div>
    </div>
  );
}
