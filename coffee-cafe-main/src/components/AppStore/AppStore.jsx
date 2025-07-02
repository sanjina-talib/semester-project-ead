import appStoreImage from "../../assets/website/app_store.png";
import playStoreImage from "../../assets/website/play_store.png";
import bg from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <>
      <div style={backgroundStyle} className="py-14">
        <div className="container">
          <div className="grid gird-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* Text */}
              <h1 className="text-center text-2xl sm:text-3xl sm:text-left font-semibold text-white/90 pl-3 capitalize">
                java junction coffee cafe is available for android and IOS
              </h1>
              {/* Logos */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="https://play.google.com/store/">
                  <img
                    src={playStoreImage}
                    alt="play store logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="https://www.apple.com/app-store/">
                  <img
                    src={appStoreImage}
                    alt="play store logo"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
