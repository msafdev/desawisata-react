import { ShoppingBag } from "lucide-react";

export default function Product({ product, width }) {
  return (
    <div className="relative duration-0 overflow-hidden bg-white">
      <div className="card duration-0 group cursor-pointer">
        <img
          src={product.foto.url}
          alt="Product Image"
          className={`w-[100%] max-w-[240px] aspect-square object-cover duration-0`}
        />
        <div className="absolute top-0 right-0 p-3 bg-green-500 m-2 rounded-full text-white translate-y-[-100px] group-hover:translate-y-0 duration-300 ease-in-out">
          <ShoppingBag size={20} />
        </div>
      </div>
      <div
        className={`flex flex-col gap-1 py-3 w-[100%] max-w-[240px] text-left duration-0`}
      >
        <h1 className="text-primary text-lg text-left font-semibold">
          {product.nama}
        </h1>
        <p className="text-primary text-opacity-80 text-sm text-justify line-clamp-3">
          {product.deskripsi}
        </p>
      </div>
    </div>
  );
}
