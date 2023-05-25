import { useState } from "react";

import CustomForm from "./CustomForm";
import Dish from "./Dish";

function App() {
  const [dish, setDish] = useState("");
  return (
    <>
      <Dish dish={dish} />
      <CustomForm setDish={setDish} />
    </>
  );
}

export default App;
