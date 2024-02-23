import Link from "next/link";
import "./_app";

export async function getServerSideProps() {
  const url = `https://jsonplaceholder.typicode.com/posts/1/comments`;

  const res = await fetch(url);
  const data = await res.json();

  return { props: { posts: data } };
}

export default function Posts({ posts }) {
  return (
    <div>
      <h1>JSONPlaceholder Posts</h1>
      <Link href="/">Home</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
