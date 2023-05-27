import { Field, Form, useFormikContext } from "formik";

import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import CustomDynamic from "./CustomDynamic";

import { selectType } from "../ini/initialSchema";

import "../scss/_form.scss";

export default function CustomForm() {
  const { values } = useFormikContext();

  return (
    <Form className="form__body" action="post">
      <h2 align="center">Create a new dish</h2>
      <p className="form__subtitle">Enter all the required fields</p>
      <hr className="form__separator" />
      <CustomInput
        name="name"
        type="text"
        label="Enter the name of dish"
        hint="Max length is 100 characters"
      />
      <CustomInput
        name="preparation_time"
        type="time"
        label="Enter the preparation time"
        hint="Format: hh:mm:ss"
        inputProps={{
          step: 1,
          format: "HH:mm:ss",
        }}
      />
      <CustomSelect
        selectValues={selectType}
        name={"type"}
        label={"Choose the type of dish"}
      />
      <CustomDynamic values={values} />
      <div className="form__item">
        <Field as="button" className="form__button" type="submit">
          Submit my order
        </Field>
      </div>
    </Form>
  );
}
