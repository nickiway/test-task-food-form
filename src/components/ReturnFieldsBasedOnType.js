import RenderFormComponent from "./RenderFormComponent";

export default function ReturnFieldsBasedOnType({ type, values }) {
  switch (type) {
    case "Pizza":
      return (
        <>
          {RenderFormComponent("no_of_slices", "text", "Number of slices", {
            placeholder: 0,
          })}
          {RenderFormComponent("diametr", "text", "Diametr", {
            placeholder: 0,
          })}
        </>
      );
    case "Soup":
      return (
        <>
          {RenderFormComponent("spiciness_scale", "range", "Spiciness scale", {
            min: 0,
            max: 10,
            value: values.spiciness_scale ?? 0,
          })}
        </>
      );
    case "Sandwich":
      return RenderFormComponent("slices_of_bread", "text", "Slices of bread", {
        placeholder: 0,
      });
    default:
      return null;
  }
}
