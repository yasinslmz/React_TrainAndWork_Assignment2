import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { slug } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const getBlogs = () => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => setBlogs(json))
      .catch((error) => console.error("Error fetching blogs:", error));
  };

  useEffect(() => {
    getBlogs();
  }, [slug]);

  useEffect(() => {
    setSelectedBlog(blogs.find((Blog) => Blog.slug === slug));
  }, [blogs, slug]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentWithId = { ...newComment, id: Date.now() };
    setComments([...comments, newCommentWithId]);
    setNewComment({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  return (
    <>
      <div className="breadcrumb-area section-space--breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="breadcrumb-wrapper">
                <h2 className="page-title">Blog Post</h2>
                <ul className="breadcrumb-list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Blog Post</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content-wrapper">
        <div className="blog-page-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 ps-5 order-2">
                <div className="blog-sidebar-wrapper">
                  <div className="single-sidebar-widget single-sidebar-widget--extra-space">
                    <h2 className="single-sidebar-widget__title single-sidebar-widget__title--extra-space">
                      Search
                    </h2>
                    <div className="sidebar-search">
                      <form action="#">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">
                      Recent Posts
                    </h2>
                    <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                      {/* ... Recent Posts links ... */}
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">
                      Recent Comments
                    </h2>
                    <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
                      {/* ... Recent Comments links ... */}
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">Archives</h2>
                    <ul className="single-sidebar-widget__dropdown">
                      {/* ... Archives links ... */}
                    </ul>
                  </div>
                  <div className="single-sidebar-widget">
                    <h2 className="single-sidebar-widget__title">Categories</h2>
                    <ul className="single-sidebar-widget__dropdown">
                      {/* ... Categories links ... */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-1">
                <div className="blog-single-post-details-wrapper">
                  <h2 className="post-title">
                    {selectedBlog && selectedBlog.title}
                  </h2>
                  <p className="post-meta">
                    By{" "}
                    <a href="#" className="post-author">
                      admin
                    </a>{" "}
                    <span className="separator">|</span>{" "}
                    <a href="#">
                      {selectedBlog && selectedBlog.date}
                    </a>
                  </p>
                  <div className="post-thumbnail">
                    {selectedBlog && (
                      <img
                        src={process.env.PUBLIC_URL + "/" + selectedBlog.image}
                        className="img-fluid"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="post-text-content">
                    <p>{selectedBlog && selectedBlog.desc}</p>
                  </div>
                  <div className="post-share-section">
                    <span>SHARE :</span>
                    {/* ... Social media icons ... */}
                  </div>
                </div>

                {/* Comments section */}
                <div className="blog-comments-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="blog-details-section-title">
                        Comments ({comments.length})
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="blog-comments-wrapper">
                        {comments.map((comment) => (
                          <div key={comment.id} className="single-blog-comment">
                            <div className="single-blog-comment__image">
                              <img
                                src={process.env.PUBLIC_URL + "/path/to/commenter/image.jpg"}
                                className="img-fluid"
                                alt="Commenter"
                              />
                            </div>
                            <div className="single-blog-comment__content">
                              <div className="comment-time">
                                <i className="fa fa-calendar" /> {comment.date}
                              </div>
                              <p className="comment-text">{comment.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment form */}
                <div className="blog-comment-form-area">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3 className="blog-details-section-title">Leave a comment</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-form-wrapper">
                        <form onSubmit={handleCommentSubmit}>
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <input
                                type="text"
                                placeholder="Your Name (*)"
                                required=""
                                value={newComment.name}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <input
                                type="text"
                                placeholder="Email (*)"
                                required=""
                                value={newComment.email}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    email: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-lg-4">
                              <input
                                type="text"
                                placeholder="Website"
                                value={newComment.website}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    website: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                cols={30}
                                rows={10}
                                placeholder="Message *"
                                required=""
                                value={newComment.message}
                                onChange={(e) =>
                                  setNewComment({
                                    ...newComment,
                                    message: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-lg-12">
                              <button
                                type="submit"
                                id="submit"
                                className="theme-button"
                              >
                                ADD COMMENT
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
