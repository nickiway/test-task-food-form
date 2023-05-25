import { InputComponent } from "./CustomComponents";

const renderFormComponent = (name, type, label, additionalProps = {}) => {
  return (
    <InputComponent
      name={name}
      type={type}
      label={label}
      {...additionalProps}
    />
  );
};

export default renderFormComponent;
