import React from "react";
import "./BlogSideBarLayout.css";
import Blogs from "./Blogs";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
const BlogSideBarLayout = () => {
  return (
    <div>
      <HeaderBanner
        title={"Blogs"}
        headline={"Read Our Blogs, and get fit. :)"}
        displayType={"block"}
      />

      <section class="py_80">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-4">
              <div class="blog_right_sidebar ">
                <div class="">
                  <form method="post" className="blogForm" action="#">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <button type="submit">
                      <i class="fa fa-search color-gray"></i>
                    </button>
                  </form>
                </div>
                <div class="widget categories ">
                  <h4 class="widget-title color_default  text-uppercase">
                    Categories
                  </h4>
                  <ul>
                    <li>
                      <a class="color_primary" href="#">
                        Fitness <span class="pull-right">( 12 )</span>
                      </a>
                    </li>
                    <li>
                      <a class="color_primary" href="#">
                        Training <span class="pull-right">( 05 )</span>
                      </a>
                    </li>
                    <li>
                      <a class="color_primary" href="#">
                        Events <span class="pull-right">( 07 )</span>
                      </a>
                    </li>
                    <li>
                      <a class="color_primary" href="#">
                        Diet <span class="pull-right">( 06 )</span>
                      </a>
                    </li>

                    <li>
                      <a class="color_primary" href="#">
                        Sports <span class="pull-right">( 12 )</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="widget recent_post icon-default">
                  <h4 class="widget-title color_default mb_15 text-uppercase">
                    Recent Posts
                  </h4>
                  <ul>
                    <li class="color_secondery">
                      <a href="#">Urna natoque netus orci cumb Accumsan.</a>
                      <br />
                      <span>By Admin</span>
                      <span>|</span>
                      <span>January 20, 2018</span>
                    </li>
                    <li class="color_secondery">
                      <a href="#">
                        Pretium Lobortis tempor vitae sociis litoramus.
                      </a>
                      <br />
                      <span>By Admin</span>
                      <span>|</span>
                      <span>April 07, 2017</span>
                    </li>
                    <li class="color_secondery">
                      <a href="#">
                        Tincidunt blandit justo potenti placerat, elementum.
                      </a>
                      <br />
                      <span>By Admin</span>
                      <span>|</span>
                      <span>March 23, 2017</span>
                    </li>
                  </ul>
                </div>
                <div class="widget icon-default popular_post mb_30">
                  <h4 class="widget-title color_default mb_15 text-uppercase">
                    Popular Posts
                  </h4>
                  <ul>
                    <li class="color_secondery">
                      <a href="#">
                        Pretium Lobortis tempor vitae sociis eot litoramus.
                      </a>
                      <br />
                      <span>
                        <i class="fa fa-eye" aria-hidden="true"></i> 127 Views
                      </span>
                    </li>
                    <li class="color_secondery">
                      <a href="#">
                        Turpis leo vitae fermentum ridiculus lob facilisis.
                      </a>
                      <br />
                      <span>
                        <i class="fa fa-eye" aria-hidden="true"></i> 95 Views
                      </span>
                    </li>
                    <li class="color_secondery">
                      <a href="#">
                        Pretium Lobortis tempor vitae sociis copt litoramus.
                      </a>
                      <br />
                      <span>
                        <i class="fa fa-eye" aria-hidden="true"></i> 82 Views
                      </span>
                    </li>
                  </ul>
                </div>
                <div class="widget icon-default archive_post mb_30">
                  <h4 class="widget-title color_default mb_15 text-uppercase">
                    Archive Posts
                  </h4>
                  <ul>
                    <li>
                      <a href="#">February 2022</a>
                    </li>
                    <li>
                      <a href="#">January 2022</a>
                    </li>
                    <li>
                      <a href="#">November 2021</a>
                    </li>
                    <li>
                      <a href="#">October 2021</a>
                    </li>
                  </ul>
                </div>
                <div class="widget widget_tag d-inline-block">
                  <h4 class="widget-title color_default mb_15 text-uppercase">
                    Tags
                  </h4>
                  <ul>
                    <li>
                      <a href="#">Fitness</a>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                    </li>
                    <li>
                      <a href="#">GYM</a>
                    </li>
                    <li>
                      <a href="#">Muscles</a>
                    </li>
                    <li>
                      <a href="#">BodyBuilding</a>
                    </li>
                    <li>
                      <a href="#">Video</a>
                    </li>
                    <li>
                      <a href="#">Cardio</a>
                    </li>
                    <li>
                      <a href="#">Women</a>
                    </li>
                    <li>
                      <a href="#">Diet</a>
                    </li>
                    <li>
                      <a href="#">Yoga</a>
                    </li>
                    <li>
                      <a href="#">Sports</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-8">
              <div class="row">
                <Blogs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSideBarLayout;
