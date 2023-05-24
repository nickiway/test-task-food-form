import { InputComponent } from "./CustomComponents";

const RenderFormComponent = (name, type, label, additionalProps = {}) => {
  return (
    <InputComponent
      name={name}
      type={type}
      label={label}
      {...additionalProps}
    />
  );
};

export default RenderFormComponent;
