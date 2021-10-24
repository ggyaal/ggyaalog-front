import styled from "styled-components";
import { isDarkModeVar } from "../apollo";

interface ISwitchProps {
  width: number;
  value: boolean;
}

const Container = styled.div<ISwitchProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border: 1px solid;
  background-color: ${(props) => (props.value ? "#2c3e50" : "#ecf0f1")};
  border-radius: 50%;
`;

const Switch = ({ width, value }: ISwitchProps) => {
  return (
    <Container
      width={width}
      value={value}
      onClick={() => isDarkModeVar(true)}
    ></Container>
  );
};

export default Switch;
