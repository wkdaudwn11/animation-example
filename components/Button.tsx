import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  handleClick: () => void;
};

const ButtonStyle = styled.button`
  min-width: 60px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  background-color: #ffffff;
  transition: 0.2s all;

  &:hover {
    border-radius: 8px;
  }

  & + & {
    margin-top: 12px;
  }
`;

const Button = ({ children, handleClick }: Props) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default Button;
