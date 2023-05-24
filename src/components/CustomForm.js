import { Form, Formik } from "formik";

import { InputComponent, SelectComponent } from "./CustomComponents";
import ReturnFieldsBasedOnType from "./ReturnFieldsBasedOnType";

import { validationSchema } from "../validationSchema";
import { initialSchema, selectValues } from "../initialSchema";

function submit(values) {
  console.log(+values.no_of_slices);
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

            <ReturnFieldsBasedOnType type={values.type} values={values} />
            <button type="submit">Order the dish</button>
          </Form>
        );
      }}
    </Formik>
  );
}
