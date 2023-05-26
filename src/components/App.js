import { useState } from "react";
import { Formik } from "formik";

import { validationSchema } from "../ini/validationSchema";
import { initialSchema } from "../ini/initialSchema";
import onSubmit from "../service/service";

import CustomForm from "./CustomForm";
import Dish from "./Dish";
import ErrorComponent from "./ErrorComponent";

import "../scss/_app.scss";
import "../scss/_base.scss";

function App() {
  const [error, setError] = useState({
    isOk: true,
    status: 200,
    message: "",
  });

  return (
    <Formik
      initialValues={initialSchema}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values, setError)}
      validateOnChange={true}
      enableReinitialize
    >
      <div className="container">
        <div className="container__wrapper">
          <div className="content-block d-flex">
            <Dish />
            <CustomForm setError={setError} />
          </div>
        </div>
        <ErrorComponent error={error} />
      </div>
    </Formik>
  );
}

export default App;
