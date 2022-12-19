import styled from "@emotion/styled";

const Block = styled.div<{ top: string; left: string }>`
  position: fixed;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 20px 10px 20px;
  z-index: 1;
  background-color: #ffffff;
  border: 1px solid black;

  p {
    font-size: 12px;

    span {
      font-weight: 700;
    }
  }

  p > span.blue {
    color: blue;
  }

  p > span.red {
    color: red;
  }
`;

type Props = {
  children: React.ReactNode;
  top: string;
  left: string;
};

const Tooltip = ({ children, top, left }: Props) => {
  return (
    <Block top={top} left={left}>
      {children}
    </Block>
  );
};

export default Tooltip;
