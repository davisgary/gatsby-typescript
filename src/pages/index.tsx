import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layouts/main";
import Heading from "../components/heros/heading";
import Button from "../components/buttons/black";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Heading />
      <Button link="/about" />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
