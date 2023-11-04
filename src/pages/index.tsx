import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layouts/main";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="flex items-center justify-center mt-32">
        <h1 className="text-5xl text-center font-sans font-bold">Hello World</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;