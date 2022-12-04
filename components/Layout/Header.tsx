import React, { useMemo } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Button from "../Button";

type Props = {
  title: string;
};

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
`;

const InnerContainer = styled.div<{ isHome: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isHome }) => (isHome ? "center" : "space-between")};
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
`;

const Header = ({ title }: Props) => {
  const router = useRouter();
  const isHome = useMemo(() => title === "Home", [title]);

  return (
    <Container>
      <InnerContainer isHome={isHome}>
        {!isHome && (
          <Button handleClick={() => router.push("/")}>Go home</Button>
        )}
        <h3>{title}</h3>
      </InnerContainer>
    </Container>
  );
};

export default Header;
