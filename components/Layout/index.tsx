import React from "react";
import styled from "@emotion/styled";

import Header from "./Header";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #efefef;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  padding: 80px 20px 0 20px;
  margin: 0 auto;
`;

const Layout = ({ children, title }: Props) => {
  return (
    <Body>
      <Header title={title} />
      <Contents>{children}</Contents>
    </Body>
  );
};

export default Layout;
