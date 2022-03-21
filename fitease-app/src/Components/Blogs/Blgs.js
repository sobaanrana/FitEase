import React, { useEffect, useState } from "react";
import { getPosts } from "./helper/apicalls";

const Blgs = () => {
  const [blogs, setBlogs] = useState([]);
  const loadAllBlogs = () => {
    getPosts().then((data) => {
      // as .json() returned
      console.log(data);

      if (data.error) {
      } else {
        setBlogs(data);
        console.log(data);
      }
    });
    //.catch((err) => console.log(err));
  };
  useEffect(() => {
    loadAllBlogs();
  }, []);

  return (
    <div>
      {console.log(blogs)}
      {blogs.name}
    </div>
  );
};

export default Blgs;
