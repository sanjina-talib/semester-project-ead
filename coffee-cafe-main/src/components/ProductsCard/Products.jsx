import coffeeImg from "../../assets/heroImage.png";
const productsData = [
  {
    id: 1,
    title: "espresso",
    description:
      "Rich, bold, and smooth—an intense shot of pure coffee perfection.",
    imgLink: coffeeImg,
    aosDelay: "100",
  },
  {
    id: 2,
    title: "latte",
    description:
      "A creamy blend of espresso and steamed milk, perfectly smooth and velvety.",
    imgLink: coffeeImg,
    aosDelay: "300",
  },
  {
    id: 3,
    title: "cappuccino",
    description:
      "A balanced mix of espresso, steamed milk, and a layer of frothy foam for a rich, airy taste.",
    imgLink: coffeeImg,
    aosDelay: "500",
  },
];
const Products = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container py-10">
          {/* Title    */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800 capitalize">
              best coffee, made for you
            </h1>
          </div>
          {/* Product Cards */}
          <div
            className="grid
         grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center"
          >
            {productsData.map((product, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                key={index}
                className="bg-white rounded-2xl hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
              >
                <div className="h-[122px]">
                  <img
                    src={product.imgLink}
                    alt="coffee image"
                    className="max-w-[200px] transform -translate-y-14"
                  />
                </div>
                {/* Text */}
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold capitalize">
                    {product.title}
                  </h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
