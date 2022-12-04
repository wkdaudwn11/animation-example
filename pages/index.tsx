import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import Button from "../components/Button";

const CustomLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 4px;

  &:hover {
    font-weight: 700;
  }

  & + & {
    margin-top: 12px;
  }

  span {
    color: red;
  }
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
        <Button handleClick={() => router.push("/count")}>Count Sample</Button>
        <Button handleClick={() => router.push("/fade")}>Fade Sample</Button>
      </Layout>
    </>
  );
}
