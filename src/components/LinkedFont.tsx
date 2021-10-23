import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface ILinkedFont {
  fontColor?: string;
  bgColor?: string;
  weightSize?: number;
  fontSize?: number;
  text?: string;
  to?: string;
}

const Container = styled.span<ILinkedFont>`
  ${(props) =>
    props.fontColor
      ? css`
          color: ${props.fontColor};
        `
      : ""}
  ${(props) =>
    props.bgColor
      ? css`
          background-color: ${props.bgColor};
        `
      : ""}
    ${(props) =>
    props.weightSize
      ? css`
          font-weight: ${props.weightSize};
        `
      : ""}
    ${(props) =>
    props.fontSize
      ? css`
          font-size: ${props.fontSize};
        `
      : ""}
`;

const SLink = styled(Link)``;

const LinkedFont = ({
  fontColor,
  bgColor,
  weightSize,
  fontSize,
  text,
  to,
}: ILinkedFont) => {
  return (
    <Container
      fontColor={fontColor}
      bgColor={bgColor}
      weightSize={weightSize}
      fontSize={fontSize}
    >
      {to ? <SLink to={to}>{text}</SLink> : null}
    </Container>
  );
};

export default LinkedFont;
