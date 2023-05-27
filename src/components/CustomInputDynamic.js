import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

import { selectSpiciness } from "../ini/initialSchema";

export default function CustomInputDynamic({ values }) {
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
        <CustomSelect
          selectValues={selectSpiciness}
          name={"spiciness_scale"}
          label={"Choose spiciness scale"}
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
