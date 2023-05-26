import { Field, Form, Formik, useFormikContext } from "formik";
import { useEffect } from "react";

import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import DynamicFormComponent from "./DynamicFormComponent";

import { validationSchema } from "../ini/validationSchema";
import { initialSchema, selectValues } from "../ini/initialSchema";
import onSubmit from "../service/service";

import "../scss/_form.scss";

export default function CustomForm({ setFoodType, setError }) {
  console.log("render");
  return (
    <Formik
      initialValues={initialSchema}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values, setError)}
      enableReinitialize
    >
      {({ values }) => {
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
                Order the dish
              </Field>
            </div>
            <DishType setFoodType={setFoodType} />
          </Form>
        );
      }}
    </Formik>
  );
}

function DishType({ setFoodType }) {
  const context = useFormikContext();
  const { values } = context;

  useEffect(() => {
    setFoodType(() => values.type.toLowerCase());
  }, [values.type]);

  return null;
}
