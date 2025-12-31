import { ContainerWrapper } from "./containerWrapper";
import { Box } from "./box";

export const Boxes = ({ type, array, header }) => {
  
  return (
    <ContainerWrapper header={header}>
      {array.map((item) => (
        <Box item={item.text} type={type} key={item.id} />
      ))}
    </ContainerWrapper>
  );
};
