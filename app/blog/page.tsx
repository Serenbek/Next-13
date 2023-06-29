"use client";

import { Metadata } from "next";
import scss from "./blog.module.scss";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import Posts from "@/components/Posts/Posts";
import PostSearch from "@/components/PostSearch/PostSearch";

export const metadata: Metadata = {
  title: "Blog | Next App 13",
};

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className={scss.wrapper}>
      <h1 className={scss.title}>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </div>
  );
}
