import Layout from "../../../components/Layout";
import ScrollYProgress from "../../../components/ScrollYProgress";

import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #ffffff;
`;

const Sample = () => {
  return (
    <Layout title="Count">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Box key={item}>스크롤 내려봐~</Box>
      ))}
      <ScrollYProgress />
    </Layout>
  );
};

export default Sample;
