import {
  FaRegCalendarAlt,
  FaRegClock,
  FaRegComments,
  FaRegUser,
  FaSignal,
} from "react-icons/fa";
import blogPosts from "../utils/blogPosts";
import { formatDate } from "../utils/convertDate";

function BannerArticle() {
  return (
    <>
      {blogPosts.map(
        (post) =>
          post.featured && (
            <article
              key={post.id}
              className="max-w-7xl mx-auto absolute inset-0 flex justify-center mt-16 lg:ml-34 items-left text-white flex-col"
            >
              <div className="p-10 rounded-lg w-full md:w-2/3 lg:w-1/2">
                <div class="ribbon w-fit bg-main-red font-semibold text-white  px-6 py-1 relative">
                  {post.category}
                </div>
                <h3 className="text-main-gray text-sm my-4 font-semibold flex gap-2 items-center">
                  <FaRegCalendarAlt size={20} className="text-main-red" />{" "}
                  {formatDate(post.dateCreate)}
                </h3>
                <h1 className="text-3xl lg:text-5xl font-semibold">
                  {post.title}
                </h1>
                <p className="my-8">{post.shortDescription}</p>
                <div className="flex gap-2">
                  <h2 className="text-main-gray flex text-sm gap-2 font-semibold">
                    <FaRegUser size={20} className="text-main-red" />
                    by {post.author}
                  </h2>
                  <h2 className="text-main-gray flex text-sm gap-2 font-semibold">
                    <FaRegComments size={20} className="text-main-red" />
                    {post.comments} Comments
                  </h2>
                  <h2 className="text-main-gray flex text-sm gap-2 font-semibold">
                    <FaRegClock size={20} className="text-main-red" />
                    {post.minutesToRead} minutes read
                  </h2>
                  <h2 className="text-main-gray flex text-sm gap-2 font-semibold">
                    <FaSignal size={20} className="text-main-red" />
                    {post.views} Views
                  </h2>
                </div>
              </div>
            </article>
          )
      )}
    </>
  );
}

export default BannerArticle;
