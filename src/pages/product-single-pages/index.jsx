import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useProductStore from "@stor-product";
import SingleProductCard from "../../components/modal/single-product-modal";
import { ToastContainer } from "react-toastify";

function Index() {
  // const { getIdProduct } = useProductStore();
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [img, setImage] = useState([]);

  const getProduct = async () => {
    try {
      const data = await getIdProduct(id);
      setProduct(data);
      if (data?.image_url) {
        setImage(
          data.image_url.map((image) => {
            return {
              original: image,
              thumbnail: image,
            };
          })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="original-container">
        <div className="py-10">
          <SingleProductCard product={product} imgs={img} />
        </div>
      </div>
    </>
  );
}

export default Index;
