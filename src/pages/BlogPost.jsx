import blogpost1 from "../assets/blog-post-img-1.jpg";
import blogpost2 from "../assets/blog-post-img-2.jpg";
import x from "../assets/x.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import { LuCopy } from "react-icons/lu";
import blog1 from "../assets/blog-section-1.jpg";
import blog2 from "../assets/blog-section-2.svg";
import blog3 from "../assets/blog-section-3.svg";

const BlogPost = () => {
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
      <div className="flex flex-col items-center px-10 lg:px-48 md:px-20 mx-auto">
        <div className="text-[54px] font-semibold text-center">
          The Rise of Electric SUVs: Are They Worth the Hype?
        </div>
        <div >
          <img src={blogpost1} alt="blog post image" className="rounded-[12px]" />
        </div>
        <div className="text-[20px] my-4 text-[#575757]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
          massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
          Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
        </div>
        <hr />
        <div className="text-[30px] font-semibold self-start text-left">
          Introduction
        </div>
        <div className="text-[#575757] text-[18px]">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
          <br />
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
          <br />
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor.
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris
          id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
          molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
          velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
          orci.
        </div>
        <div>
          <img src={blogpost2} alt="blog post image" className="rounded-[12px]"/>
        </div>
        <div className="text-[30px] font-semibold self-start text-left">
          Software and tools
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id.
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
          mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis
          fusce augue enim. Quis at habitant diam at. Suscipit tristique risus,
          at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
          sodales id est ac volutpat.
        </div>
        <div className="text-[24px] italic px-16 text-center my-2">
          “One of the greatest advantages of attending the Africa Game Time
          Summit is the chance to meet and network with some of the brightest
          minds in the gaming world. The summit brings together seasoned
          professionals, independent developers, publishers, and investors under
          one roof.”
        </div>
        <div className="text-[30px] font-semibold self-start text-left">
          Other resources
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
          sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
          rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
          ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
          massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
          elementum gravida cursus dis.
        </div>
        <div className="self-start text-left my-2 ">
          <ol>
            <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
            <li>
              Eu turpis posuere semper feugiat volutpat elit, ultrices
              suspendisse. Auctor vel in vitae placerat.
            </li>
            <li>
              Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </li>
          </ol>
        </div>
        <div className="text-[#575757] text-[18px]">
          Lectus leo massa amet posuere. Malesuada mattis non convallis quisque.
          Libero sit et imperdiet bibendum quisque dictum vestibulum in non.
          Pretium ultricies tempor non est diam. Enim ut enim amet amet integer
          cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
        </div>
        <div className="my-2 text-[#575757] text-[18px]">
          Tristique odio senectus nam posuere ornare leo metus, ultricies.
          Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
          Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
          accumsan. Cursus viverra aenean magna risus elementum faucibus
          molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </div>

        <div className="bg-[#F9FAFB] px-16 py-8">
          <div className="text-[30px] font-semibold self-start text-left">
            Conclusion
          </div>

          <div className="my-2 text-[#575757] text-[18px]">
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
            scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
            blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
            scelerisque amet nulla purus habitasse.
          </div>
          <div className="my-2 text-[#575757] text-[18px]">
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
            condimentum mi massa. In tincidunt pharetra consectetur sed duis
            facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
            dictum eget nibh tortor commodo cursus.
          </div>
          <div className="my-2 text-[#575757] text-[18px]">
            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
            aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id
            morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
            dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
            tortor.
          </div>
        </div>

        <hr />
      </div>

      <div className="flex  justify-between px-10 lg:px-48 md:px-20 mx-auto  my-4">
        <div className="flex gap-2">
          <button className="bg-[#F0F9FF] border border-[#B9E6FE] py-[5px] px-[10px] rounded-full">
            Product
          </button>
          <button className="bg-[#EEF4FF] border border-[#C7D7FE] py-[5px] px-[10px] rounded-full">
            Research
          </button>
          <button className="bg-[#FEF6EE] border border-[#F9DBAF] py-[5px] px-[10px] rounded-full">
            Frameworks
          </button>
        </div>
        <div className="flex gap-2">
          <div className="border border-[#D0D5DD] flex items-center py-1 px-2 rounded-[4px]">
            <LuCopy />
            Copy link
          </div>
          <div className="flex gap-2">
            <div className="w-[40px] h-[40px] border border-[#D0D5DD] flex items-center justify-center rounded-[4px]">
              <img src={x} alt="x icon" />
            </div>
            <div className="w-[40px] h-[40px] border border-[#D0D5DD] flex items-center justify-center rounded-[4px]">
              <img src={fb} alt="fb icon" />
            </div>
            <div className="w-[40px] h-[40px] border border-[#D0D5DD] flex items-center justify-center rounded-[4px]">
              <img src={linkedin} alt="linkedin icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-[44px] text-center font-semibold my-4 px-20 mx-auto">
        More Related Articles to Read
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

      <div className="bg-[#F9F9FB] my-8">
        <div className="py-4 px-4 w-[60%] mx-auto flex flex-col gap-3">
          <div className="text-[50px] font-semibold text-center">
            Subscribe Our Newsletter
          </div>
          <div className="text-[24px] text-[#575757] text-center">
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
    </>
  );
};

export default BlogPost;
