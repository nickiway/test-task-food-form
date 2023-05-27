import { Formik } from "formik";

import { validationSchema } from "../ini/validationSchema";
import { initialSchema } from "../ini/initialSchema";
import onSubmit from "../service/service";

import CustomForm from "./CustomForm";
import Dish from "./Dish";

import "../scss/_app.scss";
import "../scss/_base.scss";
import "../scss/_media.scss";

function App() {
  return (
    <Formik
      initialValues={initialSchema}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
      validateOnChange={true}
      enableReinitialize
    >
      <div className="container ">
        <div className="content-block d-flex justify-content-center  align-items-center">
          <Dish>
            <CustomForm />
          </Dish>
        </div>
      </div>
    </Formik>
  );
}

export default App;
