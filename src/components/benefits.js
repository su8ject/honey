import { benefits } from "../static";
import { Benefit } from "./benefit";
import { ContainerWrapper } from "./containerWrapper";

export const Benefits = () => {
  return (
    <ContainerWrapper header={"Чому купувати мед саме у мене?"}>
      {benefits.map((benefit, index) => (
        <Benefit benefit={benefit} key={index} />
      ))}
    </ContainerWrapper>
  );
};
