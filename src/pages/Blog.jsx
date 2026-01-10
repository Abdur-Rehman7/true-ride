import { Link } from "react-router-dom";
import bgImage from "../assets/blog-bg.jpg";
import blog1 from "../assets/blog-section-1.jpg";
import blog2 from "../assets/blog-section-1.svg";
import blog3 from "../assets/blog-section-2.svg";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      category: "Cars",
      title: "The Rise of Electric SUVs: Are They Worth the Hype?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog1,
    },
    {
      id: 2,
      category: "Technology",
      title: "Still the Benchmark for Electric Luxury?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog2,
    },
    {
      id: 3,
      category: "Update",
      title: "How Culture Shapes Car Design Around the World?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog3,
    },
    {
      id: 1,
      category: "Cars",
      title: "The Rise of Electric SUVs: Are They Worth the Hype?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog1,
    },
    {
      id: 2,
      category: "Technology",
      title: "Still the Benchmark for Electric Luxury?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog2,
    },
    {
      id: 3,
      category: "Update",
      title: "How Culture Shapes Car Design Around the World?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog3,
    },
    {
      id: 1,
      category: "Cars",
      title: "The Rise of Electric SUVs: Are They Worth the Hype?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog1,
    },
    {
      id: 2,
      category: "Technology",
      title: "Still the Benchmark for Electric Luxury?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog2,
    },
    {
      id: 3,
      category: "Update",
      title: "How Culture Shapes Car Design Around the World?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog3,
    },
    {
      id: 1,
      category: "Cars",
      title: "The Rise of Electric SUVs: Are They Worth the Hype?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog1,
    },
    {
      id: 2,
      category: "Technology",
      title: "Still the Benchmark for Electric Luxury?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog2,
    },
    {
      id: 3,
      category: "Update",
      title: "How Culture Shapes Car Design Around the World?",
      description:
        "Electric SUVs are becoming the new normal on the road. With major brands launching...",
      image: blog3,
    },
  ];
  return (
    <div>
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* 80% Black Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Centered Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <nav className="text-sm text-gray-300 mb-3">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white font-medium">Blog</span>
          </nav>

          <p className="text-[60px] md:text-3xl font-semibold text-white">
            Read our latest blogs
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center my-4 mx-8">
        <div>Showing 12 results</div>
        <div className="flex items-center gap-2">
          <div>Sort by:</div>
          <select className="border px-2 py-1">
            <option>Newest</option>
            <option>By Category</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer my-8 mx-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-[#E3E3E3] hover:border-transparent hover:shadow-xl rounded-[12px] transition"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-t-lg w-full"
            />

            {/* Content */}
            <div className="mx-4 my-4">
              <div className="inline-block bg-primary text-[13px] font-semibold px-3 py-1 rounded-[4px] mb-[8px]">
                {blog.category}
              </div>

              <div className="text-[24px] font-semibold mb-[8px]">
                {blog.title}
              </div>

              <div className="text-[#676767] mb-[8px]">{blog.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between my-4">
        <div className="flex items-center gap-2">
          <IoArrowBackOutline />
          <p>Previous</p>
        </div>
        <div className="flex gap-1">
          <div className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            1
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            2
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            3
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            ...
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            8
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            9
          </div>
          <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-black font-semibold">
            10
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>Next</p>
          <IoArrowForwardOutline />
        </div>
      </div>

      <div className="bg-[#F9F9FB] my-8">
        <div className="py-4 px-4 w-[60%] mx-auto flex flex-col gap-3">
          <div className="text-[50px] font-semibold">
            Subscribe Our Newsletter
          </div>
          <div className="text-[24px] text-[#575757]">
            Subscribe to our newsletter to receive updates on our event, latest
            news, promotions and discounts direct to your inbox.
          </div>
          <div className="flex gap-2 ">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" w-full border border-[#B9B9B9] py-[16px] px-[12px] rounded-[10px] focus:outline-none"
            />
            <button className="bg-primary py-[12px] px-[24px] rounded-[10px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
