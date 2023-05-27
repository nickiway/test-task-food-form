export const initialSchema = {
  name: "HexOcean pizza",
  preparation_time: "01:30:22",
  type: "pizza",

  // for pizza
  no_of_slices: "",
  diameter: "",

  // for soup
  spiciness_scale: 1,

  // for sandwich
  slices_of_bread: "",
};

// options for select
export const selectType = [
  { value: "pizza", label: "Pizza 🍕" },
  { value: "soup", label: "Soup 🍲" },
  { value: "sandwich", label: "Sandwich 🥪" },
];

// options for spiciness
export const selectSpiciness = [
  { value: 1, label: "Not spicy at all" },
  { value: 2, label: "Spicy level: 2" },
  { value: 3, label: "Spicy level: 3" },
  { value: 4, label: "Spicy level: 4" },
  { value: 5, label: "Medium level spicy" },
  { value: 6, label: "Spicy level: 6" },
  { value: 7, label: "Spicy level: 7" },
  { value: 8, label: "Spicy level: 8" },
  { value: 9, label: "Spicy level: 9" },
  { value: 10, label: "Extremely spicy" },
];
