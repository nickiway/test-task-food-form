import CustomInput from "./CustomInput";
export default function DynamicFormComponent({ values }) {
  switch (values.type) {
    case "pizza":
      return (
        <>
          <CustomInput
            name={"no_of_slices"}
            type={"number"}
            label={"Number of slices"}
            hint={"Max value is 12"}
          />
          <CustomInput
            name={"diameter"}
            type={"number"}
            label={"Diameter"}
            hint={"Max value is 60"}
          />
        </>
      );
    case "soup":
      return (
        <CustomInput
          name={"spiciness_scale"}
          type={"number"}
          label={"Spiciness scale"}
          hint={"Max value is 10"}
          inputProps={{
            step: 1,
            min: 0,
            max: 10,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
          value={values.spiciness_scale}
        />
      );
    case "sandwich":
      return (
        <CustomInput
          name={"slices_of_bread"}
          type={"number"}
          label={"Slices of bread"}
          hint={"Max value is 10"}
        />
      );
    default:
      return null;
  }
}
