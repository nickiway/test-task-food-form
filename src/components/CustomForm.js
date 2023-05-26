import { Field, Form, useFormikContext } from "formik";

import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import DynamicFormComponent from "./DynamicFormComponent";

import { selectValues } from "../ini/initialSchema";

import "../scss/_form.scss";

export default function CustomForm() {
  const { values } = useFormikContext();

  return (
    <Form className="form__body" action="post">
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

      <div className="form__item">
        <Field as="button" className="form__button" type="submit">
          Submit my order
        </Field>
      </div>
    </Form>
  );
}
