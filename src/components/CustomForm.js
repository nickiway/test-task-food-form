import { Form, Formik } from "formik";

import { InputComponent, SelectComponent } from "./CustomComponents";
import returnFieldsBasedOnType from "./returnFieldsBasedOnType";

import { validationSchema } from "../validationSchema";
import { initialSchema, selectValues } from "../initialSchema";

function submit(values) {
  const array = Object.entries(values).filter(([, value]) => value);
  const object = Object.fromEntries(array);
  console.log(object);
}

export default function CustomForm() {
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
            <InputComponent
              name={"name"}
              type={"text"}
              label={"Enter the name of dish"}
              placeholder={"The dish name"}
            />
            <InputComponent
              name={"preparation_time"}
              type={"time"}
              label={"Enter the time"}
              step={1}
            />
            <SelectComponent
              selectValues={selectValues}
              name={"type"}
              label={"Enter the type of dish"}
            />

            {returnFieldsBasedOnType(values.type, values)}

            <button type="submit">Order the dish</button>
          </Form>
        );
      }}
    </Formik>
  );
}
