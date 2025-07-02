import heroImg from "../../assets/heroImage.png";
const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Content */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-6">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-once="true"
                  className="text-primary font-cursive"
                >
                  coffee
                </span>{" "}
                in the town
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white capitalize">
                  let&apos;s have a sip
                </button>
              </div>
            </div>
            {/* Hero Image */}
            <div
              data-aos="zoom-in"
              className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative"
            >
              <img
                src={heroImg}
                alt="Hero Section Image"
                className="w-[300px] sm:w-[450px] sm:scale-110 mx-autos spin"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r from-primary to-secondary absolute top-10 left-10 p-3 rounded-xl"
              >
                <h1>Crafting moments</h1>
              </div>
              <div
                data-aos="fade-right"
                className="bg-gradient-to-r from-primary to-secondary absolute bottom-10 right-10 p-3 rounded-xl"
              >
                <h1>Delightfully served</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
