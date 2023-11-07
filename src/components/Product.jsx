import { ShoppingBag } from "lucide-react";

export default function Product({ product, width = "300px" }) {
  return (
    <div className="relative duration-0 overflow-hidden bg-white">
      <div className="card duration-0 group cursor-pointer">
        <img
          src="https://desawisatasambirejo.com/wp-content/uploads/2022/09/Gantungan-kunci-2-1024x1024.png"
          alt="Product Image"
          className={`w-[100%] md:w-[${width}] max-w-[400px] aspect-square object-cover duration-0`}
        />
        <div className="absolute top-0 right-0 p-3 bg-green-500 m-2 rounded-full text-white translate-y-[-100px] group-hover:translate-y-0 duration-300 ease-in-out">
          <ShoppingBag size={20} />
        </div>
      </div>
      <div
        className={`flex flex-col gap-1 px-2 py-1 w-[100%] md:w-[${width}] max-w-[400px] text-left duration-0`}
      >
        <h1 className="text-primary text-lg text-left font-semibold">
          {product.nama}
        </h1>
        <p className="text-primary text-opacity-80 text-sm text-justify line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          explicabo.
        </p>
      </div>
    </div>
  );
}
