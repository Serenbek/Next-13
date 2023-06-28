import { Metadata } from "next";
import scss from "./blog.module.scss";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Next App 13",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // каждую минуту будет обновлять посты
    },
  });
  return response.json();
}

export default async function Blog() {
  const posts = await getData();
  return (
    <div className={scss.wrapper}>
      <h1 className={scss.title}>Blog page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
