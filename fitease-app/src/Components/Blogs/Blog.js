import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog({ post }) {
  return (
    <div class="card mx-2 my-2" style={{ width: " 24em" }}>
      <img class="card-img-top" src={post.image} alt="Card image cap" />
      <div class="card-body">
        <Link to={`/blogs/${post.id}`}>
          <h5 class="card-title font-weight-bold text-dark">{post.title}</h5>
        </Link>
        {/*  <p class="card-text text-secondary my-0">{post.author}</p>*/}{" "}
        <p class="card-text text-secondary">
          {new Date(post.created_at).toDateString()}
        </p>
        <p class="card-text max-lines">{post.description}</p>
      </div>
    </div>
  );
}

export default Blog;

///blogs/${post.id}
/* <div className="post">
      {post.urlToImage && (
        <img className="postImg" src={post.urlToImage} alt="" />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.publishedAt).toDateString()}
        </span>
      </div>
      <div className="postCats">
        <span className="postCat">{post.author}</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
*/
