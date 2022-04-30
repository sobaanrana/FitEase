import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "./helper/apicalls";
import "./SingleBlog.css";

export default function SingleBlog() {
  const { id } = useParams();
  console.log("this is blog's id", id);
  const [post, setPost] = useState({});

  const [title, setTitle] = useState("This is Health Blog");
  const [desc, setDesc] = useState("lorem ");
  const [updateMode, setUpdateMode] = useState(false);

  const loadBlog = () => {
    getPost(id)
      .then((data) => {
        console.log("This is single blog", data);
        setPost(data);
      })
      .catch((err) => console.log(err));
  };
  /*
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {}
  };
*/
  useEffect(() => {
    loadBlog();
  }, []);

  return (
    <div className=" container singlePost">
      <div className="singlePostWrapper">
        <img
          src={`${post.image}`}
          alt=""
          className="singlePostImg"
          width={"100%"}
          height={"100%"}
        />

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon far fa-edit"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            AuthorName
            <Link to="/blogs" className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.created_at).toDateString()}
          </span>
        </div>

        <p className="singlePostDesc">
          {post.description}
          <br />
          <br />
          <br /> <br />
        </p>
      </div>
    </div>
  );
}
