import Benefit from "./benefit";
import ContainerWrapper from "./containerWrapper";

const Benefits = () => {
  return (
    <ContainerWrapper header={"Чому купувати мед саме у мене?"}>
      <Benefit
        header={"Великий досвід"}
        text={"Займаюсь бджолярством дв'ять років."}
        svgHash={"star"}
      />
      <Benefit
        header={"Натуральний мед"}
        text={"Виготовляю мед без домішок."}
        svgHash={"smile"}
      />
      <Benefit
        header={"Місце знаходження"}
        text={
          "Пасіка знаходиться в екологічно чистому місті в далі від промислових зон (Черняхівський район Житомирської області)."
        }
        svgHash={"tree"}
      />
    </ContainerWrapper>
  );
};

export default Benefits;
