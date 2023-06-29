"use client";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";
import scss from "./PostSearch.module.scss";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
  };

  return (
    <div className={scss.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default PostSearch;
