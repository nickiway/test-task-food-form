import { useState } from "react";

import CustomForm from "./CustomForm";
import Dish from "./Dish";
import ErrorComponent from "./ErrorComponent";

import "../scss/_app.scss";
import "../scss/_base.scss";
function App() {
  const [foodType, setFoodType] = useState("");
  const [error, setError] = useState({
    isOk: true,
    status: 200,
    message: "",
  });

  return (
    <div className="container">
      <div className="align">
        <div className="content-block align">
          <Dish foodType={foodType} />
          <CustomForm setFoodType={setFoodType} setError={setError} />
        </div>
      </div>
      <ErrorComponent error={error} />
    </div>
  );
}

export default App;
