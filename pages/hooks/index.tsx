import { useState } from "react";
import { animated, useSpring } from "react-spring";

import Layout from "../../components/Layout";

const Hooks = () => {
  const [flip, set] = useState(false);

  const { number } = useSpring({
    reset: true,
    reverse: false,
    from: { number: 0 },
    number: 1,
    delay: 1000,
    onRest: () => set(!flip),
  });

  return (
    <Layout>
      <h3>
        <animated.span>{number.to((n) => n.toFixed(2))}</animated.span>
      </h3>
    </Layout>
  );
};

export default Hooks;
