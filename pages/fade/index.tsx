import React, { useState } from "react";
import { useTrail, animated } from "react-spring";
import styled from "@emotion/styled";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled(animated.div)`
  width: 300px;
  margin-top: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: rgb(66, 61, 63);
    font-size: 5em;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity;
    overflow: hidden;
  }
`;

const items = ["Item1", "Item2", "Item3", "Item4"];
const config = { mass: 5, tension: 2000, friction: 200 };

const Fade = () => {
  const [isOpen, setIsOpen] = useState(false);

  const trail = useTrail(items.length, {
    config,
    opacity: isOpen ? 1 : 0,
    x: isOpen ? 0 : 20,
    height: isOpen ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Layout title="Fade">
      <Button handleClick={() => setIsOpen((state) => !state)}>
        {isOpen ? "Close" : "Open"}
      </Button>
      <Container>
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <Item
              key={items[index]}
              style={{
                ...rest,
                transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </Item>
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Fade;
