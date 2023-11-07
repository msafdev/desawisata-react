import { MoveDownRight } from "lucide-react";

import { products } from "../data";
import Product from "../components/Product";

export default function Umkm() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div className="hero-3 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]">
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #UMKM
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-medium not-italic">
            Dukung Kreatifitas <span className="font-bold">UMKM</span> Desa
            Wisata{" "}
          </span>
          Sambirejo
        </h1>
        <p className="text-white text-opacity-80 z-[5] text-sm md:text-lg lg:text-xl font-medium text-justify my-2 md:my-3 lg:my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          necessitatibus ducimus facere, eaque quas cumque excepturi sint!
          Assumenda.
        </p>
        <div className="flex w-full md:flex-row flex-col flex-wrap justify-end items-end gap-x-3 gap-y-2 z-[5]">
          <button className="w-fit flex items-center gap-3 font-semibold text-sm text-white px-4 uppercase group">
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
        <h1 className="uppercase font-semibold text-center mb-4 text-lg md:text-2xl">
          Lorem ipsum dolor sit.
        </h1>
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-8 lg:px-[20%] md:px-[10%] px-4">
          <p className="md:w-1/2 text-base text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
            <div className="py-2" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
            <div className="py-2" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
          </p>
          <p className="md:w-1/2 text-base text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
            <div className="py-2" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
            <div className="py-2" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed
            aliquid magnam error a consequatur nisi ad deleniti veniam nobis
            cumque enim fugit accusantium officiis iure mollitia, aut
            consequuntur dolor. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Suscipit alias ipsum aspernatur quae voluptas
            ipsam est possimus facilis cumque dolorem.
          </p>
        </div>
        <h1 className="uppercase font-semibold text-center mb-4 mt-6 md:mt-12 text-lg md:text-2xl">
          Lorem ipsum dolor sit.
        </h1>
        <div className="flex flex-wrap gap-4 items-center justify-center w-full max-w-[1000px] duration-0 h-fit px-4 md:px-8">
          {products.map((product) => (
            <Product product={product} key={product.id} width="240px"/>
          ))}
        </div>
      </div>
    </div>
  );
}
