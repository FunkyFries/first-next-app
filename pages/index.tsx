import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import axios from "axios";

const IndexPage: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ul>
        {posts.map((p: any) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data };
};

export default IndexPage;
