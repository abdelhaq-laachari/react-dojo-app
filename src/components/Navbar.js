import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website 1",
      body: "Lorem ipsum ....",
      author: "Abdelhaq",
      id: "1",
    },
    {
      title: "My new website 2",
      body: "Lorem ipsum ....",
      author: "Yassine",
      id: "2",
    },
    {
      title: "My new website 3",
      body: "Lorem ipsum ....",
      author: "Kamal",
      id: "3",
    },
  ]);


return (
  <div className="home">
    {blogs.map((blog) => (
      <div className="blog-preview" key={blog.id}>
        <h2> {blog.title} </h2>
        <span>Written by: {blog.author} </span>
      </div>
    ))}
  </div>
);
};

export default Home;