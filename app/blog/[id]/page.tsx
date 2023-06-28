import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // каждую минуту будет обновлять посты
      },
    }
  );
  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  
  return {
    title: post.title, // возвращает название в тайтле страницы
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  // console.log(post);  // будет выводить на терминале
  
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
