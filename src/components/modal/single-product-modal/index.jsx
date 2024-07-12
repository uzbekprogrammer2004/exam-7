import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { toast } from 'react-toastify';
// import ImageGallery from 'react-image-gallery';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import useLikeStore from '@stor-like';
// import { getCookies } from '@coocse';
import { useState } from 'react';

function ProductDetails({ product, imgs }) {
  const navigate = useNavigate();
//   const { postLike } = useLikeStore();
  const [count, setCount] = useState(1);

//   const handleLike = async (id) => {
//     if (getCookies('user_id')) {
//       const like = await postLike(id);
//       if (like) {
//         toast.success('was included in the list');
//       } else {
//         toast.info('removed from the list');
//       }
//     } else {
//       toast.info("Janob siz ro'yhatdan o'tmagansiz");
//     }
//   };

  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      <div className="max-w-[600px] max-h-[700px] w-full h-full">
        {/* <ImageGallery
          autoPlay={false}
          infinite={true}
          thumbnailPosition="left"
          showPlayButton={false}
          showFullscreenButton={true}
          items={imgs}
        /> */}
      </div>
      <div className="p-2 md:max-w-[330px] lg:max-w-[550px] w-full">
        <h1 className="text-center text-[22px]">{product?.product_name}</h1>
        <p className="py-3 text-gray-600">{product?.description}</p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Sifati:
          <Stack spacing={1} sx={{ paddingY: 1 }}>
            <Rating name="size-medium" defaultValue={4} size="large" />
          </Stack>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Islab chiqarilgan joyi:
          <span className="text-red-500 pl-2">{product?.made_in}</span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Mahsulot rangi:
          <span className="text-gray-500 pl-2">
            {product?.color?.map((el) => (
              <span key={el} className="pl-3">
                {el}
              </span>
            ))}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Mahsulot o'lchami:
          <span className="text-red-500 pl-2">
            {product?.size?.map((el) => (
              <span key={el} className="pl-3">
                {el}
              </span>
            ))}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Mahsulot soni:
          <span className="text-red-500 pl-2">{product?.count} ta</span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Chegirma ko'rsatgich:
          <span className="text-red-500 pl-2">{product?.discount} %</span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Kimlar uchun:
          <span className={product?.for_gender === 'male' ? 'text-gray-500 pl-2' : 'text-red-500 ml-2'}>
            {product?.for_gender}
          </span>
        </p>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Yosh oraligi:
          <span className="text-red-500">{product?.age_min} yoshdan - {product?.age_max} yoshgacha</span>
        </p>
        <del className="text-gray-500 font-serif flex justify-end">{product?.cost} UZS</del>
        <p className="flex items-center justify-between pb-[2px] border-b mb-2">
          Narxi:
          <span className="text-red-500">{Math.ceil(product?.cost - (product?.cost / 100) * product?.discount) * count} UZS</span>
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconButton aria-label="add to favorites" onClick={() => handleLike(product?.product_id)}>
              <FavoriteIcon fontSize="medium" />
            </IconButton>
            <IconButton aria-label="add to cart">
              <ShoppingCartIcon fontSize="medium" />
            </IconButton>
          </div>
          <div className="flex items-center gap-5 border p-2 rounded-md">
            <button className="text-[20px]" disabled={count === 1} onClick={() => setCount(count - 1)}>
              <RemoveIcon />
            </button>
            <span className="text-[18px]">{count}</span>
            <button className="text-[20px]" onClick={() => setCount(count + 1)} disabled={count === product?.count}>
              <AddIcon />
            </button>
          </div>
        </div>
        <div className="pt-10 flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <p>Yetkazib berish O’zbekiston bo’ylab</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Do’kondi o’zidan olib ketishingiz mumkin</p>
          </div>
          <div className="flex items-center gap-4">
            <p>Tahminiy yetkazib berish 1 kundan 3 kungacha</p>
          </div>
        </div>
        <p onClick={() => navigate('/')} className="pt-5 cursor-pointer">
          Asosoiy sahifaga qaytish →
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
