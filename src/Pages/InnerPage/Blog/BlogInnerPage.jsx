import { AiOutlinePlus } from "react-icons/ai";
import BlogMain from "../../../Component1/Blog/BlogMain";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";
import blogImg1 from "/assets/images/blog/blog_thumb01.png";
import blogImg2 from "/assets/images/blog/blog_thumb02.png";
import blogImg3 from "/assets/images/blog/blog_thumb03.png";
import blogImg4 from "/assets/images/blog/blog_thumb04.png";
import blogImg5 from "/assets/images/blog/blog_thumb05.png";
import blogImg6 from "/assets/images/blog/blog_thumb06.png";
import BlogInnerRight from "../BlogDetails/BlogInnerRight";
const BlogInnerPage = () => {
  return (
    <>
      <Breadcamp breadCampTitle={"Latest Blog"} breadCampLink={"Latest Blog"} />
      <div className="Container py-[120px]">
        <div className="grid grid-cols-3 gap-7">
          <div className="col-span-2">
            <div className="grid gap-7 grid-cols-2">
              <BlogMain
                blogBoxImg={blogImg1}
                blogBoxPost={"By Constre"}
                blogBoxDate={"12 January, 2024"}
                blogBoxTitle={"Most Popular Building Design Equipment - 2024"}
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
              <BlogMain
                blogBoxImg={blogImg2}
                blogBoxPost={"By Constre"}
                blogBoxDate={"22 January, 2024"}
                blogBoxTitle={"How to Plan A Modern Building Design Properly?"}
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
              <BlogMain
                blogBoxImg={blogImg3}
                blogBoxPost={"By Constre"}
                blogBoxDate={"12 February, 2024"}
                blogBoxTitle={
                  "Top 10 Equipment for Building Design Tools - 2024"
                }
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
              <BlogMain
                blogBoxImg={blogImg4}
                blogBoxPost={"By Constre"}
                blogBoxDate={"22 January, 2024"}
                blogBoxTitle={"Construction Building Architect Designing Plan"}
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
              <BlogMain
                blogBoxImg={blogImg5}
                blogBoxPost={"By Constre"}
                blogBoxDate={"28 January, 2024"}
                blogBoxTitle={"Building Interior Repairing and Modifying House"}
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
              <BlogMain
                blogBoxImg={blogImg6}
                blogBoxPost={"By Constre"}
                blogBoxDate={"12 March, 2024"}
                blogBoxTitle={"Design Plan Discussion and Build Your Dream"}
                blogBoxLink={"Read More"}
                blogBoxIcon={<AiOutlinePlus />}
              />
            </div>
          </div>
          <div className="col-span-1">
            <BlogInnerRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInnerPage;
