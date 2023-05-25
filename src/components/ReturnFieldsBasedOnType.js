import renderFormComponent from "./renderFormComponent";

export default function returnFieldsBasedOnType(type, values) {
  switch (type) {
    case "Pizza":
      return (
        <>
          {renderFormComponent("no_of_slices", "text", "Number of slices", {
            placeholder: 0,
          })}
          {renderFormComponent("diametr", "text", "Diametr", {
            placeholder: 0,
          })}
        </>
      );
    case "Soup":
      return (
        <>
          {renderFormComponent("spiciness_scale", "range", "Spiciness scale", {
            min: 0,
            max: 10,
            value: values.spiciness_scale ?? 0,
          })}
        </>
      );
    case "Sandwich":
      return renderFormComponent("slices_of_bread", "text", "Slices of bread", {
        placeholder: 0,
      });
    default:
      return null;
  }
}
