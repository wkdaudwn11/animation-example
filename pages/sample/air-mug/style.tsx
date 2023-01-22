import styled from "@emotion/styled";

export const Container = styled.div`
  overflow-x: hidden;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  color: rgb(29, 29, 31);
  letter-spacing: -0.05em;
  background-color: #ffffff;

  p {
    line-height: 1.6;
  }

  a {
    color: rgb(29, 29, 31);
    text-decoration: none;
  }
`;

export const GlobalNav = styled.nav`
  height: 44px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`;

export const GlobalNavLinks = styled(NavLinks)`
  justify-content: space-between;

  a.global-nav-item {
  }
`;

export const LocalNav = styled.nav`
  height: 52px;
  border-bottom: 1px solid #ddd;
`;

export const LocalNavLinks = styled(NavLinks)`
  justify-content: space-between;

  a.product-name {
    margin-right: auto;
    font-size: 1.4rem;
    font-weight: bold;
  }

  a:not(.product-name) {
    margin-left: 2em;
    font-size: 0.8rem;
  }
`;
