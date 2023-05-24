import * as Yup from "yup";

export const validationSchema = Yup.object({}).shape({
  // for name
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Name is required"),

  // for time
  preparation_time: Yup.string()
    .matches(/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/, "Invalid time format")
    .required("Preparation time is required")
    .typeError("Enter the time in the format hh:mm:ss"),

  // for select
  type: Yup.string()
    .oneOf(["Pizza", "Soup", "Sandwich"], "Choose one of the options")
    .required("Type is required"),

  // for pizza
  no_of_slices: Yup.number().when("type", {
    is: (type) => type === "Pizza",
    then: () =>
      Yup.number()
        .min(4, "Number of slices must be greater than 3")
        .required("Number of slices is required")
        .typeError("Number of slices must be a number"),
  }),

  // for pizza
  diametr: Yup.number().when("type", {
    is: (type) => type === "Pizza",
    then: () =>
      Yup.number()
        .min(10, "Diametr must be greater than 10")
        .required("Diametr is required")
        .typeError("Diametr must be a number"),
  }),

  // for soup
  spiciness_scale: Yup.number().when("type", {
    is: (type) => type === "Soup",
    then: () =>
      Yup.number()
        .min(0, "Value must be greater than or equal to 0")
        .max(10, "Value must be less than or equal to 10")
        .required("Range field is required")
        .typeError("Range must be a number"),
  }),

  // for sandwich
  slices_of_bread: Yup.number().when("type", {
    is: (type) => type === "Sandwich",
    then: () =>
      Yup.number()
        .min(1, "Number of slices must be greater than 0")
        .max(10, "Number of slices must be less than 10")
        .required("Number of slices is required")
        .typeError("Number of slices must be a number"),
  }),
});
