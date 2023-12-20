import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    };
  }

  getBlogs = () => {
    fetch(" http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ blogs: json });
        console.log(json);
      });
  };

  componentDidMount() {
    this.getBlogs();
  }

  render() {
    return (
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
                  <h2 className="single-sidebar-widget__title">Recent Posts</h2>
                  <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--extra-height">
                    <li>
                      <a href="blog-left-sidebar.html">
                        The Difference Between Green Furniture and Sustainable
                        Furniture
                      </a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">
                        A Busy Person Guide To Getting Organized Room
                      </a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">
                        Three Sneaky Storage Solutions For Small Spaces
                      </a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">
                        The Future of Senior Housing
                      </a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">
                        Creating An Organized Multi-Use Room
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="single-sidebar-widget">
                  <h2 className="single-sidebar-widget__title">
                    Recent Comments
                  </h2>
                  <ul className="single-sidebar-widget__dropdown single-sidebar-widget__dropdown--comments">
                    <li>
                      <span className="commenter">Alisa</span> on{" "}
                      <a href="blog-left-sidebar.html">
                        {" "}
                        The Difference Between Green Furniture and Sustainable
                        Furniture
                      </a>
                    </li>
                    <li>
                      <span className="commenter">David</span> on{" "}
                      <a href="blog-left-sidebar.html">
                        A Busy Person Guide To Getting Organized Room
                      </a>
                    </li>
                    <li>
                      <span className="commenter">Rashed</span> on{" "}
                      <a href="blog-left-sidebar.html">
                        Three Sneaky Storage Solutions For Small Spaces
                      </a>
                    </li>
                    <li>
                      <span className="commenter">Luis</span> on{" "}
                      <a href="blog-left-sidebar.html">
                        The Future of Senior Housing
                      </a>
                    </li>
                    <li>
                      <span className="commenter">Saddam</span> on{" "}
                      <a href="blog-left-sidebar.html">
                        Creating An Organized Multi-Use Room
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="single-sidebar-widget">
                  <h2 className="single-sidebar-widget__title">Archives</h2>
                  <ul className="single-sidebar-widget__dropdown">
                    <li>
                      <a href="blog-left-sidebar.html">July 2019</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">March 2019</a>
                    </li>
                  </ul>
                </div>
                <div className="single-sidebar-widget">
                  <h2 className="single-sidebar-widget__title">Categories</h2>
                  <ul className="single-sidebar-widget__dropdown">
                    <li>
                      <a href="blog-left-sidebar.html">Furniture</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Interior</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">Uncategorized</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOG MAİN */}
            <div className="col-lg-9 order-1">
              <div className="blog-post-wrapper">
                <div className="row">

                  {/* DÖNGÜ AÇ */}

                  {this.state.blogs.map((blog) => (
                    <div className="col-md-6">
                      <div className="single-blog-post">
                        <div className="single-blog-post__image">
                          <Link to="blog-details">
                            <img
                              src={blog.image}
                              className="img-fluid"
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="single-blog-post__content">
                          <h3 className="post-title">
                            <Link to={blog.slug}>
                            {blog.title}
                            </Link>
                          </h3>
                          <p className="post-meta">
                            By{" "}
                            <a href="#" className="post-author">
                              admin
                            </a>{" "}
                            <span className="separator">|</span>{" "}
                            <a href="#">{blog.date}</a>
                          </p>
                          <p className="post-excerpt">
                          {blog.desc}
                          </p>
                          <a
                            href="blog-post-left-sidebar.html"
                            className="blog-readmore-link"
                          >
                            Read more <i className="fa fa-caret-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

              {/* Pagination */}
              <div className="pagination-wrapper">
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
      
      </div>
    );
  }
}
