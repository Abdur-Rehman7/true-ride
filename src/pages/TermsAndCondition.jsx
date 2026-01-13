import bgImage from "../assets/blog-bg.jpg";
import checkicon from "../assets/privacypolicy-checkicon.svg";

const TermsAndCondition = () => {
  return (
    <>
      <div>
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* 80% Black Overlay */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-[60px] md:text-3xl font-semibold text-white">
              Terms of Service
            </p>
          </div>
        </div>

        <div className="px-10 lg:px-48 md:px-20 mx-auto my-8 ">
          <div className="text-[36px] font-semibold text-[#131212] my-4">
            Legal Disclaimer
          </div>

          <div className="text-[22px] text-[#605A5B] my-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam quis nostrud exercit ation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur Excepteur sint occaecat cupidatat non proident sunt in
            culpa qui officia deserunt mollit anim id est laborum Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusani um
            doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo Nemo enim ipsam volupt atem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </div>
          <div className="text-[22px] text-[#605A5B] my-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam quis nostrud exercit ation ullamco laboris nisi ut
            aliquip ex ea commodo consequat Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur Excepteur sint occaecat cupidatat non proident sunt in
            culpa qui officia deserunt mollit anim id est laborum Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusani um
            doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo Nemo enim ipsam volupt atem quia voluptas sit aspernatur
            aut odit aut fugit sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </div>

          <div className="text-[36px] font-semibold text-[#131212] my-4">
            Credit Reporting Terms Of Service
          </div>

          <div className="text-[22px] text-[#605A5B] my-2">
            Vulputate dignissim viverra pretium enim penatibus amet velit.
            Bibendum tincidunt pretium est sit cursus orci morbi cursus
            consectetur. Dolor nec a a sollicitudin. Nec elementum arcu arcu in
            volutpat tristique nunc. Quis ut egestas nec fringilla enim leo.
            Duis leo morbi mi felis varius et. Suspendisse at est pellentesque
            sagittis nulla. Magna placerat laoreet quis vulputate. Ornare turpis
            ut amet arcu vitae. Enim suspendisse sit nec venenatis lobortis.
          </div>

          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" />
            <div className="text-[22px] text-[#131212]">
              Basic knowledge and detailed understanding of CSS3 to create
              attract websites
            </div>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" />
            <div className="text-[22px] text-[#131212]">
              Details Idea about HTMLS, Creating Basic Web Pages using HTMLS
            </div>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" />
            <div className="text-[22px] text-[#131212]">
              Web Page Layout Design and Slider Creation
            </div>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" />
            <div className="text-[22px] text-[#131212]">
              Image Insert method af web site
            </div>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" />
            <div className="text-[22px] text-[#131212]">
              Creating Styling Web Pages Using CSS3
            </div>
          </div>

          <div className="text-[36px] text-[#131212] font-semibold">
            Ownership Of Site Agreement To Terms Of Use
          </div>

          <div className="text-[22px] text-[#605A5B] my-2">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
            ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil molestiae consequatur, vel
            illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </div>
          <div className="text-[36px] text-[#131212] font-semibold">
            Provision Of Services
          </div>

          <div className="text-[22px] text-[#605A5B] my-2">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided.
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
