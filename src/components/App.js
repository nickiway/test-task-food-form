import { useState } from "react";

import CustomForm from "./CustomForm";
import Dish from "./Dish";
import ErrorReport from "./ErrorReport";

function App() {
  const [dish, setDish] = useState("");
  const [error, setError] = useState({
    isOk: false,
    status: 200,
    message: "",
  });
  return (
    <>
      <Dish dish={dish} />
      <CustomForm setDish={setDish} setError={setError} />
      <ErrorReport error={error} />
    </>
  );
}

export default App;
