import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../../service/product";

function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const product_id = localStorage.getItem("product_id");

  const getProductDetails = async () => {
    try {
      const response = await productService.get(product_id);
      if (response.status === 200 && response?.data) {
        setProduct(response.data);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 md:max-w-[550px] lg:max-w-full w-full flex gap-5">
      <div className="images p-2 md:max-w-[550px] lg:max-w-[40%] w-full inline-block ">
        {product.image_url && (
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product.image_url.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={item} className="d-block w-100" alt={`Carousel slide ${index}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )}
      </div>
      <div className="inline-block" >
        <h1 className="text-center text-[22px]">{product.product_name}</h1>
        <p className="py-3 text-black-500">{product.description}</p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Made in 
          <span className="text-black-500 pl-2">{product.made_in}</span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Color:
          <span className="text-black-500 pl-2">
            {product.color?.map((item) => (
              <span key={item} className="pl-3">
                {item}
              </span>
            ))}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Size:
          <span className="text-black-500 pl-2">
            {product.size?.map((item) => (
              <span key={item} className="pl-3">
                {item}
              </span>
            ))}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Gender:
          <span className={product.for_gender === "male" ? "text-gray-500 pl-2" : "text-red-500 ml-2"}>
            {product.for_gender}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Discount:
          <span className="text-black-500 pl-2">{product.discount} %</span>
        </p>
        <del className="text-black-500 font-serif flex justify-end">{product.cost} UZS</del>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Cost:
          <span className="text-red-500">
            {Math.ceil(product.cost)} UZS
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Age:
          <span className="text-yellow-500">
            {product.age_min} yoshdan - {product.age_max} yoshgacha
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Count:
          <span className="text-red-500 pl-2">{product.count} ta</span>
        </p>
        <div className="pt-10 flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <p>Yetkazib berish O’zbekiston bo’ylab 1 kun ichida. Agar maxsulotimiz 1 kun ichida yetib bormasa maxsulot mutlaqo bepul</p>
          </div>
        </div>
        <p onClick={() => navigate("/")} className="pt-5 cursor-pointer text-blue-500 ">
          Asosiy saxifa
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
