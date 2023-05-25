export const initialSchema = {
  name: "HexOcean Pizza",
  preparation_time: "00:00:15",
  type: "",

  // for pizza
  no_of_slices: "",
  diameter: "",

  // for soup
  spiciness_scale: 0,

  // for sandwich
  slices_of_bread: "",
};

// options for select
export const selectValues = [
  { value: "Chose dish type", label: "Chose dish type" },
  { value: "pizza", label: "Pizza" },
  { value: "soup", label: "Soup" },
  { value: "sandwich", label: "Sandwich" },
];
