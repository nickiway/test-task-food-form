import { InputComponent } from "./CustomComponents";

export default function returnFieldsBasedOnType(values) {
  switch (values.type) {
    case "Pizza":
      return (
        <>
          <InputComponent
            name={"no_of_slices"}
            type={"text"}
            label={"Number of slices"}
            placeholder={0}
          />
          <InputComponent
            name={"diametr"}
            type={"text"}
            label={"Diametr"}
            placeholder={0}
          />
        </>
      );
    case "Soup":
      return (
        <InputComponent
          name={"spiciness_scale"}
          type={"range"}
          label={"Spiciness scale"}
          min={0}
          max={10}
          value={values.spiciness_scale}
        />
      );
    case "Sandwich":
      return (
        <InputComponent
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
