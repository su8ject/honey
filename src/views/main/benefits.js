import { benefits } from "../../static";
import { ContainerWrapper } from "../../components/containerWrapper";
import { Benefit } from "./benefit";

export const Benefits = () => {
  return (
    <ContainerWrapper header={"Чому купувати мед саме у мене?"}>
      {benefits.map((benefit, index) => (
        <Benefit benefit={benefit} key={index} />
      ))}
    </ContainerWrapper>
  );
};
