import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Button from "../components/Button";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  & + & {
    margin-top: 30px;
    padding-top: 30px;
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
          <BlockTitle>Sample Site1</BlockTitle>
          <Button handleClick={() => router.push("/sample/air-mug")}>
            Air mug
          </Button>
        </Block>
        <Block>
          <BlockTitle>Count</BlockTitle>
          <Button handleClick={() => router.push("/react-spring/count")}>
            Count (react-spring)
          </Button>
        </Block>

        <Block>
          <BlockTitle>Fade</BlockTitle>
          <Button handleClick={() => router.push("/react-spring/fade")}>
            Fade Sample (react-spring)
          </Button>
        </Block>

        <Block>
          <BlockTitle>Scroll</BlockTitle>
          <Button
            handleClick={() => router.push("/framer-motion/scroll-y-progress")}
          >
            Scroll Y Progress (framer-motion)
          </Button>
          <Button
            handleClick={() => router.push("/framer-motion/scroll-animation")}
          >
            Scroll Y Animation (framer-motion)
          </Button>
        </Block>
      </Layout>
    </>
  );
}
