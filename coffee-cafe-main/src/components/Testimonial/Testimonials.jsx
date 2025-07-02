import Slider from "react-slick";

// Testimonials data array
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "The ambiance at this cafe is perfect for relaxing or working. The coffee is consistently great, and the staff is always friendly!",
    img: "https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I love the variety of coffee blends offered here. It’s my go-to spot for catching up with friends or grabbing a quiet cup alone.",
    img: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "The cozy atmosphere and excellent coffee make this cafe a standout. It's the perfect place to unwind and enjoy a well-crafted latte.",
    img: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Emily Johnson",
    text: "Every visit to this cafe feels like a special occasion. The baristas are skilled, and the pastries are a delightful bonus to the perfect coffee.",
    img: "https://images.pexels.com/photos/26570912/pexels-photo-26570912/free-photo-of-sea-turtle-over-coral-on-seabed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    name: "Robert Wilson",
    text: "This cafe has become my second home. The coffee is always fresh, and the atmosphere is just right for relaxing or getting some work done.",
    img: "https://images.pexels.com/photos/26700466/pexels-photo-26700466/free-photo-of-close-up-of-a-pelican-standing-near-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-14 mb-20">
        <div className="container">
          {/* Header */}
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800 capitalize">
              testimonial
            </h1>
          </div>
          {/* Testimonials Section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {testimonialsData.map((data, index = data.id) => (
                <div key={index} className="my-6">
                  <div className="flex flex-col gap-4 shadow-xl py-8 mx-4 px-5 rounded-xl bg-primary/10 relative">
                    {/* Image */}
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt={`${data.name} image`}
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/70 font-cursive">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
