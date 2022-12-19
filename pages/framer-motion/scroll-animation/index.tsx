import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

import Layout from "../../../components/Layout";
import ScrollYProgress from "../../../components/ScrollYProgress";
import Button from "../../../components/Button";
import Tooltip from "../../../components/Tooltip";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const BoxStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid black;
`;

type BoxProps = {
  num: number;
  hiddenStatusFlag: boolean;
};

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num, hiddenStatusFlag }: BoxProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else if (hiddenStatusFlag) {
      control.start("hidden");
    }
  }, [control, inView, hiddenStatusFlag]);

  return (
    <Container>
      <BoxStyle
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box {num} </h1>
      </BoxStyle>
    </Container>
  );
};

const Sample = () => {
  const [hiddenStatusFlag, setHiddenStatusFlag] = useState(true);

  return (
    <Layout title="Count">
      <Tooltip>
        <Button handleClick={() => setHiddenStatusFlag(!hiddenStatusFlag)}>
          현태 상태: {hiddenStatusFlag ? "ON" : "OFF"}
        </Button>
        <p>
          * 위의 버튼을 클릭시 상태가 바뀝니다.
          <br />* 상태가 <span className="blue">ON</span> 일 경우엔 스크롤을
          올렸을 때도 Fade 효과가 나타남.
          <br />* 상태가 <span className="red">OFF</span> 일 경우엔 스크롤
          올렸을 때는 Fade 효과가 없음.
        </p>
      </Tooltip>
      <Box num={1} hiddenStatusFlag={hiddenStatusFlag} />
      <Box num={2} hiddenStatusFlag={hiddenStatusFlag} />
      <Box num={3} hiddenStatusFlag={hiddenStatusFlag} />
      <ScrollYProgress />
    </Layout>
  );
};

export default Sample;
