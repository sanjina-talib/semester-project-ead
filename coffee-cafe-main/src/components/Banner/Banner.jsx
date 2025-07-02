import { IoFastFood } from "react-icons/io5";
import bannerImage from "../../assets/coffee-white.png";
import bgTexture from "../../assets/website/coffee-texture.jpg";
import { GiFoodTruck } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";

const bgImage = {
  backgroundImage: `url(${bgTexture})`,
  backgroundColor: "270C03",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image Section */}
            <div data-aos="zoom-in">
              <img
                src={bannerImage}
                alt="white coffee banner"
                className="max-w-[430px] w-full mx-auto spin
                drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-cursive font-bold capitalize"
              >
                premium blend coffee
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wider leading-5"
              >
                A rich and smooth coffee blend crafted for a premium taste
                experience, An explosion of flavors, delivering a truly
                delightful experience in every sip.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <CiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200" />
                    <span className="capitalize">premium coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200" />
                    <span className="capitalize">hot coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200" />
                    <span className="capitalize">cold coffee</span>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="border-l-4 border-primary pl-6 space-y-3"
                >
                  <h1 className="text-2xl font-semibold font-cursive capitalize">
                    tea lover
                  </h1>
                  <p className="text-sm text-gray-500">
                    Brewing the perfect cup of tea requires patience, precision,
                    and a dash of passion to create a comforting blend of
                    flavors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
