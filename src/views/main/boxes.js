import { ContainerWrapper } from "./containerWrapper";
import { Box } from "./box";

export const Boxes = ({ type, array, header }) => {
  return (
    <ContainerWrapper header={header}>
      {array.map((item, index) => (
        <Box item={item} type={type} key={index} />
      ))}
    </ContainerWrapper>
  );
};
