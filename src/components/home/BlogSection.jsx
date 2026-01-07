import blog1 from "./assets/blog-section-1.jpg";
import blog2 from "./assets/blog-section-2.svg";
import blog3 from "./assets/blog-section-3.svg";
const BlogSection = () => {
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
  ];

  return (
    <>
      <div className="my-10">
        <div className="text-[44px] font-semibold text-center my-10">
          Read Our Latest Articles
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer my-8">
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

                <div className="text-[#676767] mb-[8px]">
                  {blog.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary text-black py-[12px] px-[24px] rounded-[10px] text-[18px] font-semibold">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
