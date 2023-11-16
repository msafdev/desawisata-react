import { MoveDownRight } from "lucide-react";

import Product from "../components/Product";
import { getUMKM } from "../API";

export default function Umkm() {
  const { produk, loading } = getUMKM();

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div
        id="hero"
        className="hero-3 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]"
      >
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #UMKM
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-medium not-italic">
            Dukung Kreatifitas <span className="font-bold">UMKM</span> Eduwisata{" "}
          </span>
          Alas Watu Kebonan
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          Alas Watu Kebonan menawarkan berbagai produk UMKM yang dapat Anda beli
          sebagai oleh-oleh. Dengan harga yang terjangkau, Anda dapat membawa
          pulang berbagai produk UMKM yang ada di Alas Watu Kebonan.
        </p>
        <div className="flex w-full md:flex-row flex-col flex-wrap justify-end items-end gap-x-3 gap-y-2 z-[5]">
          <button
            onClick={() => {
              window.scrollTo({
                top: document.getElementById("hero").scrollHeight,
                behavior: "smooth",
                offset: -100,
              });
            }}
            className="w-fit flex items-center gap-3 font-semibold text-sm text-white px-4 uppercase group"
          >
            Selengkapnya
            <div className="p-3 bg-green-500 rounded-full">
              <MoveDownRight
                size={18}
                className="group-hover:rotate-45 duration-300 transition-all ease-in-out"
              />
            </div>
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="w-full bg-white text-primary py-6 md:py-12 flex flex-col items-center">
        <h1 className="uppercase font-semibold text-center mb-6 text-lg md:text-2xl">
          Macam-macam Produk UMKM AWK
        </h1>
        <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[1000px] duration-0 h-fit px-4 md:px-8">
          {loading ? (
            <div className="flex justify-center items-center xl:col-start-2 my-12 xl:col-span-1 md:col-start-1 md:col-span-2">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            produk.map((product) => (
              <Product product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
