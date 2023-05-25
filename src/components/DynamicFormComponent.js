import CustomInput from "./CustomInput";

export default function DynamicFormComponent({ values }) {
  switch (values.type) {
    case "pizza":
      return (
        <>
          <CustomInput
            name={"no_of_slices"}
            type={"text"}
            label={"Number of slices"}
            placeholder={0}
          />
          <CustomInput
            name={"diameter"}
            type={"text"}
            label={"Diametr"}
            placeholder={0}
          />
        </>
      );
    case "soup":
      return (
        <CustomInput
          name={"spiciness_scale"}
          type={"range"}
          label={"Spiciness scale"}
          min={0}
          max={10}
          value={values.spiciness_scale}
        />
      );
    case "sandwich":
      return (
        <CustomInput
          name={"slices_of_bread"}
          type={"text"}
          label={"Slices of bread"}
          placeholder={0}
        />
      );
    default:
      return null;
  }
}
