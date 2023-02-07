import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

  &#show-scene-0 #scroll-section-0 .sticky,
  &#show-scene-1 #scroll-section-1 .sticky,
  &#show-scene-2 #scroll-section-2 .sticky,
  &#show-scene-3 #scroll-section-3 .sticky {
    display: flex;
  }
`;

export const GlobalNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
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
`;

export const LocalNav = styled.nav`
  position: absolute;
  top: 45px;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;

  &.local-nav-sticky {
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: saturate(180%) blur(15px);
  }
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

export const ScrollSection = styled.section<{ sectionId: number }>`
  padding-top: 50vh;

  ${({ sectionId }) =>
    sectionId === 0 &&
    css`
      h1 {
        position: relative;
        top: -10vh;
        font-size: 4rem;
        text-align: center;
        z-index: 2;

        @media (min-width: 1024px) {
          font-size: 9vw;
          top: -25vh;
        }
      }
    `};

  ${({ sectionId }) =>
    sectionId === 1 &&
    css`
      p.description {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: #888;

        strong {
          margin-right: 0.8rem;
          font-size: 2.5rem;
          color: rgb(29, 29, 31);
          float: left;
        }

        @media (min-width: 1024px) {
          font-size: 2rem;

          strong {
            font-size: 6rem;
          }
        }
      }
    `};

  ${({ sectionId }) =>
    sectionId === 3 &&
    css`
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      p.mid-message {
        width: 1000px;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 2rem;
        color: #888;

        strong {
          color: rgb(29, 29, 31);
        }

        @media (min-width: 1024px) {
          font-size: 4vw;
        }
      }

      canvas.image-blend-canvas.sticky {
        position: fixed;
      }

      p.canvas-caption {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 1rem;
        font-size: 1.2rem;
        color: #888;

        @media (min-width: 1024px) {
          font-size: 2rem;
        }
      }
    `};
`;

export const StickyBox = styled.div<{ stickyId: number }>`
  position: fixed;
  display: none;
  width: 100%;

  &.main-message {
    top: 35vh;
    align-items: center;
    justify-content: center;
    height: 3em;
    margin: 3px 0;
    font-size: 2.5rem;
    opacity: 0;
    transition: all 0.2s;

    p {
      font-weight: bold;
      text-align: center;
      line-height: 1.2;
    }

    small {
      display: block;
      margin-bottom: 0.5em;
      font-size: 1.2rem;
    }

    @media (min-width: 1024px) {
      font-size: 4vw;
    }
  }

  &.sticky.sticky-canvas {
    height: 100vh;
  }

  canvas {
    position: absolute;
    top: calc(-30vh + 96px);
    left: 50%;

    @media (min-width: 1024px) {
      top: -30vh;
    }

    @media (min-width: 1400px) {
      top: -40vh;
    }

    @media (min-width: 1600px) {
      top: -50vh;
    }
  }

  ${({ stickyId }) =>
    stickyId === 1 &&
    css`
      &.main-message {
        font-size: 3.5rem;
      }

      &.desc-message {
        width: 50%;
        font-weight: bold;
        opacity: 0;
      }

      .pin {
        position: absolute;
        width: 1px;
        height: 100px;
        background-color: rgb(29, 29, 31);
        left: 0;
        bottom: -100px;
      }

      &.b {
        top: 10%;
        left: 40%;
      }

      &.c {
        top: 15%;
        left: 45%;
      }

      @media (min-width: 1024px) {
        &.main-message {
          font-size: 6vw;

          small {
            font-size: 1.5vw;
          }
        }

        &.desc-message {
          width: 20%;
        }

        &.b {
          top: 20%;
          left: 53%;
        }

        &.c {
          left: 55%;
        }
      }

      &.sticky-canvas {
        top: 100vh;
        left: 0;
      }

      canvas {
        top: -50vh;
        left: 50%;
      }
    `};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  color: white;
  background: darkorange;
`;

export const LoadingBox = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 32px;
  font-weight: bold;
  background-color: #f5f5f5;
`;
