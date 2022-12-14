import styled from "@emotion/styled";

const Block = styled.div`
  position: fixed;
  top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
};

const Tooltip = ({ children }: Props) => {
  return <Block>{children}</Block>;
};

export default Tooltip;
