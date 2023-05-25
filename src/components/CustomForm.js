import { Form, Formik, useFormikContext } from "formik";

import { InputComponent, SelectComponent } from "./CustomComponents";
import returnFieldsBasedOnType from "./returnFieldsBasedOnType";

import { validationSchema } from "../validationSchema";
import { initialSchema, selectValues } from "../initialSchema";
import { useEffect } from "react";

function submit(values) {
  const array = Object.entries(values).filter(([_, value]) => value);
  const object = Object.fromEntries(array);
  console.log(object);
}
function GetType({ setDish }) {
  const context = useFormikContext();
  const { values } = context;
  useEffect(() => {
    setDish(values.type);
  }, [values.type]);
  return null;
}
export default function CustomForm({ setDish }) {
  return (
    <Formik
      initialValues={initialSchema}
      validationSchema={validationSchema}
      onSubmit={submit}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form action="post">
            <GetType setDish={setDish} />
            <InputComponent
              name="name"
              type="text"
              label="Enter the name of dish"
              placeholder="The dish name"
            />
            <InputComponent
              name="preparation_time"
              type="time"
              label="Enter the time"
              step={1}
            />
            <SelectComponent
              selectValues={selectValues}
              name={"type"}
              label={"Enter the type of dish"}
            />
            {returnFieldsBasedOnType(values)}
            <button type="submit">Order the dish</button>
          </Form>
        );
      }}
    </Formik>
  );
}
