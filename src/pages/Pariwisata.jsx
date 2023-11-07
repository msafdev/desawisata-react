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
      <div className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-center items-center py-10 text-center px-8 bg-white">
        <h1>Hello</h1>
      </div>
    </div>
  );
}
