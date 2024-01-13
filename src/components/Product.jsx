import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Product = () => {
  useState(() => {
    Aos.init({ duration: 1000 });
  });

  const products = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt excepturi, eveniet debitis aliquam sint.",
      image: "/cctv-1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem unde consectetur molestiae iure laudantium debitis deleniti asperiores minus velit blanditiis adipisci ipsum possimus ad, quaerat nesciunt odit labore quos ullam. Sed doloribus illo eveniet quas numquam voluptas labore hic est. Dicta facere sint cumque nihil omnis provident maxime unde fuga neque ipsam eligendi alias deserunt aliquam deleniti quibusdam esse, rem vero cum corporis earum ratione impedit quisquam, minus adipisci. Ad eum ipsam alias saepe facere. Molestias, nulla eveniet? Reprehenderit illum perspiciatis consectetur? Dolor, vitae voluptates, voluptatum eos autem debitis inventore aliquam neque est aliquid aspernatur nisi eaque? Qui, vitae.",
      image: "/tplink.png",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt excepturi, eveniet debitis aliquam sint.",
      image: "/fiberoptikkuning.png",
    },
    {
      id: 4,
      name: "Product 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt excepturi, eveniet debitis aliquam sint.",
      image: "/cctv-1.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt excepturi, eveniet debitis aliquam sint.",
      image: "/cctv-1.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sunt excepturi, eveniet debitis aliquam sint.",
      image: "/cctv-1.jpg",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-tr from-white to-slate-50 pt-16 min-h-dvh" id="product">
        <div className="container w-full">
          <div className="w-full px-4 pb-4">
            <div className="max-w-full mx-auto text-center pt-8">
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Product Terbaru
              </h2>
              <p className="font-medium text-md text-dark_sec md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                in rem veritatis non modi similique? Inventore tempora officiis
                explicabo natus.
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="mb-12 p-4 md:w-1/2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <div className="rounded-md shadow-md overflow-hidden hover:scale-95 hover:border-4 transition-all duration-500 hover:border-black hover:shadow-sm">
                  <div className="w-full h-[27rem]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-xl mt-5 mb-3">
                  {product.name}
                </h3>
                <p className="font-medium text-base text-dark_sec">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
