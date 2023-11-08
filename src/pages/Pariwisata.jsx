import { MoveDownRight } from "lucide-react";

export default function Pariwisata() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-primary pt-[100px]">
      {/* Hero */}
      <div className="hero-2 w-full h-[calc(100vh-100px)] flex flex-col justify-center px-4 md:px-[10%] lg:px-[15%] xl:px-[25%]">
        <p className="text-xs md:text-sm font-semibold text-opacity-80 text-white z-[5] uppercase">
          #Pariwisata
        </p>
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl z-[5] font-extrabold italic">
          <span className="font-bold not-italic">Jelajahi</span>{" "}
          <span className="font-medium not-italic">Keindahan Desa Wisata </span>
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
      {/* Detail */}
      <div className="w-full flex flex-col justify-center items-center py-8 gap-y-6 md:py-12 text-center bg-white">
        <h1 className="uppercase font-semibold text-center mb-4 text-lg md:text-2xl lg:px-[25%] md:px-[15%] px-4">
          Pariwisata Desa Wisata Kebonan
        </h1>
        {/* Pariwisata Cards */}
        <div className="flex flex-col md:flex-row gap-y-4 w-full gap-x-6 lg:px-[20%] md:px-[5%] px-4">
          <div className="aspect-square md:h-[250px] lg:h-[240px] h-[200px] bg-gray-300" />
          <div className="flex flex-col">
            <h1 className="text-left font-semibold md:text-xl text-lg">
              Rafting
            </h1>
            <p className="text-justify md:text-lg text-base my-2">
              Pariwisata wahana arung jeram di sungai serayu dengan panjang 12
              km, dengan 3 level kesulitan, yaitu level 1, level 2, dan level 3.
              Wahana arung jeram ini sangat cocok untuk wisata keluarga, dengan
              harga tiket Rp. 50.000,-/orang.
            </p>
            <button className="w-fit flex items-center gap-3 font-semibold text-sm text-white bg-primary px-4 py-2 rounded-full mt-auto ml-auto uppercase group">
              Lihat
            </button>
          </div>
        </div>
        {/* <div className="flex w-full gap-x-6">
          <div className="aspect-square h-[200px] bg-gray-300" />
          <div className="flex flex-col">
            <h1 className="text-left font-semibold md:text-2xl text-xl">Fun Games</h1>
            <p className="text-justify lg:text-xl md:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              necessitatibus ducimus facere, eaque quas cumque excepturi sint!
              Assumenda.
            </p>
            <button className="w-fit flex items-center gap-3 font-semibold text-sm text-white bg-primary px-4 py-2 rounded-full mt-auto uppercase group">
              Lihat
            </button>
          </div>
        </div>
        <div className="flex w-full gap-x-6">
          <div className="aspect-square h-[200px] bg-gray-300" />
          <div className="flex flex-col">
            <h1 className="text-left font-semibold md:text-2xl text-xl">Camping</h1>
            <p className="text-justify lg:text-xl md:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              necessitatibus ducimus facere, eaque quas cumque excepturi sint!
              Assumenda.
            </p>
            <button className="w-fit flex items-center gap-3 font-semibold text-sm text-white bg-primary px-4 py-2 rounded-full mt-auto uppercase group">
              Lihat
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
