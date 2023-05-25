import { Form, Formik, useFormikContext } from "formik";
import { useEffect } from "react";

import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import DynamicFormComponent from "./DynamicFormComponent";

import { validationSchema } from "../ini/validationSchema";
import { initialSchema, selectValues } from "../ini/initialSchema";
import submit from "../service/service";

export default function CustomForm({ setDish, setError }) {
  return (
    <Formik
      initialValues={initialSchema}
      validationSchema={validationSchema}
      onSubmit={(values) => submit(values, setError)}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form action="post">
            <CustomInput
              name="name"
              type="text"
              label="Enter the name of dish"
              placeholder="The dish name"
            />
            <CustomInput
              name="preparation_time"
              type="time"
              label="Enter the time"
              step={1}
            />
            <CustomSelect
              selectValues={selectValues}
              name={"type"}
              label={"Enter the type of dish"}
            />
            <DynamicFormComponent values={values} />
            <button type="submit">Order the dish</button>
            <DishType setDish={setDish} />
          </Form>
        );
      }}
    </Formik>
  );
}

function DishType({ setDish }) {
  const context = useFormikContext();
  const { values } = context;

  useEffect(() => {
    setDish(() => values.type);
  }, [values.type]);

  return null;
}
