import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Button from "../components/Button";

const Block = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  button + button {
    margin-left: 12px;
  }

  & + & {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 3px solid black;
  }
`;

const BlockTitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 600;
  color: #708090;
`;

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Animation example</title>
        <meta name="description" content="Animation example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Home">
        <Block>
          <BlockTitle>react-spring</BlockTitle>
          <Button handleClick={() => router.push("/react-spring/count")}>
            Count Sample
          </Button>
          <Button handleClick={() => router.push("/react-spring/fade")}>
            Fade Sample
          </Button>
        </Block>
        <Block>
          <BlockTitle>framer-motion</BlockTitle>
          <Button
            handleClick={() => router.push("/framer-motion/scroll-y-progress")}
          >
            Scroll Y Progress
          </Button>
        </Block>
      </Layout>
    </>
  );
}
